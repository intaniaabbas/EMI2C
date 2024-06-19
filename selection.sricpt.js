// Toggle dropdown menu
document.getElementById('menuIcon').addEventListener('click', function() {
    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('public-transport').addEventListener('click', function() {
        window.location.href = 'public-transport.html';
    });

    document.getElementById('private-transport').addEventListener('click', function() {
        window.location.href = 'private-transport.html';
    });
});


