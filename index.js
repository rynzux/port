const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');


function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
}

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);


            removeActiveClass();
            activeLink.classList.add('active');
        }
    });
};


const observerOptions = {
    root: null, 
    threshold: 0.6
};


const observer = new IntersectionObserver(observerCallback, observerOptions);


sections.forEach(section => observer.observe(section));


navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        removeActiveClass();
        this.classList.add('active');
    });
});
