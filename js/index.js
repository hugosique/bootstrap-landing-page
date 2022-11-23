function toggleMenuLinks() {
    const menuList = document.querySelector('.nav');

    if(menuList.classList.contains('d-none')) {
        menuList.classList.remove('d-none');
        menuList.classList.add('d-flex');
    } else {
        menuList.classList.remove('d-flex');
        menuList.classList.add('d-none');
    };
}