const restaurants = [
    { name: "McDonalds", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "White Castle", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Burger King", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Taco Bell", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Subway", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Wendys", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "The Wheel", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Round The Clock", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Huck Finn", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "China Garden", type: "out", price: "fancy", openLate: false, delivers: "yes" },
    { name: "Ace Pizza", type: "out", price: "cheap", openLate: false, delivers: "yes" },
    { name: "Domino's", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Pizza Hut", type: "out", price: "cheap", openLate: false, delivers: "no" },
    { name: "Arnies", type: "out", price: "cheap", openLate: false, delivers: "no" },
    { name: "JJ riginal Maxwell", type: "out", price: "cheap", openLate: true, delivers: "no" },
    { name: "Sharkies", type: "out", price: "cheap", openLate: false, delivers: "no" },
    { name: "Schoops", type: "out", price: "cheap", openLate: false, delivers: "no" },
    { name: "Little Caesars", type: "out", price: "cheep", openLate: true, delivers: "yes" },
    { name: "Little Italy", type: "out", price: "fancy", openLate: false, delivers: "no" },
    { name: "Long Horn", type: "out", price: "fancy", openLate: false, delivers: "no" },
    { name: "Texas Road House", type: "out", price: "fancy", openLate: true, delivers: "no" },
    { name: "Kyoto Ramen", type: "out", price: "fancy", openLate: true, delivers: "no" },
    { name: "Carabas", type: "out", price: "fancy", openLate: true, delivers: "no" },
    { name: "Gretel", type: "out", price: "fancy", openLate: true, delivers: "no" },
  ];

  const recipes = [
    { name: "Doug's king chicken ranch and flat bread", type: "cook", difficulty: "Hard" },
    { name: "Doug's butter chicken", type: "cook", difficulty: "Hard" },
    { name: "Stuffed bellpeppers", type: "cook", difficulty: "Easy" },
    { name: "Korean BBQ buns", type: "cook", difficulty: "Hard" },
    { name: "Ground beef patties with mashed potatoes and veggies", type: "cook", difficulty: "Easy" },
    { name: "Meat sauce with grilled veggies over spaghetti", type: "cook", difficulty: "Easy" },
    { name: "Blackened chicken on Salad", type: "cook", difficulty: "Easy" },
    { name: "Stroganoff", type: "cook", difficulty: "Hard" },
    { name: "Stewed Pork", type: "cook", difficulty: "Hard" },
    { name: "Dirty Rice", type: "cook", difficulty: "Easy" },
    { name: "Hotdogs and Mac-N-Cheese", type: "cook", difficulty: "Easy" },
    { name: "Pizza braided bread", type: "cook", difficulty: "Hard" },
    { name: "Alfredo pasta/ garlic parmesan noodles", type: "cook", difficulty: "Hard" },
    { name: "Pasta carbonara", type: "cook", difficulty: "Easy" },
    { name: "Risotto", type: "cook", difficulty: "Hard" },
    { name: "Curry and rice", type: "cook", difficulty: "Easy" },
    { name: "Chili and rice", type: "cook", difficulty: "Easy" },
    { name: "Tuna melts", type: "cook", difficulty: "Easy" },
    { name: "Grilled Cheese", type: "cook", difficulty: "Easy" },
    { name: "Costco Potroast", type: "cook", difficulty: "Easy" },
    { name: "Chicken Pot Pie", type: "cook", difficulty: "Easy" },
    { name: "Musubi", type: "cook", difficulty: "Easy" },
    { name: "Stir Fry", type: "cook", difficulty: "Hard" },
    { name: "Chow Mein", type: "cook", difficulty: "Hard" },
    { name: "Shepards Pie", type: "cook", difficulty: "Easy" },
    { name: "Breaded Chicken and potatoes", type: "cook", difficulty: "Hard" },
    { name: "Kalua Pork and Rice", type: "cook", difficulty: "Hard" },
    { name: "Chicken Stuffaroni", type: "cook", difficulty: "Hard" },
    { name: "Garlic, Ginger Chicken", type: "cook", difficulty: "Easy" },
    { name: "Spaghetti and Meatballs", type: "cook", difficulty: "Easy" },
    { name: "LAsaagna", type: "cook", difficulty: "Hard" },
    { name: "Stuffed Shells", type: "cook", difficulty: "Hard" },
    { name: "Chicken Cacciatore", type: "cook", difficulty: "Hard" },
    { name: "Creamy Asagio Chicken", type: "cook", difficulty: "Hard" },
    { name: "Bacon Kale Soup", type: "cook", difficulty: "Hard" },
    { name: "Chicken Soup", type: "cook", difficulty: "Hard" },
    { name: "Pasta Fagiolli", type: "cook", difficulty: "Hard" },
    { name: "Bruchetta", type: "cook", difficulty: "Easy" },
    { name: "Loco Moco", type: "cook", difficulty: "Easy" },
  ];

//global definiions
let cook = document.getElementById('cook');
let restaurant = document.getElementById('restaurant');
let takeOut = document.getElementById('takeOut');
const submit = document.getElementById('submit');

//shows additional options
document.addEventListener('DOMContentLoaded', function () {

    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');

    button2.hidden = true;
    button3.hidden = true;

    cook.onclick = function() {
        button2.hidden = false;
        button3.hidden = true;
    };
    restaurant.onclick = function() {
        button3.hidden = false;
        button2.hidden = true;
    };
    takeOut.onclick = function() {
        button3.hidden = false;
        button2.hidden = true;
    };
});

function randomNum(arr) {
    if (arr.length === 0) {
        return "No matches found!";
    }
    const num = Math.floor(Math.random() * arr.length);
    return arr[num].name;
}


submit.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page reload

    const selectedType = cook.checked ? 'cook' : restaurant.checked ? 'out' : null;

    if (selectedType === 'cook') {
        const easy = document.getElementById('Easy').checked;
        const hard = document.getElementById('Hard').checked;

        // Filter recipes based on difficulty checkboxes
        let filtered = recipes.filter(d =>
            (!easy || d.difficulty === 'Easy') &&
            (!hard || d.difficulty === 'Hard')
        );

        const choice = randomNum(filtered); // ✅ Now in the correct scope
        console.log("Recipe Idea:", choice);
        document.getElementById('result').textContent = `Recipe Idea: ${choice}`;


    } else if (selectedType === 'out') {
        const fancy = document.getElementById('fancy').checked;
        const cheap = document.getElementById('cheap').checked;
        const late = document.getElementById('late').checked;

        // Filter restaurants based on fancy/cheap/late
        let filtered = restaurants.filter(d =>
            (!fancy || d.price === 'fancy') &&
            (!cheap || d.price === 'cheap') &&
            (!late || d.openLate === true)
        );

        const choice = randomNum(filtered);
        console.log("Restaurant Idea:", choice);
        document.getElementById('result').textContent = `Restaurant Idea: ${choice}`;

    } else if (selectedType === 'takeOut') {
        const fancy = document.getElementById('fancy').checked;
        const cheap = document.getElementById('cheap').checked;
        const late = document.getElementById('late').checked;

        // Filter restaurants based on fancy/cheap/late
        let filtered = restaurants.filter(d =>
            (!fancy || d.price === 'fancy') &&
            (!cheap || d.price === 'cheap') &&
            (!late || d.openLate === true)
        );

        const choice = randomNum(filtered);
        console.log("Take Out Idea:", choice);
        document.getElementById('result').textContent = `Take Out Idea: ${choice}`;

    } else {
        alert("Please select whether you want to cook or go out!");
    }
});
