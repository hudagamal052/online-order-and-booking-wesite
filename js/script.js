//fetch restaurant data using AJAX
function fetchRestaurants(callbackFunction) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            callbackFunction(data);
        }
    };
    xhr.send();
}

//get a random restaurant
function getRandomRestaurant(restaurants) {
    var randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
}
//display the random restaurant when the page loads
window.onload = function () {
    fetchRestaurants(function (restaurants) {
        var restaurant = getRandomRestaurant(restaurants);

        // display the restaurant data
        document.getElementById("restaurant-name").textContent = "Name: " + restaurant.name;
        document.getElementById("restaurant-phone").textContent = "Phone Number: " + restaurant.contact.phone;
        document.getElementById("restaurant-address").textContent = "Address: " + restaurant.contact.location;
        document.getElementById("restaurant-rating").textContent = "Rating: " + " (" + restaurant.stars + ")" + "⭐".repeat(restaurant.stars);
    });
};



document.getElementById('search-form').addEventListener('submit', function (event) {

    // Get the search query
    const query = document.getElementById('exampleDataList').value.toLowerCase();

    // Map restaurant names to their URLs
    const restaurants = {
        "sushi": "restaurant_sushi.html",
        "sea food": "restaurant_seafood.html",
        "healthy food": "restaurant_healthy.html",
        "dessert": "restaurant_dessert.html",
        "coffee": "restaurant_coffee.html",
    };

    // Check if the query matches a restaurant
    if (restaurants[query]) {
        // Redirect to the restaurant's page
        window.location.href = restaurants[query];
    } else {
        // Show an error message if no match is found
        alert("No restaurant found for your search. Please try again.");
    }
    event.preventDefault(); // Prevent the form from submitting
});




