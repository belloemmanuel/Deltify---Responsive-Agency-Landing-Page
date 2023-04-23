let hamburger = document.getElementsByClassName('menu');
let sidebarmenu = document.getElementsByClassName('sidebar-wrapper');
let close = document.getElementsByClassName('sidebar-close');

for (i = 0; i < sidebarmenu.length; i++) {
  var sidebar = sidebarmenu[i];
}
for (i = 0; i < hamburger.length; i++) {
  var hamburgerImg = hamburger[i];
}

for (i = 0; i < close.length; i++) {
  var closeBtn = close[i];
}

hamburgerImg.addEventListener('click', open);
closeBtn.addEventListener('click', closenav);

function open() {
  sidebar.style.display = 'block';
}

function closenav() {
  sidebar.style.display = 'none';
}
