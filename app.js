// Show welcome alert on page load
window.addEventListener('load', () => {
  alert("Welcome to the Spider-Man Fanpage!");
});

// Enlarge the main image slightly on hover
const mainImg = document.getElementById("mainImg");

mainImg.addEventListener("mouseenter", () => {
  mainImg.style.transform = "scale(1.05)";
  mainImg.style.transition = "transform 0.3s";
});

mainImg.addEventListener("mouseleave", () => {
  mainImg.style.transform = "scale(1)";
});

// Log a message when any .boxLink is clicked
const links = document.querySelectorAll(".boxLink");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Link clicked: ${link.textContent}`);
  });
});

// Add a toggle button to hide/show the "Creation & Development" section
const description = document.getElementById("description");

const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Creation Section";
toggleButton.style.margin = "1rem";
toggleButton.style.padding = "0.5rem 1rem";
toggleButton.style.cursor = "pointer";

// Insert the button just before the description
description.parentElement.insertBefore(toggleButton, description);

toggleButton.addEventListener("click", () => {
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
});
