<script>
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close other dropdowns if a new dropdown is opened
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !event.target.classList.contains('filter-btn')) {
            dropdown.style.display = 'none';
        }
    });
});
</script>
