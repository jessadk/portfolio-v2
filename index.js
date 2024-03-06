const header = document.querySelector('#header-wrapper');
const navToggle = document.querySelector('#mobile-nav-toggle');
const toggleImg = document.querySelector('#toggle-img');
const links = document.querySelectorAll('.link');
const email =  document.querySelector('.email');
const menuOpen = document.querySelector('#main-header');

// toggle mobile nav menu
navToggle.addEventListener('click', () => {
    // get current visibility state
    const visibility = header.getAttribute('data-visible');
    // if hidden, change styles
    if (visibility == 'false') {
        header.setAttribute('data-visible', 'true');
        navToggle.style.backgroundColor = 'transparent';
        toggleImg.src = 'assets/icons/menu-close.svg';
        menuOpen.classList.add('open');
    } else {
        header.setAttribute('data-visible', 'false');
        toggleImg.src = 'assets/icons/menu.svg';
        navToggle.style.backgroundColor = 'var(--lt-blue)';
        menuOpen.classList.remove('open');
    } 
});

// handle click events on navigation links to close the mobile menu
for (let link of links) {
    link.addEventListener('click', () => {
        header.setAttribute('data-visible', 'false');
        toggleImg.src = 'assets/icons/menu.svg';
        menuOpen.classList.remove('open');
    });
  }

  // toggles email link tooltip text and copies email to system clipboard
email.addEventListener('mouseover', ()=>{
    email.setAttribute('data-text', 'Copy');
});
email.addEventListener('click', ()=>{
    navigator.clipboard.writeText(email.innerText);
    email.setAttribute('data-text', 'Copied');
});

