function getDrinkInfo() {
    var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ('margarita');
    // backgroundPic.setAttribute("class", "content-hide");

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
            console.log(drinkResults);
        })

}

getDrinkInfo();