let po = document.querySelector("#a1")
let po2 = document.querySelector("#a2")
let taki_zibil = document.querySelector("#zibil")
let divv = document.querySelector(".panel_div_1")
let divv2= document.querySelector(".panel_div_2")
let divv3= document.querySelector(".panel_div_3")
let glxavordiv = document.querySelector(".header_bottom_open_div")
let openmenu = document.querySelector("#op1")
let openmenu2 = document.querySelector("#op2")
let openmenu3 = document.querySelector("#op3")
let openmenu4= document.querySelector("#op4")
let panelclose = document.querySelector("#a3")
let takizibil2 = document.querySelector(".nor_taki_zibil")
let slider1 = document.querySelector(".k1")
let slider2 = document.querySelector(".k2")
let slider3 = document.querySelector(".k3")
let slider4 = document.querySelector(".k4")
let nkar = document.querySelector(".dynamic_background_image_div")


po2.addEventListener("click", function ()  {
    taki_zibil.style.left   = "223px"
    taki_zibil.style.maxWidth    = "220px"
    divv2.style.display = "flex"
    divv.style.display = "none"
    glxavordiv.style.maxHeight = "600px"

})
po.addEventListener("click", function ()  {
    taki_zibil.style.left   = "-6px"
    taki_zibil.style.maxWidth    = "200px"
    divv.style.display = "flex"
    divv2.style.display = "none"
    glxavordiv.style.maxHeight = "440px"
})
openmenu.addEventListener("click", function ()  {
    glxavordiv.style.display = "block"
    glxavordiv.style.maxHeight = "440px"
    takizibil2.style.left = "34.4%"
    takizibil2.style.maxWidth = "80px"
    divv3.style.display = "none"
    divv.style.display = "flex"
    po.style.display = "inline-block"
    po2.style.display = "inline-block"
    taki_zibil.style.display = "block"
})
panelclose.addEventListener("click", function ()  {
    glxavordiv.style.maxHeight = "0px"
})

openmenu2.addEventListener("click", function ()  {
    takizibil2.style.left = "47%"
    takizibil2.style.maxWidth = "70px"
    glxavordiv.style.maxHeight = "470px"
    divv.style.display = "none"
    divv2.style.display = "none"
    divv3.style.display = "flex"
    po.style.display = "none"
    taki_zibil.style.display = "none"
    po2.style.display = "none"
})
openmenu3.addEventListener("click", function ()  {
    takizibil2.style.left = "58.5%"
    takizibil2.style.maxWidth = "65px"
    glxavordiv.style.maxHeight = "0px"
})
openmenu4.addEventListener("click", function ()  {
    takizibil2.style.left = "68.7%"
    takizibil2.style.maxWidth = "190px"
    glxavordiv.style.maxHeight = "0px"
})

slider2.addEventListener("click", function () {
    nkar.style.backgroundImage = "url('22.jpg')"
    slider2.style.backgroundColor = "#79B82A"
    slider1.style.backgroundColor = "#777777"
    slider3.style.backgroundColor = "#777777"
    slider4.style.backgroundColor = "#777777"
    gggd.style.display = "block"
    gggdd.style.display = "none"
    gggdss2.style.display = "none"
    gggdss.style.display = "none"
    console.log("X4");d

})
slider1.addEventListener("click", function  () {
    nkar.style.backgroundImage = "url('back1.jpg')"
    slider2.style.backgroundColor = "#777777"
    slider1.style.backgroundColor = "#79B82A"
    slider3.style.backgroundColor = "#777777"
    slider4.style.backgroundColor = "#777777"
    gggd.style.display = "none"
    gggdss2.style.display = "none"
    gggdd.style.display = "block"
    gggdss.style.display = "none"
    console.log("X3");
})
let gggd = document.querySelector(".image_content2")
let gggdss = document.querySelector(".image_content3")
let gggdd = document.querySelector(".image_content")
let gggdss2 = document.querySelector(".image_content4")


slider3.addEventListener("click", function () {
    nkar.style.backgroundImage = "url('back3.jpg')"
    slider2.style.backgroundColor = "#777777"
    slider3.style.backgroundColor = "#79B82A"
    slider4.style.backgroundColor = "#777777"
    slider1.style.backgroundColor = "#777777"
    gggd.style.display = "none"
    gggdd.style.display = "none"
    gggdss2.style.display = "none"
    gggdss.style.display = "block"
    console.log("X2");
})
slider4.addEventListener("click", function () {
    nkar.style.backgroundImage = "url('back4.jpg')"
    slider2.style.backgroundColor = "#777777"
    slider3.style.backgroundColor = "#777777"
    slider4.style.backgroundColor = "#79B82A"
    slider1.style.backgroundColor = "#777777"
    gggd.style.display = "none"
    gggdd.style.display = "none"
    gggdss.style.display = "none"
    console.log("X1");
    gggdss2.style.display = "block"
})




















