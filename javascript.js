if(document.querySelector('.vinzare')){
document.querySelector('.vinzare').addEventListener("click", () => {

    document.querySelector('.vinzare').style.background = "white";
    document.querySelector('.vinzare').style.color = "black";
    document.querySelector('.anunt').style.background = "none";
    document.querySelector('.anunt').style.color = "white";
    document.querySelector('.chirie').style.background = "none";
    document.querySelector('.chirie').style.color = "white";
});
};
if(document.querySelector('.chirie')){
document.querySelector('.chirie').addEventListener("click", () => {
    document.querySelector('.chirie').style.background = "white";
    document.querySelector('.chirie').style.color = "black";
    document.querySelector('.anunt').style.background = "none";
    document.querySelector('.anunt').style.color = "white";
    document.querySelector('.vinzare').style.background = "none";
    document.querySelector('.vinzare').style.color = "white";
});
};
if(document.querySelector('.anunt')){
document.querySelector('.anunt').addEventListener("click", () => {
    document.querySelector('.anunt').style.background = "white";
    document.querySelector('.anunt').style.color = "black";
    document.querySelector('.vinzare').style.background = "none";
    document.querySelector('.vinzare').style.color = "white";
    document.querySelector('.chirie').style.background = "none";
    document.querySelector('.chirie').style.color = "white";
});
};
document.querySelector('.popup').style.display = "none"
document.querySelector('.meniu').addEventListener("click", () => {
    document.querySelector('.popup').style.display = "flex";
});
document.querySelector('.inchide').addEventListener("click", () => {
    document.querySelector('.popup').style.display = "none";
});
if(document.querySelector('.add1')){
document.querySelector('.add1').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add2').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add3').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add4').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add5').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add6').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add7').addEventListener("click", () => {
    location.href = "apartamente.html"
});
document.querySelector('.add8').addEventListener("click", () => {
    location.href = "apartamente.html"
});
};