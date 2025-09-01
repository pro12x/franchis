const link=url=> {
    window.open(url,"_blank")
}

document.getElementById("call").onclick=e=> {
    e.preventDefault();
    link("tel:+221778601990")
}

document.getElementById("whatsapp").onclick=e=> {
    e.preventDefault();
    link("https://shorturl.at/4SAeQ")
}

document.getElementById("github").onclick=e=> {
    e.preventDefault();
    link("https://shorturl.at/Gj3pT")
}

document.getElementById("linkedin").onclick=e=> {
    e.preventDefault();
    link("https://shorturl.at/42RSp")
}