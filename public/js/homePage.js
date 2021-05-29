const input = document.querySelector("#homepage-search");
const button = document.querySelector('#search-btn');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log("works");
    const searchInputVal = document.querySelector('#homepage-search').value;
    localStorage.setItem('searchQuery', JSON.stringify(searchInputVal));

    if (searchInputVal === "")  {
        return(handleSearchFormSubmit);
        }

        document.location.replace('/drinksearch');
}


button.addEventListener('click', handleSearchFormSubmit);

// module.exports = { drinkSearch };

cocktailOfTheDay = () => {
        var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        
    
        fetch(apiDrink)
            .then(function (response) {
                console.log(response.ok);
                if (!response.ok) {
                    window.alert('Unable to connect');
                    throw response.json();
                }
    
                return response.json()
            })
            .then(function (drinkResults) {
                printDrinkResults(drinkResults);
            })
    
    }

    printDrinkResults = (drinkResults) => {
        console.log(drinkResults)
        const drinkName = document.querySelector('.drink-name-home');
        drinkName.innerHTML = drinkResults.drinks[0].strDrink;
        const drinkImage = document.querySelector('.drink-image-home')
        drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
    }

    homePageFavOne = () => {
        var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ('screwdriver');
        
    
        fetch(apiDrink)
            .then(function (response) {
                console.log(response.ok);
                if (!response.ok) {
                    window.alert('Unable to connect');
                    throw response.json();
                }
    
                return response.json()
            })
            .then(function (drinkResults) {
                printhomePageFavOne(drinkResults);
            })
    
    }

    printhomePageFavOne = (drinkResults) => {
        console.log(drinkResults)
        const drinkName = document.querySelector('.drink-name-home-1');
        drinkName.innerHTML = drinkResults.drinks[0].strDrink;
        const drinkImage = document.querySelector('.drink-image-home-1')
        drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
    }

    homePageFavTwo = () => {
        var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ('whiskey sour');
        
    
        fetch(apiDrink)
            .then(function (response) {
                console.log(response.ok);
                if (!response.ok) {
                    window.alert('Unable to connect');
                    throw response.json();
                }
    
                return response.json()
            })
            .then(function (drinkResults) {
                printhomePageFavTwo(drinkResults);
            })
    
    }

    printhomePageFavTwo = (drinkResults) => {
        console.log(drinkResults)
        const drinkName = document.querySelector('.drink-name-home-2');
        drinkName.innerHTML = drinkResults.drinks[0].strDrink;
        const drinkImage = document.querySelector('.drink-image-home-2')
        drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
    }

    homePageFavThree = () => {
        var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ('manhattan');
        
    
        fetch(apiDrink)
            .then(function (response) {
                console.log(response.ok);
                if (!response.ok) {
                    window.alert('Unable to connect');
                    throw response.json();
                }
    
                return response.json()
            })
            .then(function (drinkResults) {
                printhomePageFavThree(drinkResults);
            })
    
    }

    printhomePageFavThree = (drinkResults) => {
        console.log(drinkResults)
        const drinkName = document.querySelector('.drink-name-home-3');
        drinkName.innerHTML = drinkResults.drinks[0].strDrink;
        const drinkImage = document.querySelector('.drink-image-home-3')
        drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
    }

    homePageFavFour = () => {
        var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ('mojito');
        
    
        fetch(apiDrink)
            .then(function (response) {
                console.log(response.ok);
                if (!response.ok) {
                    window.alert('Unable to connect');
                    throw response.json();
                }
    
                return response.json()
            })
            .then(function (drinkResults) {
                printhomePageFavFour(drinkResults);
            })
    
    }

    printhomePageFavFour = (drinkResults) => {
        console.log(drinkResults)
        const drinkName = document.querySelector('.drink-name-home-4');
        drinkName.innerHTML = drinkResults.drinks[0].strDrink;
        const drinkImage = document.querySelector('.drink-image-home-4')
        drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
    }



cocktailOfTheDay()

homePageFavOne()

homePageFavTwo()

homePageFavThree()

homePageFavFour()