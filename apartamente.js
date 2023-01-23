if(document.querySelector('.popup')){
document.querySelector('.popup').style.display = "none"
document.querySelector('.meniu').addEventListener("click", () => {
    document.querySelector('.popup').style.display = "flex";
});
};
if(document.querySelector('.inchide')){
document.querySelector('.inchide').addEventListener("click", () => {
    document.querySelector('.popup').style.display = "none";
});
};
if(document.querySelector('.logoimage')){
document.querySelector('.logoimage').addEventListener("click", () => {
    location.href = "index.html"
});
};