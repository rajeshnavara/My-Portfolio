var btn_Skills = document.getElementById("skills-Btn");
let skills_tab = document.getElementById("skills-Tab")
var close_btn = document.getElementById("close-Skills")


btn_Skills.addEventListener("click", function () {
    skills_tab.style.display = "block"
})
close_btn.addEventListener("click", function() {
    skills_tab.style.display = "none"
})