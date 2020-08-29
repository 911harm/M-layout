document.getElementById("menu-colap").addEventListener("click", displayDate);
document.getElementById("close").addEventListener("click", displayDate);

function displayDate() {
    var element = document.getElementById("colp");
    element.classList.toggle("view");
}
