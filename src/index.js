const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const routes = document.querySelector('.routes');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const closeClass = document.querySelector('.close');
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
      openOrCloseOverlay();
    }
  });
}

gallery.addEventListener('click', e => {
  if (e.target.classList.contains('open-modal')) {
    e.target.firstElementChild.style.display = 'block';
  }
});

window.onclick = e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  } else if (e.target.className === 'close') {
    e.target.offsetParent.offsetParent.style.display = 'none';
  }
}