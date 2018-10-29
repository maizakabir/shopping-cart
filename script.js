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
  
  products.forEach(function(product, index){
    //console.log(index);
    var colDiv= $('<div>').addClass('col-md-4');
    var cardDiv= $('<div>').addClass('card');
    var productImage= $('<img>').addClass("card-img-top");
    productImage.attr('src', product.image);
    cardDiv.append(productImage);
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append (cardBodyDiv);
    var productTitle= $('<h5>').addClass ('card-title').text(product.name);
    cardBodyDiv.append(productTitle);
    var productPrice= $('<p>').addClass ('card-text').text ("$ "+ product.price);
    cardBodyDiv.append(productPrice);
    var addToCart= $('<button>').addClass ("btn btn-primary").text("Add to Cart").attr('id', index);
    addToCart.click(function(event){
      console.log(event.target.id);
      var cartItem= products[event.target.id];
      cartItem.quantity= 1;
      cart.items.push(cartItem);
      console.log(cart.items.length);
      cart.total= cart.items.length * cartItem.price;
      console.log(cart.items.length);
      $("#itemNo").text(cart.items.length);
      $("#total").text(cart.total);
      localStorage.setItem('cart', JSON.stringify(cart));
    });
    cardBodyDiv.append(addToCart);
    
    colDiv.append(cardDiv);
    $("#product-row").append(colDiv);
  });
    
  $("#itemNo").text(cart.items.length); 
  $("#total").text(cart.total);
    
  cart.items.forEach(function(item, index){
    var colDiv= $('<div>').addClass('col-md-4');
    var cardDiv= $('<div>').addClass('card');
    var productImage= $('<img>').addClass("card-img-top");
    productImage.attr('src', item.image);
    cardDiv.append(productImage);
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
    var productTitle= $('<h5>').addClass('card-title').text(item.name);
    cardBodyDiv.append(productTitle);
    var productPrice= $('<p>').addClass('card-text').text ("$"+ item.price + " x ");
    cardBodyDiv.append(productPrice);
    
    var productQuantity= $('<input id=qnty type=number value=0 min=0>').bind ('keyup mouseup', function(){
      item.quantity= $("#qnty").val();
    });
    productPrice.append(productQuantity);
    
    var addToCart= $('<button>').addClass ("btn btn-primary").text("Add to Cart").attr('id', index);
    addToCart.click(function(event){
      var i;
      for(i= 0; i<item.quantity; i++){
        var cartItem= products[event.target.id];
        cart.items.push(cartItem);
      }
       cart.total= cart.total + (item.price * item.quantity);
      
      $("#itemNo").text(cart.items.length);
      $("#total").text(cart.total);
      
      localStorage.setItem('cart', JSON.stringify(cart));
    });
    cardBodyDiv.append(addToCart);
    
    colDiv.append(cardDiv);
    $('#cart-row').append(colDiv);
  });
  
  
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
