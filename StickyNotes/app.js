const addbtn = document.querySelector(".button");
const dltbtn = document.querySelector(".delete");
const popupBox = document.querySelector(".popup");


addbtn.addEventListener("click", () => {
    popupBox.classList.add("active")
})


dltbtn.addEventListener("click", () => {
    popupBox.classList.remove("active")
})