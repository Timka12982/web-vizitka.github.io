let count = 0

function fromText (text) {
	if (count < text.length) {
		document.getElementById("anim").innerHTML += text ["charAt"] (count)
		count++
		setTimeout (() => fromText (text), 250);
	}
}
fromText ("Визитка веб-разработчика")