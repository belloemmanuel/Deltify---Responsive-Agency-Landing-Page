
const menuId = document.getElementById('menuid');
const sidebarWrapper = document.getElementById('sidebar-wrapper');
const sidebarClose = document.getElementById('sidebar-close');

menuId.addEventListener('click', open);
sidebarClose.addEventListener('click', closenav);

function open() {
  sidebarWrapper.style.display = 'block';
}

function closenav() {
  sidebarWrapper.style.display = 'none';
}

