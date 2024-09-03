let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let NextBtn = document.getElementById("NextBtn");

// For Scrolling
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";

});

// Forward and Backward through buttons
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});