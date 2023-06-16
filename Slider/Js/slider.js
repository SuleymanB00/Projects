let n = 1, max = 6;
let to = ["https://www.google.com/", "https://yandex.by/","https://mail.ru/","https://www.youtube.com/","https://facebook.com/","https://www.instagram.com/"];

let to1 = [], domain = "";

for (i=0; i<to.length; i++) {

   domain = to[i].substring(to[i].indexOf("://")+3, to[i].length-1);

   to1[i] = domain;
}

// console.log(to1);

function change() {
    if (++n > max) n = 1;
 
    changeSlide();
  
timerId = setTimeout(change, 2000);  
}

function stop() {
    clearTimeout(timerId);
}

function before() {
    // console.log("назад");

    if (n <= 1) n = 6;
      else n--;

      changeSlide();

}

function next() {
  // console.log("вперед");
  if (n >= max) n = 1;
     else n++;

     changeSlide();

}

function changeSlide() {
  link1.href = to[n-1];   
  img1.src = `images/img${n}b.jpg`;
  title1.innerHTML = `Заголовок ${n}`;
  title2.innerHTML = `Описание слайда ${n}`;
  title3.innerHTML = `<a href="${to[n-1]}">${to1[n-1]}</a>`;

}