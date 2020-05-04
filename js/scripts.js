

console.log("Hi! Welcome to My Portfolio Site");

function menuToggle() {
    var x = document.getElementById('navbar-nav');
    if (x.className === "navbar-nav") {
        x.className += " responsive";
      } else {
        x.className = "navbar-nav";
      }
    }