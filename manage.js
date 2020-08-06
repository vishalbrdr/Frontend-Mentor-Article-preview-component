var btn = document.getElementById("btn");
var popup = document.getElementById("share");
var icon = document.getElementById("svg");
btn.addEventListener("click", function () {
    btn.classList.toggle("change__btn");
    popup.classList.toggle("grid");
    icon.classList.toggle("change__svg");
});