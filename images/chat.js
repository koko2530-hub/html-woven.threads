// Get modal element
const modal = document.getElementById("shortlistModal");

// Get button that opens the modal
const button = document.getElementById("shortlistButton");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close-button");

// Open the modal when the button is clicked
button.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
