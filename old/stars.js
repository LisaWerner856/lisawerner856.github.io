// sparkly things: 
document.addEventListener('DOMContentLoaded', () => {
const starfield = document.getElementById('starfield');
const numStars = 100;

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size
    const size = Math.random() * 2 + 1; // 1 - 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random twinkle duration
    const duration = Math.random() * 5 + 3; // 3 - 8 seconds
    // animation name = twinkle, duration = duration variable, animation-iteration count = infinite.
    star.style.animation = `twinkle ${duration}s infinite`; 

    return star;
}

function createStarfield() {
    for (let i = 0; i < numStars; i++) {
        starfield.appendChild(createStar());
    }
}

createStarfield();

// Add this to the existing <style> tag in the HTML
const style = document.createElement('style');
style.textContent = `
@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}
`;
document.head.appendChild(style);
});