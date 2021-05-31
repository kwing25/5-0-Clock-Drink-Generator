const input = document.querySelector("#homepage-search");
const button = document.querySelector('#search-btn');

//added img target to link to drink
// const drinkTarget = document.querySelector('.drink-name-home-1');

// drinkTarget.addEventListener('click', setItemIndividual);

// function setItemIndividual(event) {
//     console.log(event)
//     localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
//     document.location.replace('/drinkindividual');;
// }



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

    //add link for wildcard cocktail
    const drinkTarget = document.querySelector('.drink-name-home');

    drinkTarget.addEventListener('click', setItemIndividual);
    
    function setItemIndividual(event) {
        console.log(event)
        localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
        document.location.replace('/drinkindividual');
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
        setItemIndividual()
    }
 
    const drinkTarget1 = document.querySelector('.drink-name-home-1');

    drinkTarget1.addEventListener('click', setItemIndividual);
    
    function setItemIndividual(event) {
        console.log(event)
        localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
        document.location.replace('/drinkindividual');
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

    const drinkTarget2 = document.querySelector('.drink-name-home-2');

    drinkTarget2.addEventListener('click', setItemIndividual);
    
    function setItemIndividual(event) {
        console.log(event)
        localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
        document.location.replace('/drinkindividual');
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

    const drinkTarget3 = document.querySelector('.drink-name-home-3');

    drinkTarget3.addEventListener('click', setItemIndividual);
    
    function setItemIndividual(event) {
        console.log(event)
        localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
        document.location.replace('/drinkindividual');
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

    const drinkTarget4 = document.querySelector('.drink-name-home-4');

    drinkTarget4.addEventListener('click', setItemIndividual);
    
    function setItemIndividual(event) {
        console.log(event)
        localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
        document.location.replace('/drinkindividual');
    }



cocktailOfTheDay()

homePageFavOne()

homePageFavTwo()

homePageFavThree()

homePageFavFour()