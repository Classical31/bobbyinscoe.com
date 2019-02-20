$(document).ready(function() {
	var width = $(window).width() - 50;
	var height = $(window).height();
	var count = 0;

	console.log("height: " + height + ", width: " + width);
	function run() {
		var top = Math.random() * height;
		var left = Math.random() * width;
		console.log("height: " + top + ", width: " + left);

		// Ensure feed is placed inside container bounds
		if (top > 300) {
			while (top > 300) {
				console.log(
					"Height: " + top + "Feed placed out of container bounds. Reassigning"
				);
				top = Math.random() * height;
			}
		}
		if (left < 30) {
			while (left < 30) {
				console.log(
					"Width: " +
						left +
						". Feed placed out of container bounds. Reassigning"
				);
				left = Math.random() * width;
			}
		}
		$("#feed")
			.css("top", top + "px")
			.css("left", left + "px");
		$("#feed").removeClass("shake");
		count++;
		document.getElementById("counts").innerHTML = count;
	}
	$("#feed").mouseover(run);

	// var timeleft = 10;
	// var downloadTimer = setInterval(function() {
	// 	document.getElementById("countdown").innerHTML =
	// 		timeleft + " seconds remaining";
	// 	timeleft -= 1;
	// 	if (timeleft <= 0) {
	// 		clearInterval(downloadTimer);
	// 		document.getElementById("countdown").innerHTML = "Finished";
	// 	}
	// }, 1000);
});
