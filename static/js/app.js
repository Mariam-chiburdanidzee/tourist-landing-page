
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");


prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});






// burger-menu //

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const htmlElement = document.querySelector("html");
const navLinks = document.querySelectorAll(".nav-link");
const hiddenImages = document.querySelectorAll(".hidden-image");

const handleBurgerBar = () => {
  document.documentElement.scrollTop = 0;
  navMenu.classList.toggle("menu-active");
};

burger.addEventListener("click", handleBurgerBar);


// objects//
let product = [
  {
    Image: src = "static/images/main-img/plane.png",
    title: "FLIGHT BOOKING",
  },
  {
    Image: src = "static/images/main-img/hotel.png",
    title: "HOTEL & RESORT BOOKING",
  },
  {
    Image: src = "static/images/main-img/family.png",
    title: "FAMILY TRIP PLANNER",
  },
  {
    Image: src = "static/images/main-img/crouse.png",
    title: "CRUISE TOUR",
  },
  {
    Image: src = "static/images/main-img/camp.png",
    title: "FIRE CAMP",
  },
  {
    Image: src = "static/images/main-img/corporate.png",
    title: "CORPORATE HOLIDAYS",
  },
]


const rightServicesWrapper = document.querySelector(".right-services-wrapper");





let htmlCodeCard = ``;
product.forEach(function (object) {
  htmlCodeCard +=
    `<div class="right-services-card flex">
        <div>
        <img id="card-img" src="${object.Image}"> 
        </div>
        <div class="card-discreption flex">
          <h3 id="card-title">${object.title}</h3>
          <p id="card-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. </p>
          </div>
    </div>`
});

rightServicesWrapper.innerHTML += htmlCodeCard;


// modal//

const cardList = document.querySelectorAll(".right-services-card");
let modalImg = document.querySelector(".modal-card-img");
let modalTitle = document.querySelector(".modal-card-title");
const cardModal = document.querySelector(".modal-card");
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-wrapper');
const cover = document.querySelector('.cover');
cardList.forEach((card, index) => {
  card.addEventListener('click', () => {
    let newImg = product[index].Image;
    let newTitle = product[index].title;
    modalImg.src = newImg;
    modalTitle.innerHTML = newTitle;
    cardModal.style.display = "inline-block";
    modal.classList.remove('covered');
    cover.classList.remove('covered');
  });
});
const closeModal = function () {
  modal.classList.add('covered');
  cover.classList.add('covered');
};
btnCloseModal.addEventListener('click', closeModal);
cover.addEventListener('click', closeModal);


//number - increase//
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute
      ('data-target');
    const c = +counter.innerText;

    const increment = target / 250;

    if (c < target) {
      counter.innerText = `${Math.ceil(c +
        increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

//form - email//
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const text = document.getElementById('text');

submitBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Your email address is valid.';
    text.style.color = '#008000';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Please enter a valid email address.';
    text.style.color = '#ff0000';
  }

  setTimeout(() => {
    text.innerHTML = '';
  }, 800);

  emailInput.value = '';
});


//scroll - btn//
const scrollTopBtn = document.getElementById("scroll-top-btn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function topFunction() {
  let position = document.documentElement.scrollTop || document.body.scrollTop;
  let increment = position / 30;
  scrollToTop();

  function scrollToTop() {
    if (position > 0) {
      position -= increment;
      document.documentElement.scrollTo(0, position);
      document.body.scrollTo(0, position);
      setTimeout(scrollToTop, 30);
    }
  }
}

window.addEventListener("scroll", function () {
  scrollFunction();
});

scrollTopBtn.addEventListener("click", function () {
  topFunction();
});















