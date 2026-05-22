let toggle = false;

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

let archiveButton = document.getElementById("archive");
let legalButton = document.getElementById("legal");
let contactButton = document.getElementById("contact");

/*refactor this to find a better way to store and attach list of post to make quicker to append*/

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
	fetch("construction.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("window").querySelector("div").innerHTML = data;
		})
		.catch(error => {
			console.error("Error loading the file:", error)
		})

});

movieButton.addEventListener("click", function() {
	fetch("construction.html")
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


















