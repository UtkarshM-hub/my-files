let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("Cose");
let sidebar = document.getElementById("sidebar");
openBtn.addEventListener("click", () => {
    sidebar.style.transform = "translateX(" + 0 + "px)";
});
closeBtn.addEventListener("click", () => {
    sidebar.style.transform = "translateX(" + 200 + "px)";
});