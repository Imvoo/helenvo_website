var allHeros = document.getElementsByTagName("section");
console.log(allHeros);

window.onscroll = function () {
	var currentPos = document.getElementsByTagName("body")[0].scrollTop;
	var secondSection = document.getElementsByTagName("section")[1].offsetTop;

	if (currentPos > (secondSection - 50)) {
		document.getElementById("nav").className = "white";
		document.getElementById("aside").className = "white";
		document.getElementById("logo").src = "./images/logo_white.png";
	}
	else {
		document.getElementById("nav").className = "black";
		document.getElementById("aside").className = "black";
		document.getElementById("logo").src = "./images/logo_black.png";
	}

	[].forEach.call(allHeros, function(item) {
		if (item.done == null) {
			item.done = false;
		}

		if (item.className.length > 0) {
			var tmpItem = item.children[0].children[0];
			var tmpItem2 = item.children[0].children[1];

			if (currentPos > item.offsetTop - (item.offsetHeight / 2)) {
				console.log("offset!")
				tmpItem.className = "hero fadeInDown";
				item.done = true;
			}

			if (currentPos > item.offsetTop + 250 - (item.offsetHeight / 2)) {
				tmpItem2.className = "subhero fadeInDown";
			}
		}
	});
};