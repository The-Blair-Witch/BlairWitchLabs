let toggle = false;

/* turn into list or dictonary? */
/*side nav*/
let homeButton = document.getElementById("home");
let bookButton = document.getElementById("book-reviews");
let movieButton = document.getElementById("movie-reviews");
let artButton = document.getElementById("art-display");
let writtingButton = document.getElementById("writting");
let gamingButton = document.getElementById("gaming");
let musicButton = document.getElementById("music");
let photoButton = document.getElementById("photography");
let codeButton = document.getElementById("programing");
let collectButton = document.getElementById("collecting");
/*footer*/
let archiveButton = document.getElementById("archive");
let legalButton = document.getElementById("legal");
let contactButton = document.getElementById("contact");

/*refactor this to find a better way to store and attach list of post to make quicker to append*/

/*side nav fetch*/
fetch("blog.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("window").querySelector("div").innerHTML = data;
		fetch("blog_1.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("post-1").innerHTML = data;
			})
	})
	.catch(error => {
		console.error("Error loading the file:", error)
	})

const guestToggle = document.getElementById("guestToggle");
guestToggle.addEventListener('click', async (e) => {
	e.preventDefault();

	if (toggle == false) {
		const response = await fetch("guestbook/guestbook.html");
		const guestbook = await response.text();
		document.getElementById("chat-window").innerHTML = guestbook;

		if (typeof initGuestbook === "function") {
			initGuestbook();
		}

		toggle = true;
	}
	else {
		document.getElementById("chat-window").innerHTML = "";
		toggle = false;
	}
});



homeButton.addEventListener("click", function() {
	fetch("blog.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
			fetch("blog_1.html")
				.then(response => response.text())
				.then(data => {
					document.getElementById("post-1").innerHTML = data;
				})
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})
});

bookButton.addEventListener("click", function() {
	fetch("books.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

movieButton.addEventListener("click", function() {
	fetch("movies.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

artButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

writtingButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

gamingButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

musicButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

photoButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

codeButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

collectButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

/*footer fetch */
archiveButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

legalButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

contactButton.addEventListener("click", function() {
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

function fetchAndriod() {
	fetch("andriod.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})
}

function fetchDarkCity() {
	fetch("darkcity.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})
}




















