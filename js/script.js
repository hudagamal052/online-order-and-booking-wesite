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


