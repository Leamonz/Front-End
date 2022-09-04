let body = document.getElementsByTagName("body")[0];

let skins = document.querySelectorAll(".container .skins li");

skins[0].onclick = function () {
	body.style.background = "url(\"img/big/525.jpg\")";
}

skins[1].onclick = function () {
	body.style.background = "url(\"img/big/813.jpg\")";
}

skins[2].onclick = function () {
	body.style.background = "url(\"img/big/829.jpg\")";
}

skins[3].onclick = function () {
	body.style.background = "url(\"img/big/880.jpg\")";
}