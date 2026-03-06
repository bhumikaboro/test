
/*Right Click & F12 Disabled*/


  document.addEventListener('contextmenu', function(e) {                
    e.preventDefault();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });



/*Right Click & F12 Disabled*/

function scrollToSection() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* Disable Right Click */
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

/* Disable Inspect + View Source + DevTools */
document.onkeydown = function(e) {

  if (e.keyCode == 123) { // F12
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    return false;
  }
};