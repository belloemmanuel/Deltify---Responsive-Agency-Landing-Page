// let hamburger = document.getElementsByClassName('menu');
// let sidebarmenu = document.getElementsByClassName('sidebar-wrapper');
// let close = document.getElementsByClassName('sidebar-close');
const menuId = document.getElementById('menuid');
const sidebarWrapper = document.getElementById('sidebar-wrapper');
const sidebarClose = document.getElementById('sidebar-close');

// for (i = 0; i < sidebarmenu.length; i++) {
//   var sidebar = sidebarmenu[i];
// }
// for (i = 0; i < hamburger.length; i++) {
//   var hamburgerImg = hamburger[i];
// }

// for (i = 0; i < close.length; i++) {
//   var closeBtn = close[i];
// }

menuId.addEventListener('click', open);
sidebarClose.addEventListener('click', closenav);

function open() {
  sidebarWrapper.style.display = 'block';
}

function closenav() {
  sidebarWrapper.style.display = 'none';
}
