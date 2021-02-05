const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const routes = document.querySelector('.routes');
const getScreenWidth = () => window.innerWidth;
const width = getScreenWidth();

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

if (width < 768) {
  overlay.addEventListener('click', e => {
    const links = ['Home', 'Portfolio', 'About', 'Contact'];
    if (links.includes(e.target.textContent)) {
      toggleChange();
      overlay.style.width = '0%'
    }
  });
}