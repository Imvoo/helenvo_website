var LETTER_ADD_DELAY = 70;
var LETTER_DELETE_DELAY = 100;
var LETTER_START_DELAY = 250;
var LETTER_INBETWEEN_DELAY = 0;
var START = 300;
var totalDelay = 0;
var typeID = "heroText";

function Typewriter(word, lastWord) {
	letters = word.split('');

	totalDelay += LETTER_START_DELAY;

	letters.forEach(function(element, index){
		if (element != "\n") {
			totalDelay += LETTER_ADD_DELAY;
		}

		window.setTimeout(function() { AddLetter(element, typeID); }, totalDelay);
	});

	if (lastWord == false) {
		totalDelay += LETTER_INBETWEEN_DELAY;

		letters.forEach(function(element, index){
			totalDelay += LETTER_DELETE_DELAY;
			window.setTimeout(function() { DeleteLetter(typeID); }, totalDelay);
		});
	}
}

function DeleteLetter(id) {
	var element = document.getElementById(id);

	if (element.innerHTML.length > 0) {
		element.innerHTML = element.innerHTML.slice(0, -1);
	}
}

function AddLetter(letter, id) {
	var element = document.getElementById(id);

	if (letter == '\n') {
		element.innerHTML = element.innerHTML + "</br>";
	}
	else {
		element.innerHTML = element.innerHTML + letter;
	}
}

window.onload = function() {
	var words = [
		"my name is helen.",
		"\ni am a left-handed, glass",
		"\nhalf full, melbourne based",
		"\ndesigner & photographer.",
		"\n\nnice to meet you"
	]

	word = "hello";

	totalDelay += 3000;
	for (var i = 0; i < word.length; i++) {
		totalDelay += LETTER_DELETE_DELAY;
		window.setTimeout(function() { DeleteLetter("heroHeader"); }, totalDelay);
	};

	// window.setTimeout(function() {AddLetter("", "blinker")}, totalDelay);
	window.setTimeout(function() {
		var element = document.getElementById("blinker");
		element.className = "blinker";
	}, totalDelay)

	words.forEach(function(element, index){
		Typewriter(element, true);
	});
};