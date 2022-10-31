
const openNav = document.querySelector('.hamburger');
const toggleoverlay = document.querySelector('.toggleoverlay');
const toggleNav = document.querySelector('.toggle-nav');
const closeNav = document.querySelector('#close');

function openCloseNav() {
    openNav.classList.toggle('active');
    toggleNav.classList.toggle('toggle-active');
    toggleoverlay.classList.toggle('toggleoverlay-active');
}

openNav.addEventListener('click', openCloseNav);

closeNav.addEventListener('click', openCloseNav);

toggleoverlay.addEventListener('click', openCloseNav)
