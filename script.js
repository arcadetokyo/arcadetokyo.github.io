const tabButtons = document.querySelectorAll('.tab-button');
const contentSections = document.querySelectorAll('.content-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        contentSections.forEach(section => section.classList.add('hidden'));
        const targetTab = button.dataset.tab;
        document.getElementById(targetTab).classList.remove('hidden');
    });
});

document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.setProperty('--delay', index);
});

document.querySelectorAll('.skills-showcase li').forEach((item, index) => {
    item.style.setProperty('--delay', index);
});

const icons = ['☆', '𖦹'];
const colors = ['var(--pastel-pink)', 'var(--pastel-blue)', 'var(--pastel-yellow)', 'var(--pastel-green)'];

function createFloatingIcon() {
    const icon = document.createElement('div');
    icon.className = 'floating-icon';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * window.innerWidth + 'px';
    icon.style.top = Math.random() * window.innerHeight + 'px';
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.fontSize = '2rem';
    icon.style.fontFamily = 'sans-serif';

    document.body.appendChild(icon);

    setTimeout(() => {
        icon.remove();
    }, 3000);
}

setInterval(createFloatingIcon, 1000);

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { 
        const sparkle = document.createElement('div');
        sparkle.className = 'floating-icon';
        sparkle.textContent = '☆';
        
        const pastelPink = getComputedStyle(document.documentElement).getPropertyValue('--pastel-pink');
        sparkle.style.color = pastelPink.trim(); 

        sparkle.style.left = (e.pageX - 10) + 'px';
        sparkle.style.top = (e.pageY - 10) + 'px';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        sparkle.style.fontSize = '1.5rem';
        
        document.body.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});



const viewButtons = document.querySelectorAll('.project-card a');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close-button');

const projectData = [
    {
        title: 'CloverPass',
        images: ['assets/cp.png', 'assets/cp2.png'],
        description: 'This group project was made to be a digital ticketing application using Windows forms and developed in C#. UI/UX and concept design were mainly my tasks. You may check contributors for validation.',
        github: 'https://github.com/moni-dz/oop-m2',
    },
    {
        title: 'HEART HOCKEY',
        images: ['assets/hh.png', 'assets/hh2.png', 'assets/hh3.png'],
        description: 'Developed using Python. Original art and illustrations used in the game were made by me.',
        github: 'https://malayancollegesmindanaoo365-my.sharepoint.com/my?id=%2Fpersonal%2Ffjpiccio%5Fmcm%5Fedu%5Fph%2FDocuments%2FIT101%20PROJECT%20SUBMISSION&FolderCTID=0x012000F36C90FD8F257046A335D7F1AB6322FB',
    },
    {
        title: 'KEIKO: POWER-UP LEARNING',
        images: ['assets/keiko.png', 'assets/keiko2.png'],
        description: 'A web-based flashcard platform developed using Rust and Javascript. Main contributions include UI/UX design and conceptualization. You may check contributors for validation.',
        github: 'https://github.com/moni-dz/Group-5-System-Keiko',
    },
];

viewButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const project = projectData[index];
        
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLink.href = project.github;
        
        modalImages.innerHTML = '';
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${project.title} image`;
            modalImages.appendChild(img);
        });
        
        modal.classList.remove('hidden');
    });
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) {
        firstTab.click();
    }
});