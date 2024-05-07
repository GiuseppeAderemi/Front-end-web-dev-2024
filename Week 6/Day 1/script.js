const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add event listener here

closedFace.addEventListener("click", () => {
    console.log("closedFace is clicked");
    closedFace.classList.add("hidden");
    openFace.classList.remove("hidden");
});
openFace.addEventListener("click", () => {
    console.log("openFace is clicked");
    openFace.classList.add("hidden");
    closedFace.classList.remove("hidden");
});