//variables

const cartBtn = document.querySelector(".cart-btn ");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");  
const cartContent = document.querySelector(".cart-content");  
const productsDOM = document.querySelector(".products-center");  

//cart (this is where we're going to be getting information from the local storage)


let cart = [];
// this gets the products
 class Products{
     getProducts(){
        fetch('products.json')
     }
 }
 // this displays the products
class UI{}
//local storage
class Storage{}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI()
    const products = new Products();

})






 





