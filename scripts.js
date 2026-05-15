let toggle = false;

let homeButton = document.getElementById("home");

homeButton.addEventListener("click", function() {
	if (!toggle) {
		fetch("test.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("window").querySelector("div").innerHTML = data;
			})
			.catch(error => {
				console.error("Error loading the file:", error)
			})
		toggle = true;
	}

	else {
		document.getElementById("window").querySelector("div").innerHTML = "EMPTY";
		toggle = false;
	}
});

