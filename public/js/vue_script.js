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
'use strict';
const socket = io();

const vm = new Vue({
    el: '#burgerTable',
    data: {
	array: burgers,
	burgerList: []	
    },

    methods: {
	getBurgers: function(){
	    return this.burgerList;
	},
    }

})

const info = new Vue({
    el: '#deliverySection',
    data: {
	name: "",
	email: "",
	payment: "",
	woman: "",
	man: "",
	other: "",
	unknown: "",
	orders: {},
	lastOrder: 0,
	localOrder: {orderId: "", details: {x: 0, y: 0}, orderItems: {}, customerInfo: {}},
    },

    methods: {
        markDone: function(name, email, payment, woman, man, other, unknown) {

	    let divElement = document.getElementById("orderDiv");
	    let nameItem = document.createElement("li");
	    nameItem.innerHTML = "Name: " + name;
	    let burgers = vm.getBurgers();
	    let emailItem = document.createElement("li");
	    emailItem.innerHTML = "Email: " + email;
	    let paymentItem = document.createElement("li");
	    paymentItem.innerHTML = "Payment method: " + payment;
	    let location = document.createElement("li");
	    location.innerHTML = "Location: " + this.localOrder.details.x.toFixed(3) + " " + this.localOrder.details.y.toFixed(3);
	    
	    let gender = document.createElement("li");
	    if (woman){
		var genderInfo = "Woman";
		gender.appendChild(document.createTextNode("Gender: Woman"));
	    }
	    if (man){
		var genderInfo = "Man";
		gender.appendChild(document.createTextNode("Gender: Man"));
	    }
	    if (other){
		var genderInfo = "Other";
		gender.appendChild(document.createTextNode("Gender: Other"));
	    }
	    if (unknown){
		var genderInfo = "Do not wish to answer!";
		gender.appendChild(document.createTextNode("Gender: Do not wish to answer!"));
	    }
	    divElement.appendChild(nameItem);
	    divElement.appendChild(emailItem);
	    divElement.appendChild(paymentItem);
	    divElement.appendChild(gender);
	    divElement.appendChild(location);
	    let custInfo = [
		name, email, payment, genderInfo
	    ]
	    this.addOrder(custInfo);


	    for(var burger in burgers){
		let currentBurger = document.createElement("li");
		currentBurger.innerHTML = "Selected burger: " + (burgers[burger]);
		divElement.appendChild(currentBurger);
	    }
	    
        },
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    this.lastOrder ++;
	    return this.lastOrder;
	},
	addOrder: function(custInfo) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */

	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {x: this.localOrder.details.x, y: this.localOrder.details.y},
		orderItems: vm.getBurgers(),
		customerInfo: custInfo,
	    });
	},
	displayOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.localOrder =  {
		orderId: "T",
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: vm.getBurgers(),
	    };
	}
    }
})


