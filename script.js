
const product = [
    {
        id: 1,
        image: 'assets/Image/Red_velvet2.svg',
        title1: 'Red velvet Cupcake - Box of 4',
        price: 2000,
    },
    {
        id: 2,
        image: 'assets/Image/Meatpie.svg',
        title1: 'Nigerian Meat Pie - A piece',
        price: 350,
    },
    {
        id: 3,
        image: 'assets/Image/chocolate.svg',
        title1: 'Box of Chocolate chip Cookies',
        price: 4500,
    },
    {
        id: 4,
        image: 'assets/Image/glazed.svg',
        title1: 'Chocolate G lazed Doughnut',
        price: 2000,
    }
];
const categories = [...new Set(product.map((item) =>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title1, price} = item;
    return(

        `<div class="box">
        <div class="product">
            <img src="${image}">
            <p>${title1}</p>
            <p class="p">N ${price}.00</p>`  +
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" +
        `</div>
    </div>`
    )
function clickme(){
    console.log(ture);
}
}).join('');


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "N "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title1, price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "N "+total+".00";
            return(
                ` <div class="cart-item">
                <div class="img-div">
                    <img src="${image}">
                </div>
                <p>${title1}</p>
                <p class="p">N ${price}.00</p>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
