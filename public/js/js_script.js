/**
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

let burger1 = new menuItem("Cheese Burger", "Beef from locally bred cattle", "800 kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg", false, false, true);

let burger2 = new menuItem("Veggie Burger", "Patty made from beans!", "600 kcal", "https://peasandcrayons.com/wp-content/uploads/2016/09/buffalo-chickpea-veggie-burgers-recipe-2-8313-300x300.jpg", false, true, false);

let burger3 = new menuItem("Chicken Burger", "Deep fried chicken", "700 kcal", "https://burmakadai.in/wp-content/uploads/2018/10/Chicken-Burger.jpg", true, false, false);

let burger4 = new menuItem("Special Burger", "Info", "750 kcal", "https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/bbq/kentucky_burger.jpg?id=2357", true, false, false);

let burger5 = new menuItem("Burger Burger", "Info", "900 kcal", "https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb", false, false, true);

var array = new Array(burger1, burger2, burger3, burger4, burger5);

let i = 0;
let burgerGrid = document.getElementById("burgerTable");
for (i; i<array.length; i++){

    let divElement = document.createElement("div");
    let listItem = document.createElement("li");
    let currentBurger = document.createTextNode(array[i].getKcal());
    let img = document.createElement("img");
    img.setAttribute("src",array[i].img);
    listItem.appendChild(currentBurger);
    listItem.appendChild(img);

    if (array[i].lactose){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains lactose!");
	allergyList.style.color = "red";
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (array[i].vegan){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Vegan friendly!");
	allergyList.style.color = "red";
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (array[i].gluten){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains gluten!");
	allergyList.style.color = "red";
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    divElement.appendChild(listItem);
    burgerGrid.appendChild(divElement);
 }	    
		    
**/  
