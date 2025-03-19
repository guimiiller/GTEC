
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


let currentIndex = 0;
const testimonials = document.querySelectorAll('.client-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Exibir o primeiro depoimento ao carregar a página
showTestimonial(currentIndex);



function startCount(el) {
    const endValue = parseInt(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || ""; // Verifica se há um sufixo
    let start = 0;
    const duration = 2000; // Duração da animação em ms
    const increment = endValue / (duration / 16); // Define o incremento baseado em 60fps

    function updateCount() {
        start += increment;
        if (start >= endValue) {
            el.textContent = endValue + suffix;
        } else {
            el.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCount);
        }
    }
    updateCount();
}

const countElements = document.querySelectorAll(".countNumber");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCount(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

countElements.forEach(el => observer.observe(el));



const buttons = document.querySelectorAll(".selection-button");
const title = document.getElementById("area-title");
const subtitle = document.getElementById("area-subtitle");
const desc1 = document.getElementById("description-1");
const desc2 = document.getElementById("description-2");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Remove a classe ativa de todos os botões
        buttons.forEach(btn => btn.classList.remove("active"));

        // Adiciona a classe ativa ao botão clicado
        this.classList.add("active");

        // Atualiza o conteúdo da área de descrição
        title.innerText = this.getAttribute("data-title");
        subtitle.innerText = this.getAttribute("data-subtitle");
        desc1.innerText = this.getAttribute("data-desc1");
        desc2.innerText = this.getAttribute("data-desc2");
    });
});