// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 2. Auto Typing Text Effect
const text = "Hi, It's Anoo Here.";
const typingElement = document.querySelector(".hero p");

function typeText(index = 0) {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    setTimeout(() => typeText(index + 1), 100); // typing speed
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      typeText(0);
    }, 5000); // 5s pause before retyping
  }
}

window.onload = () => {
  typingElement.innerHTML = "";
  typeText();
};


// 3. Scroll-to-Top Button (optional)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.classList.add("scroll-top");
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Get all gallery images
const images = document.querySelectorAll('.gallery-image');

// Get the popup modal and the image in it
const popup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');

// Get the close button
const closeButton = document.querySelector('.close-btn');

// When an image is clicked, display it in the popup
images.forEach(image => {
    image.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImage.src = image.src;  // Set the clicked image in the popup
    });
});

// When the close button is clicked, close the popup
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// When clicking anywhere outside the image, close the popup
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
