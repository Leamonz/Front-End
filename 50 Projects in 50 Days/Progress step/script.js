let progress_bar = document.querySelector(".progress-container .progress");
let circles = document.getElementsByClassName("circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let curPos = 1;

next.onclick = function () {
	circles[curPos].classList.add("active");
	curPos++;
	progress_bar.style.width = (curPos - 1) / (circles.length - 1) * 100 + '%';
	if (curPos === 4) {
		next.classList.add("disabled");
	}
	if (curPos > 1) {
		prev.classList.remove("disabled");
	}
}

prev.onclick = function () {
	curPos--;
	if (curPos === 1) {
		prev.classList.add("disabled");
	}
	if (curPos < 4) {
		next.classList.remove("disabled");
	}
	circles[curPos].classList.remove("active");
	progress_bar.style.width = (curPos - 1) / (circles.length - 1) * 100 + '%';
}