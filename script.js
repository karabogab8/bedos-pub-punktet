// Menu Data
const menuData = {
    cocktails: [
        { name: 'Classic Martini', price: '145 kr', description: 'Gin, Dry Vermouth' },
        { name: 'Old Fashioned', price: '155 kr', description: 'Bourbon, Angostura Bitters, Sugar' },
        { name: 'Negroni', price: '145 kr', description: 'Gin, Campari, Sweet Vermouth' },
        { name: 'Moscow Mule', price: '135 kr', description: 'Vodka, Ginger Beer, Lime' },
        { name: 'Mojito', price: '135 kr', description: 'Rum, Mint, Lime, Sugar' },
        { name: 'Espresso Martini', price: '145 kr', description: 'Vodka, Coffee Liqueur, Espresso' },
        { name: 'Whiskey Sour', price: '145 kr', description: 'Bourbon, Lemon, Sugar' },
        { name: 'Cosmopolitan', price: '135 kr', description: 'Vodka, Cranberry, Cointreau' },
        { name: 'Margarita', price: '135 kr', description: 'Tequila, Lime, Triple Sec' },
        { name: 'Dark & Stormy', price: '135 kr', description: 'Dark Rum, Ginger Beer' }
    ],
    wine: [
        { name: 'Chablis', price: '115 kr', description: 'Frankrike, Chardonnay' },
        { name: 'Rioja Reserva', price: '125 kr', description: 'Spania, Tempranillo' },
        { name: 'Prosecco', price: '95 kr', description: 'Italia, Glera' },
        { name: 'Barolo', price: '165 kr', description: 'Italia, Nebbiolo' },
        { name: 'Sancerre', price: '135 kr', description: 'Frankrike, Sauvignon Blanc' },
        { name: 'Amarone', price: '175 kr', description: 'Italia, Corvina Blend' },
        { name: 'Cava', price: '95 kr', description: 'Spania, Traditional Blend' },
        { name: 'Châteauneuf-du-Pape', price: '155 kr', description: 'Frankrike, Grenache Blend' },
        { name: 'Riesling', price: '105 kr', description: 'Tyskland, Riesling' },
        { name: 'Malbec', price: '115 kr', description: 'Argentina, Malbec' }
    ],
    beer: [
        { name: 'Ringnes', price: '89 kr', description: 'Pilsner, Norge' },
        { name: 'Nøgne Ø IPA', price: '109 kr', description: 'IPA, Norge' },
        { name: 'Aegir Blonde', price: '99 kr', description: 'Blonde Ale, Norge' },
        { name: 'Brooklyn Lager', price: '99 kr', description: 'Lager, USA' },
        { name: '7 Fjell Pale Ale', price: '109 kr', description: 'Pale Ale, Norge' },
        { name: 'Guinness', price: '95 kr', description: 'Stout, Irland' },
        { name: 'Corona', price: '89 kr', description: 'Lager, Mexico' },
        { name: 'Erdinger', price: '99 kr', description: 'Weissbier, Tyskland' },
        { name: 'Carlsberg', price: '85 kr', description: 'Pilsner, Danmark' },
        { name: 'Stella Artois', price: '89 kr', description: 'Pilsner, Belgia' }
    ],
    spirits: [
        { name: 'Hennessy XO', price: '225 kr', description: 'Cognac, Frankrike' },
        { name: 'Macallan 18', price: '245 kr', description: 'Single Malt Whisky, Skottland' },
        { name: 'Grey Goose', price: '135 kr', description: 'Vodka, Frankrike' },
        { name: 'Don Julio 1942', price: '265 kr', description: 'Tequila, Mexico' },
        { name: 'Zacapa 23', price: '165 kr', description: 'Rom, Guatemala' },
        { name: 'Monkey 47', price: '145 kr', description: 'Gin, Tyskland' },
        { name: 'Hibiki Harmony', price: '195 kr', description: 'Whisky, Japan' },
        { name: 'Belvedere', price: '135 kr', description: 'Vodka, Polen' },
        { name: 'Diplomatico', price: '155 kr', description: 'Rom, Venezuela' },
        { name: 'Patron Silver', price: '145 kr', description: 'Tequila, Mexico' }
    ],
    'non-alcoholic': [
        { name: 'Virgin Mojito', price: '75 kr', description: 'Mint, Lime, Soda' },
        { name: 'Seedlip Garden', price: '85 kr', description: 'Alkoholfri Spirits & Tonic' },
        { name: 'Ingefærøl', price: '65 kr', description: 'Hjemmelaget Ginger Beer' },
        { name: 'Frukt Smoothie', price: '75 kr', description: 'Sesongbaserte Frukter' },
        { name: 'Alkoholfri Vin', price: '85 kr', description: 'Rød eller Hvit' },
        { name: 'Kombucha', price: '75 kr', description: 'Fermentert Te' },
        { name: 'Virgin Mary', price: '75 kr', description: 'Krydret Tomatjuice' },
        { name: 'Sparkling Tea', price: '85 kr', description: 'Copenhagen Sparkling Tea' },
        { name: 'Alkoholfri Øl', price: '65 kr', description: 'Utvalgte Varianter' },
        { name: 'Frukt Spritz', price: '75 kr', description: 'Sesongbasert Fruktdrikk' }
    ]
};

// Gallery Images
const galleryImages = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1538488881038-e252a119ace7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
];

// DOM Elements
const menuItems = document.getElementById('menuItems');
const categoryButtons = document.querySelectorAll('.category-btn');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--color-secondary)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--color-tertiary)';
        navbar.style.boxShadow = 'none';
    }
});

// Display Menu Items
function displayMenuItems(category) {
    const items = menuData[category];
    menuItems.innerHTML = items.map(item => `
        <div class="menu-item">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        </div>
    `).join('');
}

// Menu Category Selection
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayMenuItems(button.dataset.category);
    });
});

// Initialize Gallery
function initializeGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = galleryImages.map(image => `
        <div class="gallery-item">
            <img src="${image}" alt="Punktet Bar Interior">
        </div>
    `).join('');
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems('cocktails'); // Show cocktails by default
    initializeGallery();
});