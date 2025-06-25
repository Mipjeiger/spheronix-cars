// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika vehicles menu di klik
document.querySelector('#vehicles-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan Nav
const vehicles = document.querySelector('#vehicles-menu');

document.addEventListener('click', function(e) {
    if(!vehicles.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
