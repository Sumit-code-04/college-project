let lastScrollY = window.scrollY; 

const hiddenElements = document.querySelectorAll(".animation");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let currentScrollY = window.scrollY; 
        let isScrollingDown = currentScrollY > lastScrollY;
        
        if (entry.isIntersecting) {
            if (isScrollingDown) {
                entry.target.classList.add("show-down"); 
                entry.target.classList.remove("show-up"); 
            } else {
                entry.target.classList.add("show-up"); 
                entry.target.classList.remove("show-down"); 
            }
        } else {
            entry.target.classList.remove("show-down", "show-up"); 
        }
    });

    lastScrollY = window.scrollY; 
}, { threshold: 0.2 }); 

hiddenElements.forEach((el) => observer.observe(el));
