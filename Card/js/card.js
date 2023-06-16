let card = [
    
    {
    poster: "poster.png",
    type: "type.png",
    sale: "sales.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 50,
    percent: 10,
    currency: "руб.",
    promotion: true,
    rating: 5,
    order: "order.png"
    },

    {
    poster: "toy4.jpg",
    type: "type.png",
    sale: "sales.png",
    title1: "История игрушек 4",
    title2: "Приключения Вилкинса",
    price: 60,
    percent: 5,
    currency: "руб.",
    promotion: false,
    rating: 5,
    order: "order.png"
    },

    {
    poster: "ferd.jpg",
    type: "type.png",
    sale: "sales.png",
    title1: "Фердининд",
    title2: "Побег из коровника",
    price: 40,
    percent: 15,
    currency: "руб.",
    promotion: true,
    rating: 3.5,
    order: "order.png"
    },

]

for (i=0; i<card.length; i++) {

// Вид основной цены
let priceMain = `${card[i].price},00 ${card[i].currency}`;

console.log(priceMain);

// Расчет и вид акции
let actionPrice = `${Math.round(card[i].price - (card[i].price * card[i].percent / 100))},00 ${card[i].currency}`;

console.log(actionPrice);

// Вид рейтинга
let stars = "";
switch (card[i].rating) {

    case 3.5:
        stars = "star star star star_half star_border";
        break;

    case 5:
        stars = "star star star star star";
        break;   

    default:
       stars = "star_border star_border star_border star_border star_border";

}

// Расчет акции
let act = "", vis = "";
if (card[i].promotion) {
    act = `<div>${actionPrice}</div>
<div>${priceMain}</div>`;
    vis = "1";
} else {
    act = `<div>${priceMain}</div>`;
    vis = "0";
}


cards.innerHTML += `
<div class="card">
<div class="poster">
    <img src="images/${card[i].poster}" alt="">
    <img src="images/${card[i].sale}" alt="" style="opacity: ${vis}">
    <img src="images/${card[i].type}" alt="">
    
</div>

<div class="title">
    <div>${card[i].title1}</div>
    <div>${card[i].title2}</div>
</div>

<div class="price">
   ${act}
</div>

<div class="rating">
<span class="material-icons">
   ${stars}
    </span>
</div>

<div class="order">
    <img src="images/${card[i].order}" alt="">
</div>

        </div>
`; 

}