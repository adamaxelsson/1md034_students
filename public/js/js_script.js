function menuItem(name, info, allergies, kcal, img){
    this.name = name;
    this.info = info;
    this.allergies = allergies;
    this.kcal = kcal;
    this.img = img;
    this.getKcal = function(){
	return this.name + ' ' + this.kcal;
    };
}

let burger1 = new menuItem("Bacon & Cheese Burger", "Beef from locally bred cattle", "Gluten free!", "800 kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg");

let burger2 = new menuItem("Veggie Burger", "Patty made from beans!", "Vegan friendly", "600 kcal", "https://peasandcrayons.com/wp-content/uploads/2016/09/buffalo-chickpea-veggie-burgers-recipe-2-8313-300x300.jpg");

let burger3 = new menuItem("Chicken Burger", "Deep fried chicken", "Lactose free!", "700 kcal", "https://burmakadai.in/wp-content/uploads/2018/10/Chicken-Burger.jpg");

let burger4 = new menuItem("New Burger", "Info", "Allergies!", "kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg");

let burger5 = new menuItem("New Burger", "Info", "Gluten free!", "kcal", "https://d1doqjmisr497k.cloudfront.net//-/media/franksus18/recipe-images/franks_redhot_bacon_cheeseburger_300x300.jpg");

document.getElementById("item1").innerHTML = burger1.getKcal();
document.getElementById("item2").innerHTML = burger2.getKcal();
document.getElementById("item3").innerHTML = burger3.getKcal();
document.getElementById("item4").innerHTML = burger4.getKcal();
document.getElementById("item5").innerHTML = burger5.getKcal();

