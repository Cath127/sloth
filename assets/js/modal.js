// MODAL
// Modal created using tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I

const openModal = document.getElementById("open-model");

const modal-container = document.getElementById("modal-container")

const closeModal = document.getElementById("close-modal")

open.addEventListener("click", () => {
    modal-container.classList.add("show");
});

close.addEventListener("click", () => {
    modal-container.classList.remove("show");
});

