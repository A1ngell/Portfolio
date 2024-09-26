document.getElementById('language-toggle').addEventListener('click', function() {
    const currentLang = this.textContent;
    
    if (currentLang === 'EN') {
        // Cambiar a inglés
        this.textContent = 'ES';
        document.querySelectorAll('nav ul li a')[0].textContent = 'About me';
        document.querySelectorAll('nav ul li a')[1].textContent = 'Projects';
        document.querySelectorAll('nav ul li a')[2].textContent = 'Skills';
        document.querySelectorAll('nav ul li a')[3].textContent = 'Contact';

        document.querySelector('.about-me h2').textContent = 'Angel Gomez';
        document.querySelector('.about-me p').innerHTML = '<b class="marker-blue">Web Developer</b> <b class="marker-green">Junior</b>, currently finishing a technical high school in programming. I have knowledge in HTML, CSS, JavaScript, Express, PHP, SQL, and databases. I am looking for opportunities to gain experience through internships or projects. I am passionate about technology, enjoy solving problems creatively, and am always willing to learn. I am open to new challenges and collaborating in dynamic teams.';
        
        document.querySelector('.projects h2').textContent = 'TOUCH & CHECK';
        document.querySelectorAll('.projects-text-container span')[0].innerHTML = 'I participated in the Touch & Check project, which adapts chess for people with visual disabilities using 3D printed pieces from recycled plastic. I also created the <b class="marker-blue">App</b> Chess Clock using Appinventor, an accessible chess timer adapted with TalkBack technology for visually impaired people. The project promotes inclusion and sustainability in chess.';
        
        document.querySelectorAll('.projects h2')[1].textContent = 'E.E.S.T N°14 LIBRARY';
        document.querySelectorAll('.projects-text-container span')[1].innerHTML = 'I developed the school library website for the E.E.S.T N°14 institution using <b class="marker-green">Express</b> and <b class="marker-green">Relational databases</b>. The system manages the stock of books, games, and materials, allowing efficient control of loans and returns. This platform is currently used in the institution, facilitating library management and improving access to educational resources.';

        document.querySelector('.skills h2').textContent = 'Skills';

        document.querySelector('.contact-section h1').textContent = 'Contact';

        document.querySelectorAll('footer label')[0].textContent = 'Name';
        document.querySelectorAll('footer label')[1].textContent = 'Email';
        document.querySelectorAll('footer label')[2].textContent = 'Message';
        document.querySelector('.btn-send').textContent = 'Send';

    } else {
        // Cambiar a español
        this.textContent = 'EN';
        document.querySelectorAll('nav ul li a')[0].textContent = 'Sobre mí';
        document.querySelectorAll('nav ul li a')[1].textContent = 'Proyectos';
        document.querySelectorAll('nav ul li a')[2].textContent = 'Habilidades';
        document.querySelectorAll('nav ul li a')[3].textContent = 'Contacto';

        document.querySelector('.about-me h2').textContent = 'Angel Gomez';
        document.querySelector('.about-me p').innerHTML = '<b class="marker-blue">Desarrollador Web</b> <b class="marker-green">Junior</b>, actualmente finalizando un secundario técnico en programación. Tengo conocimientos en HTML, CSS, JavaScript, Express, PHP, SQL y bases de datos. Busco oportunidades para ganar experiencia a través de prácticas o proyectos. Soy apasionado por la tecnología, disfruto resolviendo problemas de forma creativa y siempre estoy dispuesto a aprender. Estoy abierto a nuevos desafíos y a colaborar en equipos dinámicos.';

        document.querySelector('.projects h2').textContent = 'TOUCH & CHECK';
        document.querySelectorAll('.projects-text-container span')[0].innerHTML = 'Participé en el proyecto Touch & Check, que adapta el ajedrez para personas con discapacidades visuales utilizando piezas impresas en 3D a partir de plástico reciclado. Además, creé la <b class="marker-blue">App</b> Chess Clock utilizando Appinventor, un cronómetro accesible para ajedrez adaptado con tecnología TalkBack para personas con discapacidad visual. El proyecto promueve la inclusión y la sostenibilidad en el ajedrez.';

        document.querySelectorAll('.projects h2')[1].textContent = 'BIBLIOTECA E.E.S.T N°14';
        document.querySelectorAll('.projects-text-container span')[1].innerHTML = 'Desarrollé la página web de la biblioteca escolar para la institución E.E.S.T N°14 utilizando <b class="marker-green">Express</b> y <b class="marker-green">bases de datos relacionales</b>. El sistema gestiona el stock de libros, juegos y materiales, permitiendo un control eficiente de los préstamos y devoluciones. Esta plataforma se utiliza actualmente en la institución, facilitando la gestión de la biblioteca y mejorando el acceso a los recursos educativos.';

        document.querySelector('.skills h2').textContent = 'Habilidades';

        document.querySelector('.contact-section h1').textContent = 'Contacto';

        document.querySelectorAll('footer label')[0].textContent = 'Nombre';
        document.querySelectorAll('footer label')[1].textContent = 'Correo';
        document.querySelectorAll('footer label')[2].textContent = 'Mensaje';
        document.querySelector('.btn-send').textContent = 'Enviar';
    }   
});

window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) { // Mostrar cuando se desplace 300px
        scrollToTopButton.classList.add('show-scroll');
    } else {
        scrollToTopButton.classList.remove('show-scroll');
    }
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
