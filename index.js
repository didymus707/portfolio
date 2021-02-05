const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const routes = document.querySelector('.routes');
const getScreenWidth = () => window.innerWidth;
const width = getScreenWidth();

const toggleChange = () => {
  menuIcon.classList.toggle('change')
};

const openOrCloseOverlay = () => {
  overlay.classList.toggle('overlay-width')
}

menuIcon.addEventListener('click', () => {
  toggleChange();
  openOrCloseOverlay();
});

if (width < 768) {
  overlay.addEventListener('click', e => {
    const links = ['Home', 'Portfolio', 'About', 'Contact'];
    if (links.includes(e.target.textContent)) {
      toggleChange();
      overlay.style.width = '0%'
    }
  });
}