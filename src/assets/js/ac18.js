function toggleMenu() {
  const overlayNavElem = document.getElementsByClassName('overlay-navigation')[0];
  const navItems = document.getElementById('overlay-menu').querySelectorAll('li');

  overlayNavElem.classList.toggle('overlay-active');
  if (overlayNavElem.classList.contains('overlay-active')) {
    // 遷移メニューを表示
    document.getElementsByClassName('scroll-to-top')[0].style.display = 'none';

    overlayNavElem.classList.remove('overlay-slide-up');
    overlayNavElem.classList.add('overlay-slide-down');

    navItems.forEach(function(elem, i) {
      elem.classList.remove(`slide-in-nav-item-delay-${i}-reverse`);
      elem.classList.add(`slide-in-nav-item-delay-${i}`);
    })
  } else {
    // 遷移メニューを閉じる
    overlayNavElem.classList.remove('overlay-slide-down');
    overlayNavElem.classList.add('overlay-slide-up');

    navItems.forEach(function(elem, i) {
      elem.classList.remove(`slide-in-nav-item-delay-${i}`);
      elem.classList.add(`slide-in-nav-item-delay-${i}-reverse`);
    });
  }
}

function moveSection() {
  // 遷移メニューが表示されていれば閉じる
  const overlayNavElem = document.getElementsByClassName('overlay-navigation')[0];
  if (overlayNavElem.classList.contains('overlay-active')) {
    toggleMenu();
  }
}

function getImageSource(image_cdn_url, path) {
  if (image_cdn_url.startsWith("http")) {
    return `${image_cdn_url}${path}`;
  } else {
    return require(`@/${image_cdn_url}${path}`);
  }
}

export {toggleMenu, moveSection, getImageSource}
