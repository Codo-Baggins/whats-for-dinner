//query selectors
var foodSuggestionHtmlElement = document.querySelector(".food-suggestion");
var foodItemHtmlElement = document.querySelector(".food-item");

var cookpotHtmlElement = document.querySelector("#cookpot");
var letsCookButtonHtmlElement = document.querySelector("#lets-cook-button");

var sideHtmlElement = document.querySelector("#side");
var mainDishHtmlElement = document.querySelector("#main-dish");
var dessertHtmlElement = document.querySelector("#dessert");


//event listeners

sideHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);
mainDishHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);
dessertHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);

var currentSelection = getElementById(id)

//event handlers

function allowLetsCookButtonToBeClicked(foodArray) {
    letsCookButtonHtmlElement.addEventListener("click", displayRandomFoodItem (foodArray));
}

function getRandomIndex(foodArray) {
    return Math.floor(Math.random() * foodArray.length);
}

function displayRandomFoodItem(foodArray) {
    var randomIndex = getRandomIndex(foodArray);
    var randomFoodItem = foodArray[randomIndex];

    foodSuggestionHtmlElement.classList.remove("hidden");
    foodItemHtmlElement.classList.remove("hidden");
    foodItemHtmlElement.innerText = `${randomFoodItem}`;
    cookpotHtmlElement.classList.add("hidden");
}

