// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        },
        quantity: 1,
        subtotal: 10.5,
        subtotalWithDiscount:0,
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        quantity: 1,
        subtotal: 6.25,
        

    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        },
        quantity: 1,
        subtotal: 5,
        subtotalWithDiscount: 0
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        quantity: 1,
        subtotal: 260,
        
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        quantity: 1,
        subtotal: 20.5,
        
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        quantity: 1,
        subtotal: 12.75,
        
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        quantity: 1,
        subtotal: 15,
        
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        quantity: 1,
        subtotal: 19.99,
        
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        quantity: 1,
        subtotal: 9.99,
        
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/*function buy(id) {
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array

   for( prod of products){
       if(id == prod.id ){
            cartList.push(prod)
       }   
    }
   console.log(cartList);
   let i = 0;
   let check = false;
   let countCart = cartList.length; // Print num off items putt in the cartList.

   while(i<products.length && !check){
        
        if( id == products[i].id){
           cartList.push(products[i]);
           countCart+=1; 
           check = true;   
        }
        i++
    }
    document.getElementById("count_product").innerHTML= countCart;
}*/

// Exercise 2
function cleanCart() {

    let confirmDelete = confirm("Are you sure? ");
    if(confirmDelete ==true){
        /*for( let i=cartList.length ; i>=0 ; i--){
            cartList.pop();
        }*/

        for( let i=cart.length ; i>=0 ; i--){
            cart.pop();
        }

        resetStats()
        total = 0;
        document.getElementById("cart_list").innerHTML= "";
        document.getElementById("total_price").innerHTML= total;
        document.getElementById("count_product").innerHTML= 0;
    }
}

//Exercise 2  only for the cart array reset all the cart and the quantity of the products
function resetStats(){
    
    total= 0;
    /*for( let i=cart.length ; i>=0 ; i--){
        cart.pop();
    } */  

    for(prod of products){
        
        prod.quantity=1;  
        
        switch(prod.id){
            case 1: 
                prod.subtotal= 10.5;
                break;
            case 2: 
                prod.subtotal= 6.25;
                break;
            case 3: 
                prod.subtotal= 5;
                break;
            case 4: 
                prod.subtotal= 260;
                break;
            case 5: 
                prod.subtotal= 20.5;
                break;
            case 6: 
                prod.subtotal= 12.75;
                break;
            case 7: 
                prod.subtotal= 15;
                break;
            case 8: 
                prod.subtotal= 19.99;
                break;
            case 9: 
                prod.subtotal= 9.99;
                break;
        }
    }   
}



// Exercise 3
function calculateTotal() {
    
    total= 0;

    for(prod of cart){

        prod.subtotal = prod.price * prod.quantity;
    }


    applyPromotionsCart()
    
    for(prod of cart){
        if((prod.id == 1 && prod.quantity >= 3)||(prod.id == 3 && prod.quantity >= 10)){
            total+= prod.subtotalWithDiscount;
        }else{
            total+= prod.subtotal;
        }
    }

    document.getElementById("total_price").innerHTML= total;
}

// Exercise 4
/*function generateCart() {
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    resetStats()
    let search= false;
    let i= 0;
    
    if(cartList.length>0){
        for(prod of cartList){
            
            i=0
            search = false;
            while(i<cart.length && !search){

                if(prod.id == cart[i].id){
                    cart[i].quantity += 1;
                    cart[i].subtotal = cart[i].price * cart[i].quantity;
                    search = true;
                }else{
                    i++
                }
            }

            if(!search){
                cart.push(prod);
            }           
        }
    }
    applyPromotionsCart()
   //console.log(cart); //check
}*/




// Exercise 5
function applyPromotionsCart() {
 // Apply promotions to each item in the array "cart"
    let i=0
    let check1 = false;
    let check3 = false;
    let descountOil = 10;
    let descountCupcake = 0.66;

    while(i<cart.length && (!check1 || !check3)){

        if(cart[i].id == 1 && cart[i].quantity >= 3){
            
            cart[i].subtotalWithDiscount= descountOil * cart[i].quantity;
            check1 = true;
        }else if(cart[i].id == 3 && cart[i].quantity >= 10){
            
            cart[i].subtotalWithDiscount= cart[i].subtotal*descountCupcake;
            check3 = true;        
        }

        i++
    }          
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //generateCart()
    
    calculateTotal()
    document.getElementById("cart_list").innerHTML= "";
    let list = "";
    
    for(prod of cart){

        if(prod.id == 1 ||prod.id == 3 ){
            if (prod.id == 1 && prod.quantity >= 3){
                list += "<tr><th scope=`row`>"+prod.name+"</th><td>"+prod.price+"</td><td>"+prod.quantity+"</td><td>"+prod.subtotalWithDiscount+"</td><td><button type=`button` onclick="+"removeFromCart("+prod.id+") class=`btn btn-secondary`>takeoff</button></td></tr>"
            } else if (prod.id == 3 && prod.quantity >= 10){
                list += "<tr><th scope=`row`>"+prod.name+"</th><td>"+prod.price+"</td><td>"+prod.quantity+"</td><td>"+prod.subtotalWithDiscount+"</td><td><button type=`button` onclick="+"removeFromCart("+prod.id+") class=`btn btn-secondary`>takeoff</button></td></tr>"
            } else{
                list += "<tr><th scope=`row`>"+prod.name+"</th><td>"+prod.price+"</td><td>"+prod.quantity+"</td><td>"+prod.subtotal+"</td><td><button type=`button` onclick="+"removeFromCart("+prod.id+") class=`btn btn-secondary`>takeoff</button></td></tr>"
            }
        } else{
            list += "<tr><th scope=`row`>"+prod.name+"</th><td>"+prod.price+"</td><td>"+prod.quantity+"</td><td>"+prod.subtotal+"</td><td><button type=`button` onclick="+"removeFromCart("+prod.id+") class=`btn btn-secondary`>takeoff</button></td></tr>"
        }
    }
    
    
    document.getElementById("cart_list").innerHTML= list;
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

   let i = 0;
   let j = 0;
   let check = false; 
   let search = false;

   while(i<products.length && !check){
        
        if( id == products[i].id){
           
            if(cart.length == 0){
                cart.push(products[i])
                check = true;
            
            } else if(cart.length > 0){
                
                while(cart.length > j && !search){
            
                    if( id == cart[j].id){
                        cart[j].quantity += 1;
                        search = true;
                    }else{
                        j++
                    }
                }
            
                if(!search){
                    cart.push(products[i]);
                }           

                
                check = true;
            }  
        }
        i++
    }

    countProd();
    
}

// function for do count the prod in the cart and show it at the model.

function countProd(){
    
    let count = 0
    for(prod of cart){
        
        count+= prod.quantity; 
    }

    document.getElementById("count_product").innerHTML= count;
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let i = 0
    let found = false;

    while(cart.length>0 && !found){

        if(id == cart[i].id){
            
            if(cart[i].quantity > 1){
                
                cart[i].quantity -= 1;                
            }else if(cart[i].quantity == 1){
                
                cart.splice(i,1);
            }

            found = true;
        } else {
            i++
        }
    }

    countProd();
    printCart();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}