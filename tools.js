// Select elements
const joinBtn1 = document.getElementById('joinBtn1'); // First "Join" button
const modalOverlay = document.getElementById('modalOverlay'); // Modal overlay
const closeModal = document.getElementById('closeModal'); // Close button

// Open modal on button click
joinBtn1.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Close modal on 'X' click
closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close modal when clicking outside modal content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
