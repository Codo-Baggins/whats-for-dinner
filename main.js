//query selectors
var foodSuggestionHtmlElement = document.querySelector(".food-suggestion");
var foodItemHtmlElement = document.querySelector(".food-item");

var cookpotHtmlElement = document.querySelector("#cookpot");
var letsCookButtonHtmlElement = document.querySelector("#lets-cook-button");

var sideHtmlElement = document.querySelector("#side");
var mainDishHtmlElement = document.querySelector("#main-dish");
var dessertHtmlElement = document.querySelector("#dessert");
var entireMealHtmlElement = document.querySelector("#entire-meal");

var foodFormHtmlElement = document.querySelector("form");


//event listeners

// sideHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);
// mainDishHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);
// dessertHtmlElement.addEventListener("click", allowLetsCookButtonToBeClicked);

foodFormHtmlElement.addEventListener("submit", allowLetsCookButtonToBeClicked, false)

//event handlers

function allowLetsCookButtonToBeClicked() {
    if (sideHtmlElement.checked === true) {
        displayRandomFoodItem(sides);
    } else if (mainDishHtmlElement.checked === true) {
        displayRandomFoodItem(mains)
     } else if (dessertHtmlElement.checked === true) {
        displayRandomFoodItem(desserts)
    } else if (entireMealHtmlElement.checked === true) {
        createEntireMeal()
    }
}

function getRandomIndex(foodArray) {
    return Math.floor(Math.random() * foodArray.length);
}

function displayRandomFoodItem(foodArray, event) {
    var randomIndex = getRandomIndex(foodArray);
    var randomFoodItem = foodArray[randomIndex];

    foodSuggestionHtmlElement.classList.remove("hidden");
    foodItemHtmlElement.classList.remove("hidden");
    cookpotHtmlElement.classList.add("hidden");

    var myFoodData = new FormData(foodFormHtmlElement) 
    var output = "";
        for (var entry of myFoodData) {
            output = randomFoodItem;
        }
        foodItemHtmlElement.innerText = output;
        event.preventDefault();
}

function createEntireMeal() {
    foodSuggestionHtmlElement.classList.remove("hidden");
    foodItemHtmlElement.classList.remove("hidden");
    cookpotHtmlElement.classList.add("hidden");

    var randomSidesIndex = getRandomIndex(sides);
    var randomSide = sides[randomSidesIndex];

    var randomMainsIndex = getRandomIndex(mains);
    var randomMain = mains[randomMainsIndex];

    var randomDessertsIndex = getRandomIndex(desserts);
    var randomDessert = desserts[randomDessertsIndex];

    var myFoodData = new FormData(foodFormHtmlElement) 
    var output = "";
        for (var entry of myFoodData) {
            output = randomSide +", " + randomMain + ", and " + randomDessert;
        }
        foodItemHtmlElement.innerText = output;
}