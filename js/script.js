
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.nav-menu a');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function() {
            menu.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        });
    });
});

window.addEventListener('scroll', () => {
    if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});



/* BORDA */
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-item");

    // Adiciona um evento de clique a cada item de navegação
    navItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            
            navItems.forEach(function(navItem) {
                navItem.classList.remove("active");
            });

            
            item.classList.add("active");
        });
    });
});
/* BORDA */


/* SCROLL */
const target  = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', function(){
    animeScroll()
})
/* SCROLL */

