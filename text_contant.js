let count = 0

function fromText (text) {
	if (count < text.length) {
		document.getElementById("text-contant").innerHTML += text ["charAt"] (count)
		count++
		setTimeout (() => fromText (text), 250);
	}
}
fromText ("Приветствую тебя в моей визитке!")