const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const routes = document.querySelector('.routes');
const portCon = document.querySelector('.portfolio-container');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
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

const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none';
}

portCon.addEventListener('click', e => {
  console.log(e.target.parentElement);
  if (e.target.className === 'see-project') {
    console.log('I was just clicked');
    openModal();
  }
});

close.addEventListener('click', closeModal);

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}