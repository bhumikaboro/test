
/** HTML RIGHT CLICK DISABLE **/ /** HTML RIGHT CLICK DISABLE **/
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });
/** HTML RIGHT CLICK DISABLE **/ /** HTML RIGHT CLICK DISABLE **/


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    const movementSpeed = 3;
    
    const hoverLink = (event) => {
        let targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }

    links.forEach(link => {
        link.addEventListener('mousemove', hoverLink);
    });
});



document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload stop

    // Yahan normally aap AJAX / fetch se data send karte ho
    // Abhi hum sirf success simulate kar rahe hain

    document.getElementById("successMsg").style.display = "block";

    // Form auto clear
    this.reset();
});


document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());

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