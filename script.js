// Background music control using YouTube iframe API


// Array of love messages to display
const loveMessages = [
    "You're the most beautiful person I've ever met! 😍",
    "You make my heart skip a beat every time I see you! 💓",
    "You're my dream come true! 🌟",
    "I want to spend every moment with you! 💑",
    "You're my perfect match! 💝",
    "My love for you grows stronger every day! 💕"
];

let messageIndex = 0;

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.getElementById('hearts-container').appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Handle screen orientation
function handleOrientation() {
    const orientationMessage = document.querySelector('.orientation-message');
    const container = document.querySelector('.container');
    
    if (window.matchMedia("(max-width: 768px) and (orientation: landscape)").matches) {
        orientationMessage.style.display = 'flex';
        container.style.display = 'none';
    } else {
        orientationMessage.style.display = 'none';
        container.style.display = 'block';
    }
}

// Listen for orientation changes
window.addEventListener('load', handleOrientation);
window.addEventListener('resize', handleOrientation);
window.addEventListener('orientationchange', handleOrientation);

// Create firework effect
function createFirework() {
    const fireworks = document.querySelector('.fireworks');
    const firework = document.createElement('div');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    firework.style.position = 'absolute';
    firework.style.fontSize = '50px';
    firework.innerHTML = '✨';
    fireworks.appendChild(firework);

    const animation = firework.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 1 },
        { transform: 'scale(1.5) rotate(360deg)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });

    animation.onfinish = () => firework.remove();
}

function yesClicked() {
    // Clear existing content
    document.querySelector('.container').innerHTML = '';
    
    // Create celebration elements
    const celebration = document.createElement('div');
    celebration.style.textAlign = 'center';
    
    // Add romantic message
    const message = document.createElement('h1');
    message.textContent = "I Love You So Much! 💑";
    message.style.animation = 'fadeIn 2s ease';
    celebration.appendChild(message);
    
    // Start floating hearts animation
    setInterval(createFloatingHeart, 300);
    
    // Display love messages one by one
    const loveMessageElement = document.createElement('p');
    loveMessageElement.style.fontSize = '24px';
    loveMessageElement.style.margin = '20px';
    celebration.appendChild(loveMessageElement);
    
    setInterval(() => {
        loveMessageElement.style.opacity = 0;
        setTimeout(() => {
            loveMessageElement.textContent = loveMessages[messageIndex];
            loveMessageElement.style.opacity = 1;
            messageIndex = (messageIndex + 1) % loveMessages.length;
        }, 1000);
    }, 3000);
    
    document.querySelector('.container').appendChild(celebration);
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * 80) - 40;
    const y = Math.floor(Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${x}vw, ${y}vh)`;
});
