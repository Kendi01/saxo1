function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  //my sidebar
  function hig_open() {
    document.getElementById("mySidebar").style.width = "100%" .float="right";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function hig() {
    document.getElementById("mySidebar").style.display = "none";
  }