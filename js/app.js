const editButton = document.querySelector(".btn_edit")
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".btn_close")
const saveButton = document.querySelector(".modal__window_btn") 

editButton.addEventListener("click", () => {
    document.body.classList.add("no-scroll")
    modal.classList.add("active")
})
closeButton.addEventListener("click", close)
saveButton.addEventListener("click", close)

function close() {
    document.body.classList.remove("no-scroll")
    modal.classList.remove("active")
}