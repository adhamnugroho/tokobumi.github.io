const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

// Add class slide if menu toogle clicked
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

function reloadWebsite(link) {
  window.location.href = `${link}`;

  window.location.reload();

  window.open(`${link}`, "_self");
}
