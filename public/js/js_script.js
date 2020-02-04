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

let burger1 = new menuItem("Bacon & Cheese Burger", "Beef from locally bred cattle", "800 kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg", false, false, true);

let burger2 = new menuItem("Veggie Burger", "Patty made from beans!", "600 kcal", "https://peasandcrayons.com/wp-content/uploads/2016/09/buffalo-chickpea-veggie-burgers-recipe-2-8313-300x300.jpg", false, true, false);

let burger3 = new menuItem("Chicken Burger", "Deep fried chicken", "700 kcal", "https://burmakadai.in/wp-content/uploads/2018/10/Chicken-Burger.jpg", true, false, false);

let burger4 = new menuItem("New Burger", "Info", "kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg", true, false, false);

let burger5 = new menuItem("New Burger", "Info", "kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg", false, false, true);

var array = new Array(burger1, burger2, burger3, burger4, burger5);

let i = 0;
let myElement = document.getElementById("burgerTable");
for (i; i<array.length; i++){
    let listItem = document.createElement("li");
    let listValue = document.createTextNode(array[i].getKcal());
    listItem.appendChild(listValue);
    
    if (array[i].lactose){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains lactose!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (array[i].vegan){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Vegan friendly!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (array[i].gluten){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains gluten!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    myElement.appendChild(listItem);
}
