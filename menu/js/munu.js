function menu() {

    let elemMenu = formMenu.elemMenu.value;
    let fColor = formMenu.fColor.value;
    let bColor = formMenu.bColor.value;
    let hColor = formMenu.hColor.value;
    
    // console.log(elemMenu, fColor, bColor, hColor);
    
    let arrMenu = elemMenu.split(", ");
    let myMenu = "";
    
    for (i=0; i<arrMenu.length; i++) 
        myMenu += `<li><a href="#">${arrMenu[i]}</a></li>`;
    
    newMenu.innerHTML = `<ul>${myMenu}</ul>`;
    
    
    newStyle.innerHTML = `
    
    a {
        background-color: ${bColor};
        color: ${fColor};
    }
    
    a:hover {
        background-color: ${hColor};
    }
    
    `;
    
    
    
    }