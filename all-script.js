
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
});



setInterval(function(){
  if (window.outerHeight - window.innerHeight > 150 ||
      window.outerWidth - window.innerWidth > 150) {
    document.body.innerHTML = "Access Denied";
  }
}, 1000);




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


/*Image Drag Disable*/
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
});



/*DevTools Open Detection*/

setInterval(function(){
  if (window.outerHeight - window.innerHeight > 150 ||
      window.outerWidth - window.innerWidth > 150) {
    document.body.innerHTML = "Access Denied";
  }
}, 1000);




    (function() {
                    let nav = document.querySelector(".bb-desktop-nav");
                    if (!nav) {
                        nav = document.querySelector(".nav-menu nav");
                    }
                    if (!nav) {
                        return;
                    }
                    const currSlug = location.pathname;
                    const currPageAnchor = nav.querySelector('a[href="'+currSlug+'"]');
                    const header = document.querySelector("#bb-header");

                    let lastAnchor = currPageAnchor;
					
                    document.addEventListener('scroll', function(){
                        if (!window.isScrollToSection) {
                            let headerOffsetHeight = 0;
                            
                                headerOffsetHeight = header.offsetHeight;
                            
                            let matchFound = false;
                            document.querySelectorAll("#bb-mc .bb-section").forEach((section, index) => {
                                let anchor;
                                let top = section.offsetTop;
                                let bottom = section.offsetTop + section.offsetHeight;

                                if (index > 0) {
                                    top = section.offsetTop - headerOffsetHeight - section.offsetHeight*0.3;
                                    bottom = section.offsetTop + section.offsetHeight*0.7;
                                }

                                if (window.scrollY >= top && window.scrollY <= bottom) {
                                    let sectionID = section.id.replace("bb-section-", "");
                                    anchor = nav.querySelector('a[data-anchor="'+sectionID+'"]');
                                    matchFound = true;
                                    if (!anchor) {
                                        anchor = lastAnchor;
                                    }
                                    else {
                                        lastAnchor = anchor;
                                    }
                                }
                                else if (!matchFound) {
                                    anchor = lastAnchor;
                                }

                                if (anchor) {
                                    nav.querySelector("a.active").classList.remove("active");
                                    anchor.classList.add("active");
                                }
                            });
                        }
                    });
                })();
                