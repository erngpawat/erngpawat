// test function
// function myFunction() {
// 	document.getElementById("demo").innerHTML = "Paragraph changed.";
// }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
// 	if (!event.target.matches(".dropbtn")) {
// 		var dropdowns = document.getElementsByClassName("dropdown-content");
// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains("show")) {
// 				openDropdown.classList.remove("show");
// 			}
// 		}
// 	}
// }

// window.addEventListener("load", function () {
// wait until the page loads before working with HTML elements
document.addEventListener("click", function (event) {
	// click listener on the document
	document.querySelectorAll(".dropdown-content").forEach(function (el) {
		if (el !== event.target) {
			el.classList.remove("show");
		}
	});
	if (event.target.matches(".dropbtn")) {
		event.target
			.closest(".dropdown")
			.querySelector(".dropdown-content")
			.classList.toggle("show");
	}
});

// prevent dropdown from closing when clicking inside the dropdown content
document.querySelectorAll(".dropdown-content").forEach(function (el) {
	el.addEventListener("click", function (event) {
		event.stopPropagation();
	});
});

// });
