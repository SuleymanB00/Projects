let gallery = [
    {
       file: ["red.jpg", "red1.jpg", "red2.jpg"],
       title: "Красный костел",
       link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
       description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы." 
    },
    {
        file: ["troi.jpg","troi1.jpg","troi2.jpg"],
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь." 
     },
     {
        file: ["mir.jpg","mir1.jpg","mir2.jpg"],
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси." 
     },

]

function drawPic() {

for (i=0; i<gallery.length; i++) {

    pictureHere.innerHTML += `
        <div id="id${i}">
            <img onclick="showPic('${gallery[i].file[0]}', '${gallery[i].description}')" src="images/${gallery[i].file[0]}" alt="${gallery[i].title}" onmouseover="timerId = setTimeout('roll(${i})',1000)" onmouseout="clearTimeout(timerId)">
            <p><a href="${gallery[i].link}">${gallery[i].title}</a></p>
        </div>  
    `;
    }
}

let find = document.getElementById("pictureHere");

let findP = find.getElementsByTagName("p");
let findA = find.getElementsByTagName("a");

for (index1 of findA) 
     index1.style = "text-decoration: none";   

for (index of findP) 
    index.style = `
        font-size: 24px;
        text-align: center;
    `;


let max = 2, p = 0;

function roll(n) {

    if (++p > max) p = 0;

    let pId = document.getElementById(`id${n}`);
    console.log(n,pId);

    pId.innerHTML = `
    <div>
    <img onclick="showPic('${gallery[n].file[p]}', '${gallery[n].description}')" src="images/${gallery[n].file[p]}" alt="${gallery[n].title}" onmouseout="clearTimeout(timerId); pictureHere.innerHTML = ''; drawPic()">
    <p><a href="${gallery[n].link}">${gallery[n].title}</a></p>
    </div>  
    `;

    timerId = setTimeout(`roll(${n})`,2000);
}


function showPic(fileName, descriptionName) {
    // alert(fileName + ", " + descriptionName);
    bigPic.innerHTML = `
        <img src="images/${fileName}" alt="">
        <p>${descriptionName}</p>
    `;

}

