const mouse = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li a");

const mouseTxt = mouse.querySelector(".cursor-text");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
// function activeCursor(e) {
//   const item = e.target;
//   if (item.id === "logo" || item.classList.contains("burger")) {
//     mouse.classList.add("nav-active");
//   } else {
//     mouse.classList.remove("nav-active");
//   }
//   if (item.classList.contains("explore")) {
//     mouse.classList.add("explore-active");
//     // gsap.to(".title-swipe", 1, { y: "0%" });
//     mouseTxt.innerText = "Tap";
//   } else {
//     mouse.classList.remove("explore-active");
//     mouseTxt.innerText = "";
//     // gsap.to(".title-swipe", 1, { y: "100%" });
//   }
// }
//EventListeners
window.addEventListener("mousemove", cursor);
// window.addEventListener("mouseover", activeCursor);

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouse.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouse.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});
