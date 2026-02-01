// ============================================
// Configuration & Constants
// ============================================

// Wishes will be loaded from translations
let WISHES = [];

// Current selections
let currentLanguage = 'en';
let currentTheme = 'classic';

// ============================================
// State Management
// ============================================

let celebrationData = {
    name: '',
    age: null,
    theme: 'classic',
    language: 'en'
};

let currentWishIndex = 0;
let wishInterval = null;
let confettiAnimationId = null;
let isMusicPlaying = false;

// ============================================
// DOM Elements
// ============================================

const elements = {
    // Panels
    customizationPanel: document.getElementById('customization-panel'),
    celebrationContent: document.getElementById('celebration-content'),
    
    // Form inputs
    nameInput: document.getElementById('name-input'),
    ageInput: document.getElementById('age-input'),
    themeSelect: document.getElementById('theme-select'),
    languageSelect: document.getElementById('language-select'),
    startBtn: document.getElementById('start-celebration'),
    
    // Display elements
    birthdayName: document.getElementById('birthday-name'),
    ageCounter: document.getElementById('age-counter'),
    rotatingWish: document.getElementById('rotating-wish'),
    
    // Controls
    replayBtn: document.getElementById('replay-btn'),
    customizeBtn: document.getElementById('customize-btn'),
    musicToggle: document.getElementById('music-toggle'),
    
    // Canvas & Audio
    confettiCanvas: document.getElementById('confetti-canvas'),
    birthdayMusic: document.getElementById('birthday-music')
};

// ============================================
// URL Parameter Handling
// ============================================

/**
 * Parse URL parameters for name, age, theme, and language
 * Supports: ?name=Emma&age=21&theme=romantic&lang=es
 */
function getURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const age = urlParams.get('age');
    const theme = urlParams.get('theme');
    const lang = urlParams.get('lang');
    
    return {
        name: name ? decodeURIComponent(name).trim() : null,
        age: age ? parseInt(age, 10) : null,
        theme: theme || null,
        language: lang || null
    };
}

/**
 * Update URL without page reload
 */
function updateURL(name, age, theme, language) {
    const url = new URL(window.location);
    url.searchParams.set('name', encodeURIComponent(name));
    url.searchParams.set('age', age);
    url.searchParams.set('theme', theme);
    url.searchParams.set('lang', language);
    window.history.pushState({}, '', url);
}

// ============================================
// Internationalization (i18n)
// ============================================

/**
 * Apply translations to the page
 */
function applyTranslations(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, using English`);
        lang = 'en';
    }
    
    const trans = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (trans[key]) {
            element.placeholder = trans[key];
        }
    });
    
    // Update wishes
    WISHES = trans.wishes || translations.en.wishes;
    
    // Set RTL for Arabic and Urdu
    if (lang === 'ar' || lang === 'ur') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
    
    currentLanguage = lang;
}

/**
 * Apply theme to the page
 */
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    currentTheme = theme;
}

// ============================================
// Initialization
// ============================================

function init() {
    // Initialize default language and theme
    applyTranslations('en');
    applyTheme('classic');
    
    // Check for URL parameters
    const urlData = getURLParameters();
    
    // Apply language if specified
    if (urlData.language && translations[urlData.language]) {
        applyTranslations(urlData.language);
        elements.languageSelect.value = urlData.language;
    }
    
    // Apply theme if specified
    if (urlData.theme) {
        applyTheme(urlData.theme);
        elements.themeSelect.value = urlData.theme;
    }
    
    if (urlData.name && urlData.age) {
        // Auto-start with URL parameters
        celebrationData.name = urlData.name;
        celebrationData.age = urlData.age;
        celebrationData.theme = urlData.theme || 'classic';
        celebrationData.language = urlData.language || 'en';
        startCelebration();
    } else {
        // Show customization panel
        showCustomizationPanel();
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup confetti canvas
    setupCanvas();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Start celebration button
    elements.startBtn.addEventListener('click', handleStartCelebration);
    
    // Enter key in form inputs
    elements.nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleStartCelebration();
    });
    
    elements.ageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleStartCelebration();
    });
    
    // Theme selector
    elements.themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
    
    // Language selector
    elements.languageSelect.addEventListener('change', (e) => {
        applyTranslations(e.target.value);
    });
    
    // Replay button
    elements.replayBtn.addEventListener('click', replayCelebration);
    
    // Customize button
    elements.customizeBtn.addEventListener('click', showCustomizationPanel);
    
    // Music toggle
    elements.musicToggle.addEventListener('click', toggleMusic);
    
    // Window resize for canvas
    window.addEventListener('resize', setupCanvas);
}

// ============================================
// Customization Panel
// ============================================

function showCustomizationPanel() {
    elements.customizationPanel.classList.remove('hidden');
    elements.celebrationContent.classList.add('hidden');
    
    // Populate inputs if data exists
    if (celebrationData.name) {
        elements.nameInput.value = celebrationData.name;
    }
    if (celebrationData.age) {
        elements.ageInput.value = celebrationData.age;
    }
    if (celebrationData.theme) {
        elements.themeSelect.value = celebrationData.theme;
        applyTheme(celebrationData.theme);
    }
    if (celebrationData.language) {
        elements.languageSelect.value = celebrationData.language;
        applyTranslations(celebrationData.language);
    }
    
    // Focus on name input
    setTimeout(() => elements.nameInput.focus(), 100);
    
    // Stop music and animations
    stopCelebration();
}

function handleStartCelebration() {
    const name = elements.nameInput.value.trim();
    const age = parseInt(elements.ageInput.value, 10);
    const theme = elements.themeSelect.value;
    const language = elements.languageSelect.value;
    
    // Validation
    if (!name) {
        const trans = translations[currentLanguage];
        alert(trans['placeholder-name'] || 'Please enter a name! 🎈');
        elements.nameInput.focus();
        return;
    }
    
    if (!age || age < 1 || age > 150) {
        const trans = translations[currentLanguage];
        alert(trans['placeholder-age'] || 'Please enter a valid age (1-150)! 🎂');
        elements.ageInput.focus();
        return;
    }
    
    // Update celebration data
    celebrationData.name = name;
    celebrationData.age = age;
    celebrationData.theme = theme;
    celebrationData.language = language;
    
    // Apply selections
    applyTheme(theme);
    applyTranslations(language);
    
    // Update URL
    updateURL(name, age, theme, language);
    
    // Start celebration
    startCelebration();
}

// ============================================
// Celebration Control
// ============================================

function startCelebration() {
    // Hide customization panel
    elements.customizationPanel.classList.add('hidden');
    elements.celebrationContent.classList.remove('hidden');
    
    // Update display
    elements.birthdayName.textContent = celebrationData.name;
    
    // Animate age counter
    animateAgeCounter();
    
    // Start rotating wishes
    startWishRotation();
    
    // Start confetti
    startConfetti();
    
    // Auto-play music after user interaction
    attemptMusicAutoplay();
}

function replayCelebration() {
    // Stop current animations
    stopCelebration();
    
    // Restart after brief delay
    setTimeout(() => {
        startCelebration();
    }, 100);
}

function stopCelebration() {
    // Stop wish rotation
    if (wishInterval) {
        clearInterval(wishInterval);
        wishInterval = null;
    }
    
    // Stop confetti
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
    }
    
    // Pause music
    if (isMusicPlaying) {
        elements.birthdayMusic.pause();
        elements.birthdayMusic.currentTime = 0;
        isMusicPlaying = false;
        elements.musicToggle.classList.remove('is-playing');
    }
}

// ============================================
// Age Counter Animation
// ============================================

function animateAgeCounter() {
    const targetAge = celebrationData.age;
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic function
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeProgress * targetAge);
        
        elements.ageCounter.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            elements.ageCounter.textContent = targetAge;
        }
    }
    
    update();
}

// ============================================
// Rotating Wishes
// ============================================

function startWishRotation() {
    // Show first wish immediately
    currentWishIndex = 0;
    showWish();
    
    // Rotate wishes every 4 seconds
    wishInterval = setInterval(() => {
        currentWishIndex = (currentWishIndex + 1) % WISHES.length;
        showWish();
    }, 4000);
}

function showWish() {
    const wishElement = elements.rotatingWish;
    
    // Fade out
    wishElement.style.opacity = '0';
    wishElement.style.transform = 'translateY(10px)';
    
    // Change text and fade in
    setTimeout(() => {
        wishElement.textContent = WISHES[currentWishIndex];
        wishElement.style.opacity = '1';
        wishElement.style.transform = 'translateY(0)';
    }, 300);
}

// ============================================
// Music Control
// ============================================

function attemptMusicAutoplay() {
    // Try to play music (may be blocked by browser)
    const playPromise = elements.birthdayMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                isMusicPlaying = true;
                elements.musicToggle.classList.add('is-playing');
            })
            .catch(() => {
                // Autoplay blocked - user needs to click music button
                isMusicPlaying = false;
                elements.musicToggle.classList.remove('is-playing');
            });
    }
}

function toggleMusic() {
    if (isMusicPlaying) {
        elements.birthdayMusic.pause();
        isMusicPlaying = false;
        elements.musicToggle.classList.remove('is-playing');
    } else {
        elements.birthdayMusic.play();
        isMusicPlaying = true;
        elements.musicToggle.classList.add('is-playing');
    }
}

// ============================================
// Confetti Animation (Canvas)
// ============================================

let confettiParticles = [];
const confettiColors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#ffd200', '#f7971e'];

class ConfettiParticle {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
        // Random initial position for first render
        this.y = Math.random() * canvas.height;
    }
    
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -10;
        this.size = Math.random() * 8 + 4;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.opacity = Math.random() * 0.5 + 0.5;
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        // Reset if out of bounds
        if (this.y > this.canvas.height + 10) {
            this.reset();
        }
        
        // Wrap horizontally
        if (this.x < -10) this.x = this.canvas.width + 10;
        if (this.x > this.canvas.width + 10) this.x = -10;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // Draw confetti piece (rectangle)
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size / 2);
        
        ctx.restore();
    }
}

function setupCanvas() {
    const canvas = elements.confettiCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function startConfetti() {
    const canvas = elements.confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    // Create confetti particles
    confettiParticles = [];
    const particleCount = Math.min(150, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < particleCount; i++) {
        confettiParticles.push(new ConfettiParticle(canvas));
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiParticles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });
        
        confettiAnimationId = requestAnimationFrame(animate);
    }
    
    animate();
}

// ============================================
// Start Application
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// Utility: Create placeholder music file info
// ============================================

/**
 * Note: The actual music file needs to be added manually.
 * For development/testing, you can:
 * 1. Download a royalty-free Happy Birthday instrumental
 * 2. Or use a placeholder silent audio file
 * 3. Or generate a simple tone using Web Audio API
 */

// If you want to generate a simple beep pattern as fallback:
function generatePlaceholderAudio() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 30; // 30 seconds
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate a simple melody pattern
    const notes = [262, 262, 294, 262, 349, 330, 262, 262, 294, 262, 392, 349]; // Happy Birthday notes (Hz)
    const noteLength = sampleRate * 0.5; // 0.5 seconds per note
    
    for (let i = 0; i < data.length; i++) {
        const noteIndex = Math.floor(i / noteLength) % notes.length;
        const freq = notes[noteIndex];
        const envelope = Math.max(0, 1 - (i % noteLength) / noteLength); // Decay envelope
        data[i] = Math.sin(2 * Math.PI * freq * i / sampleRate) * envelope * 0.1;
    }
    
    return buffer;
}

// Uncomment below to use generated audio if MP3 file is not available
// This is a fallback option for testing
/*
elements.birthdayMusic.addEventListener('error', function() {
    console.log('Music file not found, using generated audio');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const buffer = generatePlaceholderAudio();
    
    // Override music control to use Web Audio API
    let source = null;
    const originalToggle = toggleMusic;
    
    toggleMusic = function() {
        if (isMusicPlaying) {
            if (source) source.stop();
            isMusicPlaying = false;
            elements.musicToggle.classList.remove('is-playing');
        } else {
            source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.loop = true;
            source.start();
            isMusicPlaying = true;
            elements.musicToggle.classList.add('is-playing');
        }
    };
});
*/
