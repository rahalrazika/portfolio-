const navMenu = document.getElementById('navbarNavAltMarkup')
const navToggle = document.getElementById('nav-toggle')

navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })