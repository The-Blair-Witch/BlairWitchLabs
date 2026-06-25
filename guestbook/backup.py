import sqlite3

connection = sqlite3.connect("guestbook.db")

cursor = connection.cursor()

userCreate = """CREATE TABLE IF NOT EXISTS 
Users(uniqueID TEXT PRIMARY KEY, name TEXT, date TEXT, isSpam INT, color TEXT);"""

cursor.execute(userCreate)

commentCreate = """CREATE TABLE IF NOT EXISTS
Comments();"""

class User: 
    def __init__(self, uniqueID=0, name="Empty", comments = [], color="grey"):
        self.uniqueID = uniqueID
        self.name = name
        self.comments = comments
        self.color = color

class Comment:
    def __init__(self, date="00/00/0000", comment="", isSpam=True, passCatcha=False):
        self.date = date
        self.comment = comment
        self.isSpam = isSpam
        self.passCatcha = passCatcha

def unpackFunc(active):
    query = "SELECT * FROM Users WHERE name = ?"     #pull from data row that == name or create new row if empty
    cursor.execute(query, (active.name,))
    row = cursor.fetchone()

    if row is not None:
        active.uniqueID = row[0]
        active.name = row[1]
        active.comments = row[2]
        active.color = row[3]
        return True
    else:
        insert_query = "INSERT INTO Users(name, comments, color,) VALUES (?, ?, ?)"
        cursor.execute(insert_query,(active.comments, active.comments, active.color))

        connection.commit()
        active.uniqueid = cursor.lastrowid
        


active = User()

active.name = input("Enter a Name")
active.comments.append(input("Enter a comment"))


unpackFunc(active)



