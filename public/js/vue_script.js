/*
function menuItem(name, info, kcal, img, lactose, vegan, gluten){
    this.name = name;
    this.info = info;
    this.kcal = kcal;
    this.img = img;
    this.lactose = lactose;
    this.vegan = vegan;
    this.gluten = gluten;
    this.getKcal = function(){
	return this.name + ' ' + this.kcal;
    };
}

let burger1 = new menuItem("Cheese Burger", "Beef from locally bred cattle", "800 kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg", true, false, false);

let burger2 = new menuItem("Veggie Burger", "Patty made from beans!", "600 kcal", "https://peasandcrayons.com/wp-content/uploads/2016/09/buffalo-chickpea-veggie-burgers-recipe-2-8313-300x300.jpg", false, true, false);

let burger3 = new menuItem("Chicken Burger", "Deep fried chicken", "700 kcal", "https://burmakadai.in/wp-content/uploads/2018/10/Chicken-Burger.jpg", false, false, true);

let burger4 = new menuItem("Special Burger", "Info", "900 kcal", "https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb", true, false, false);

let burger5 = new menuItem("Burger Burger", "Info", " 750 kcal", "https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/bbq/kentucky_burger.jpg?id=2357", false, false, true);

var array = new Array(burger1, burger2, burger3, burger4, burger5);

**/
const vm = new Vue({
    el: '#burgerTable',
    data: {
	array: burgers,
	burgerList: []
    },
    methods: {
	getBurgers: function(){
	    return this.burgerList;
	}
    }

})

const info = new Vue({
    el: '#deliverySection',
    data: {
	name: "",
	email: "",
	street: "",
	houseNumber: "",
	payment: "",
	woman: "",
	man: "",
	other: "",
	unknown: ""
    },
    methods: {
        markDone: function(name, email, street, houseNumber, payment, woman, man, other, unknown) {

	    let divElement = document.getElementById("orderDiv");
	    let nameItem = document.createElement("li");
	    nameItem.innerHTML = name;
	    let burgers = vm.getBurgers();
	    let emailItem = document.createElement("li");
	    emailItem.innerHTML = email;
	    let streetItem = document.createElement("li");
	    streetItem.innerHTML = street;
	    let houseNumberItem = document.createElement("li");
	    houseNumberItem.innerHTML = houseNumber;
	    let paymentItem = document.createElement("li");
	    paymentItem.innerHTML = payment;
	    let gender = document.createElement("li");
	    if (woman){
		gender.appendChild(document.createTextNode("Woman"));
	    }
	    if (man){
		gender.appendChild(document.createTextNode("Man"));
	    }
	    if (other){
		gender.appendChild(document.createTextNode("Other"));
	    }
	    if (unknown){
		gender.appendChild(document.createTextNode("Do not wish to answer!"));
	    }
	    divElement.appendChild(nameItem);
	    divElement.appendChild(emailItem);
	    divElement.appendChild(streetItem);
	    divElement.appendChild(houseNumberItem);
	    divElement.appendChild(paymentItem);
	    divElement.appendChild(gender);

	    for(burger in burgers){
		console.log(burgers);
		let currentBurger = document.createElement("li");
		currentBurger.innerHTML = (burgers[burger]);
		divElement.appendChild(currentBurger);
	    }
	
	
        }
    }
})


