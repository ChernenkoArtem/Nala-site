function menu() {
  const menuList = document.querySelector('.menu');
  const menuBtn = document.querySelector('.mob-menu');

  menuBtn.addEventListener('click', () => {
    if (menuList.style.display === 'flex') {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

function closeMenu() {
  const menuList = document.querySelector('.menu');
  menuList.style.display = 'none';
}

function openMenu() {
  const menuList = document.querySelector('.menu');
  menuList.style.display = 'flex';
}
