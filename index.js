const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const routes = document.querySelector('.routes');

const toggleChange = () => {
  menuIcon.classList.toggle('change')
};

const openOrCloseOverlay = () => {
  overlay.style.width === '100%' ?
    overlay.style.width = '0%' : overlay.style.width = '100%';
}


menuIcon.addEventListener('click', () => {
  toggleChange();
  openOrCloseOverlay();
});