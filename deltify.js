let hamburger = document.getElementsByClassName('menu');
let sidebarmenu = document.getElementsByClassName('sidebar-wrapper');
for (i = 0; i < sidebarmenu.length; i++) {
  var sidebar = sidebarmenu[i];
}
for (i = 0; i < hamburger.length; i++) {
  var hamburgerImg = hamburger[i];
}

hamburgerImg.addEventListener('click', open);

function open(e) {
  sidebar.style.display = 'block';
  e.preventDefault();
}
