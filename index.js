//======================================================
// scroll to top component
//======================================================


const scrollElem = document.querySelector(".scrolltop-style");
const herosection = document.querySelector("#section-hero");


const scrollTop = () =>{
  herosection.scrollIntoView({ behavior: "smooth" });
;}


scrollElem.addEventListener("click", scrollTop);

//======================================================
// responsive navbar component
//======================================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
const navbar = document.querySelector(".navbar-lists");


mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

navbar.addEventListener("click", () => {
  headerElem.classList.remove("active");
});

//======================================================
// responsive navbar component
//======================================================

// herosection

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting ?
   document.body.classList.add("sticky") :
   document.body.classList.remove("sticky");
}, {
  root: null,
   threshold: 0,
  });
  observer.observe( herosection);