  AOS.init();
  // Right Click Disable
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
   
  });

  // Keyboard Shortcut Disable
  document.addEventListener("keydown", function(e){
    
    // Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+Shift+I
    if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
      e.preventDefault();
     
    }

    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
    
    }

    // F12 key
    if (e.key === "F12") {
      e.preventDefault();
     
    }

  });


    