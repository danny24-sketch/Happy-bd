function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const colors = ['#ff3366', '#ff4d4d', '#ff66cc', '#ff9933'];
    const messages = [
        "I love you my happysmile",
        "I'll always love you",
        "You are my everything",
        "Happy Birthday my love!",
        "My heart is yours forever"
    ];
    
    // Create falling hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
    
    // Create floating messages
    setInterval(() => {
        const message = document.createElement('div');
        message.classList.add('floating-message');
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        message.style.left = Math.random() * 70 + 15 + 'vw'; // Keep away from edges
        message.style.animationDuration = (Math.random() * 3 + 5) + 's';
        message.style.color = colors[Math.floor(Math.random() * colors.length)];
        heartsContainer.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 8000);
    }, 2000);
}

function loadPhotos() {
    const gallery = document.getElementById('gallery');
   const photos = [
    'memories/photo1.jpg', 'memories/photo2.jpg', 'memories/photo3.jpg',
    'memories/photo4.jpg', 'memories/photo5.jpg', 'memories/photo6.jpg',
    'memories/photo7.jpg', 'memories/photo8.jpg', 'memories/photo9.jpg',
    'memories/photo10.jpg', 'memories/photo11.jpg', 'memories/photo12.jpg',
    'memories/photo13.jpg', 'memories/photo14.jpg', 'memories/photo15.jpg',
    'memories/photo16.jpg', 'memories/photo17.jpg', 'memories/photo18.jpg',
    'memories/photo19.jpg', 'memories/photo20.jpg', 'memories/photo21.jpg',
    'memories/photo22.jpg', 'memories/photo23.jpg', 'memories/photo24.jpg',
    'memories/photo25.jpg', 'memories/photo26.jpg', 'memories/photo27.jpg',
    'memories/photo28.jpg', 'memories/photo29.jpg', 'memories/photo30.jpg',
    'memories/photo31.jpg', 'memories/photo32.jpg'
];
    
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = "Our beautiful memory";
        gallery.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    loadPhotos();
});