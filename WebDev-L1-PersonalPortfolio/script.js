window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(window.scrollY > 50){
    header.style.background="#0f172a";
}
else{
    header.style.background="#111827";
}

});