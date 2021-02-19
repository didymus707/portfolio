const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const gallery = document.querySelector('.gallery');
const form = document.querySelector(".form");
const git = document.querySelector("#getintouch");
const status = document.querySelector("#status");
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

const success = () => {
  form.reset();
  status.classList.add("success");
  status.innerHTML = 'Thanks!';
}

const err = () => {
  status.classList.add("error");
  status.innerHTML = 'Oops, there was a problem!. Try again in 15minutes!'
}


form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(form.action);
  postForm(form.action, data, success, err);
})

const postForm = async (link, data, success, error) => {
  try {
    const request = await fetch(link, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: data,
    });
    const response = await request
    response.status === 200 ? success() : error()
  } catch (err) {
    throw new Error(error)
  }
}