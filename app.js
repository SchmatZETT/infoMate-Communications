'use strict';

const cells = document.querySelectorAll(".clickable");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const imgSrc = cell.getAttribute("data-img");
    overlayImg.src = imgSrc;
    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});