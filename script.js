let togglebtn = document.querySelector(".toggle-menu");

let iconList = document.querySelector(".list");

togglebtn.addEventListener("click", () => {
  iconList.classList.toggle("active");
  let isOpen = iconList.classList.contains("active");
  togglebtn.setAttribute("aria-hidden", isOpen);
  iconList.setAttribute("aria-expanded", !isOpen);
});

// slider js

const slides = document.querySelectorAll(".review-text-box");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentSlide = 0;

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

const showSlide = (index) => {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[index].classList.add("active");

  if (currentSlide === 0) {
    nextBtn.classList.add("active");
    prevBtn.classList.remove("active");
  } else if (currentSlide === slides.length - 1) {
    nextBtn.classList.remove("active");
    prevBtn.classList.add("active");
  } else {
    nextBtn.classList.add("active");
    prevBtn.classList.add("active");
  }
};
// for current slide

showSlide(currentSlide);

// tabs

function openTab(evt, tabName) {
  const contents = document.getElementsByClassName("tab-content");
  const buttons = document.getElementsByClassName("button-tabs");


  
  // Hide all tab content 
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // Remove 'active' class from all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Show the selected tab and mark button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
