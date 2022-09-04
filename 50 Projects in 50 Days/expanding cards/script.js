let panels = document.getElementsByClassName("panel")

for (let i = 0; i < panels.length; i++) {
	panels[i].onclick = function () {
		for (let j = 0; j < panels.length; j++) {
			panels[j].classList.remove("active");
		}
		console.log(panels[i].classList);
		panels[i].classList.add("active");
	}
}