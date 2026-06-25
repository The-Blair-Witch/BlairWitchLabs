

console.log("1. Script has started loading!");
var sockett = io("http://127.0.0.1:5000");

function appendComments(item) {

	const entries = document.getElementById("entries");
	const template = document.getElementById("comment-template");

	//		entries.querySelectorAll('.comment-card').forEach(card => card.remove());
	if (!entries || !template) return;

	const clone = template.content.cloneNode(true);

	const cardSelect = clone.querySelector(".comment-card");
	const nameSelect = clone.querySelector(".comment-name");
	const dateSelect = clone.querySelector(".comment-date");
	const bodySelect = clone.querySelector(".comment-body");

	cardSelect.style.borderLeft = `5px solid ${item.color}`;

	nameSelect.textContent = item.name;
	nameSelect.style.color = item.color;
	dateSelect.textContent = item.date.slice(0, 16);
	bodySelect.textContent = item.comment;

	entries.appendChild(clone)
	cardSelect.scrollIntoView({
		behavior: 'smooth',
		block: 'end'
	});
}
alert("THE SCRIPT IS RUNNING!");

async function getNum() {
	try {
		const response = await fetch("http://127.0.0.1:5000/get-captcha")
		const data = await response.json();
		document.getElementById("num1").textContent = data.num1;
		document.getElementById("num2").textContent = data.num2;

	}
	catch (error) {
		console.error("error fetching captcha numbers", error);
	}
}



async function getComments() {
	try {
		const response = await fetch("http://127.0.0.1:5000/get-comments");
		const comments = await response.json();

		//	document.getElementById("entries").innerHTML = "";
		comments.forEach(item => appendComments(item));
	}

	catch (error) {
		console.log("Error loading comments", error);
	}
}

sockett.on('new_comment', (comment) => { appendComments(comment) })

function initGuestbook() {
	const submitComment = document.getElementById("app");

	if (submitComment) {
		submitComment.addEventListener('submit', (e) => {
			e.preventDefault()

			console.log("2. The submit button was clicked and default prevented!");

			const payload = {
				name: document.getElementById("name").value,
				comment: document.getElementById("comment").value,
				color: document.getElementById("color").value

			};

			sockett.emit('submit_comment', payload);
			document.getElementById('app').reset();
		});
	}
	//getNum();
	getComments();

}

