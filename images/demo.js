// Open Modal
function openModal(name, subtitle, imageSrc) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-subtitle').innerText = subtitle;
    document.getElementById('modal-image').src = imageSrc;
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
