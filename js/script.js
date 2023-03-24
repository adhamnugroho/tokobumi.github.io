const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

// Add class slide if menu toogle clicked
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

function reloadWebsite(link) {
  let widthScreen = window.innerWidth;

  if (widthScreen <= 768) {
    window.location.href = `${link}`;

    window.location.reload();

    window.open(`${link}`, "_self");
  } else {
    window.location.href = `${link}`;

    window.open(`${link}`, "_self");
  }
}
