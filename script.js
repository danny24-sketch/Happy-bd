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
    'MEMORIES/photo1.jpg', 'MEMORIES/photo2.jpg', 'MEMORIES/photo3.jpg',
    'MEMORIES/photo4.jpg', 'MEMORIES/photo5.jpg', 'MEMORIES/photo6.jpg',
    'MEMORIES/photo7.jpg', 'MEMORIES/photo8.jpg', 'MEMORIES/photo9.jpg',
    'MEMORIES/photo10.jpg', 'MEMORIES/photo11.jpg', 'MEMORIES/photo12.jpg',
    'MEMORIES/photo13.jpg', 'MEMORIES/photo14.jpg', 'MEMORIES/photo15.jpg',
    'MEMORIES/photo16.jpg', 'MEMORIES/photo17.jpg', 'MEMORIES/photo18.jpg',
    'MEMORIES/photo19.jpg', 'MEMORIES/photo20.jpg', 'MEMORIES/photo21.jpg',
    'MEMORIES/photo22.jpg', 'MEMORIES/photo23.jpg', 'MEMORIES/photo24.jpg',
    'MEMORIES/photo25.jpg', 'MEMORIES/photo26.jpg', 'MEMORIES/photo27.jpg',
    'MEMORIES/photo28.jpg', 'MEMORIES/photo29.jpg', 'MEMORIES/photo30.jpg',
    'MEMORIES/photo31.jpg', 'MEMORIES/photo32.jpg'
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