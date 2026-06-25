import sqlite3, random
from datetime import datetime, UTC
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

CORS(app)

def init_db():
    connection = sqlite3.connect("guestbook.db")
    cursor = connection.cursor()

    userCreate = """CREATE TABLE IF NOT EXISTS 
    Users(uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, color TEXT);"""

    cursor.execute(userCreate)

    commentCreate = """CREATE TABLE IF NOT EXISTS
    Comments(CommentID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, comment TEXT, uniqueID INTEGER, FOREIGN KEY (uniqueID) REFERENCES Users(uniqueID));"""

    cursor.execute(commentCreate)
    connection.commit()
    connection.close()

init_db()

class User: 
    def __init__(self, uniqueID=0, name="Empty", color="grey"):
        self.uniqueID = uniqueID
        self.name = name
        self.color = color

def unpackFunc(active):
    connection = sqlite3.connect("guestbook.db")
    cursor = connection.cursor()
    
    query = "SELECT * FROM Users WHERE name = ?"     #pull from data row that == name or create new row if empty
    cursor.execute(query, (active.name,))
    row = cursor.fetchone()

    if row is not None:
        active.uniqueID = row[0]
        active.name = row[1]
        active.color = row[2]
    else:
        insert_query = "INSERT INTO Users(name, color) VALUES (?, ?)"
        cursor.execute(insert_query,(active.name, active.color))

        active.uniqueID = cursor.lastrowid

    connection.commit()
    connection.close()
def updateUsers(active, color):
    connection = sqlite3.connect("guestbook.db")
    cursor = connection.cursor()
 
    query = "SELECT * FROM Users WHERE name = ?"     #pull from data row that == name or create new row if empty
    cursor.execute(query, (active.name,))
    row = cursor.fetchone()

    if row is not None:
        insert_query = "UPDATE Users  SET color = ? WHERE uniqueID = ? "
        cursor.execute(insert_query,(color, active.uniqueID))


@app.route("/get-comments", methods=["GET"])
def getChat():
    connection = sqlite3.connect("guestbook.db")
    cursor = connection.cursor()

    query = """SELECT Comments.name, Comments.comment, Comments.date, Users.color
            FROM Comments 
            LEFT JOIN Users ON Comments.uniqueID = Users.uniqueID 
            ORDER BY Comments.commentID ASC"""
    cursor.execute(query)
    rows = cursor.fetchall()
    connection.close()

    commentList = []

    for row in rows:
        commentList.append({
            "name": row[0],
            "comment": row[1],
            "date": row[2],
            "color": row[3] or "grey" #if None
            })

    return jsonify(commentList)

def addComment(active, comment, date):
    connection = sqlite3.connect("guestbook.db")
    cursor = connection.cursor()

    query = """INSERT INTO Comments(name, comment, date, uniqueID) VALUES (?, ?, ?, ?)"""
    cursor.execute(query, (active.name, comment, date, active.uniqueID))
    
    connection.commit()
    connection.close()
    
@socketio.on('submit_comment')
def api_comment_main(data):
    active = User()
    date = datetime.now(UTC).isoformat()

    active.name = data.get("name")
    active.color = data.get("color", "grey")
    comment = data.get("comment")

#    num1 = data.get("num1")
#    num2 = data.get("num2")
#    user_solution = data.get("captcha_answer")
    
#    if user_solution is None:
#        return jsonify({"status": "error", "message": "Incomplete data"})
#    elif num1 + num2 != user_solution:
#        return jsonify({"status": "error", "message": "Incorrect solution"})
        
    unpackFunc(active)
    addComment(active, comment, date)
    socketio.emit('new_comment', {
        "name": active.name,
        "comment": comment,
        "date": date,
        "color": active.color
    })

#@app.route("/get-captcha", methods=["GET"])
#def send_captcha_math():
#    randOne = random.randint(1, 10)
#    randTwo = random.randint(1, 10)
#
#    return jsonify({"num1": randOne, "num2": randTwo})
#
if __name__ == "__main__":
    socketio.run(app, debug=True)

