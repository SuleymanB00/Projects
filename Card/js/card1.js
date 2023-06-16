let card = {
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
}


// Вид основной цены
let priceMain = `${card.price},00 ${card.currency}`;

console.log(priceMain);

// Расчет и вид акции
let actionPrice = `${Math.round(card.price - (card.price * card.percent / 100))},00 ${card.currency}`;

console.log(actionPrice);

// Вид рейтинга
let stars = "";
switch (card.rating) {

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
if (card.promotion) {
  act = `<div>${actionPrice}</div>
<div>${priceMain}</div>`;
  vis = "1";
} else {
  act = `<div>${priceMain}</div>`;
  vis = "0";
}


cards.innerHTML = `
<div class="card">
<div class="poster">
  <img src="images/${card.poster}" alt="">
  <img src="images/${card.sale}" alt="" style="opacity: ${vis}">
  <img src="images/${card.type}" alt="">
  
</div>

<div class="title">
  <div>${card.title1}</div>
  <div>${card.title2}</div>
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
  <img src="images/${card.order}" alt="">
</div>

      </div>
`; 