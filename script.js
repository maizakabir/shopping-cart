var products = [
  {name: "Wonder Woman Figurine", price: "12", image: "https://s3.amazonaws.com/mernbook/marketplace/wonder-woman-2977918_960_720.jpg"},
  {name: "Darth Vader Figurine", price: "19", image: "https://s3.amazonaws.com/mernbook/marketplace/star-wars-2463926_960_720.png"},
  {name: "Joker Figurine", price: "51", image: "https://s3.amazonaws.com/mernbook/marketplace/joker-1225051_960_720.jpg"},
  {name: "Tardis Figurine", price: "14", image: "https://s3.amazonaws.com/mernbook/marketplace/tardis.png"},
  {name: "Old Ford Car Model", price: "46", image: "https://s3.amazonaws.com/mernbook/marketplace/Ford.jpg"},
  {name: "Storm Trooper Figurine", price: "23", image: "https://s3.amazonaws.com/mernbook/marketplace/stormtrooper-1995015_960_720.jpg"}
];

var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):
{
  items: [],
  total: 0
};

localStorage.setItem('cart', JSON.stringify(cart));

$(document).ready(function(){
  // products.forEach(function(product, index){
  //   //console.log(index);
  //   var colDiv = $('div').addClass('col-md-4');
  //   var cardDiv = $('div').addClass('card');
  //   $("#product-row").prepend(colDiv);
  // })
  
  // $("#itemNo").text(cart.items.length);
  
  $("#showCartBtn").click(function(){
    $("#cart").show();
    $("#products").hide();
    $("#showCartBtn").hide();
  })
  
  $("#hideCartBtn").click(function(){
    $("#cart").hide();
    $("#showCartBtn").show();
    $("#products").show();
    $("hideCartBtn").hide();
  })
 
  console.log("Start here");
  // Basic tasks
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  // 2. Dynamically load products to view
  // 3. Dynamically show total items in Cart
  // 4. Add to cart button functionality
  // 5. Dynamically load cart items
  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage
});
