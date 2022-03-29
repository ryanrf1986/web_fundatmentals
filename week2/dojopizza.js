function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.bread = crustType;
    pizza.protein = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage",]);
console.log(s1);

var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"] , ["mushrooms", "olives", "onions",]);
console.log(s2);

var s3 = pizzaOven("thin", "traditional", "velvetta", ["shrooms", "sausage",]);
console.log(s3);

var s4 = pizzaOven("stuffed-crust", "alfredo", "string-cheese", ["pineapple", "candy-corn",]);
console.log(s4);
