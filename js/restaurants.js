// Sample restaurant data
const restaurants = [
    {
        id: 1,
        name: "McDonald's",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/McDonald's_square_2020.svg.png",
        specialOffer: true,
    },
    {
        id: 2,
        name: "Burger King",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/WhatsApp Image 2025-01-24 at 09.16.37_289a8ecd.jpg",
        specialOffer: false,
    },
    {
        id: 3,
        name: "Bazooka",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/66A66245543FAA76BB82151ADDE0EEA9.jpeg",
        specialOffer: false,
    },
    {
        id: 4,
        name: "KFC",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/images (8).jpeg",
        specialOffer: false,
    },
    {
        id: 5,
        name: "Pizza Hut",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/WhatsApp Image 2025-01-24 at 09.16.40_8de15459.jpg",
        specialOffer: false,
    },
    {
        id: 6,
        name: "HeartAttack",
        address: "123 King Street",
        rating: "4.5 (190 ratings)",
        image: "images/FB_IMG_1737880920032.jpg",
        specialOffer: false,
    }
];
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const searchInput = document.getElementById('exampleDataList').value.trim().toLowerCase();

    // Find restaurant by name
    const foundRestaurant = restaurants.find(r => r.name.toLowerCase().includes(searchInput));

    if (foundRestaurant) {
        // Redirect to the restaurant's menu page
        window.location.href = `menu.html?restaurantId=${foundRestaurant.id}`;
    } else {
        alert("Restaurant not found! Please try another name.");
    }
});

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Get favorites from localStorage
const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
};

// Save favorites to localStorage
const saveFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

// Toggle favorite
const toggleFavorite = (id) => {
    const favorites = getFavorites();
    if (favorites.includes(id)) {
        const index = favorites.indexOf(id);
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    saveFavorites(favorites);
    displayRestaurants();
};

// Navigate to menu page
const goToMenu = (id) => {
    window.location.href = `menu.html?restaurantId=${id}`;
};
const goToBooking = () => {
    window.location.href = `booking.html`;
};

// Function to display restaurants
const displayRestaurants = () => {
    const favorites = getFavorites();
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = restaurants.map(restaurant => `
    <div class="restaurant-card" onclick="goToMenu(${restaurant.id})">
        <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-details">
                <p class="restaurant-name">${restaurant.name}</p>
                <p class="restaurant-address">${restaurant.address}</p>
                <div class="restaurant-rating">
                    <i class="bi bi-star-fill"></i>${restaurant.rating}
                </div>
                ${restaurant.specialOffer ? '<span class="special-offer">Special Offer</span>' : ''}
            </div>
            <button class="favorite-btn ${favorites.includes(restaurant.id) ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${restaurant.id})">
                <i class="bi bi-heart${favorites.includes(restaurant.id) ? '-fill' : ''}"></i>
            </button>
            <div class="btn-container">
                <button class="btn btn-primary" onclick="event.stopPropagation(); goToMenu(${restaurant.id})">Go to Menu</button>
                <button class="btn btn-secondary" onclick="event.stopPropagation(); goToBooking()">Book Table</button>
            </div>
    </div>
    `).join('');
};

// Call the function to display restaurants
displayRestaurants();

