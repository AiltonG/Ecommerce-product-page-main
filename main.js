const car = document.getElementById("carrinho") //aba carrinho

const quant = document.getElementById("quantidade")//quantidade

const empty = document.getElementById("empty") // texto empty
const produtos = document.getElementById("produtos") // div full

const valor = document.getElementById("valor") // texto valor
const notf = document.getElementById("notfication") // notificação

const principalimg = document.getElementById("principalimg")
const principalimgsha = document.getElementById("principalimgsha")


function carrinho(){

    if(car.style.display == 'flex'){
        car.style.display = 'none'
    }else{
        car.style.display = 'flex'
    }
}


function menos(){
    if(quant.innerHTML > 1){
        quant.innerHTML--
    }
}
function mais(){
    quant.innerHTML++
} 

function add(){

    empty.style.display = 'none'
    produtos.style.display = 'flex'

    valor.innerHTML = "$125.00 x " + quant.innerHTML + "   <strong>$"+ quant.innerHTML*125+".00</strong>"
    notificar()
}

function deletar(){
    empty.style.display = 'flex'
    produtos.style.display = 'none'
    notificar()
    carrinho()
}

function notificar(){
    if(empty.style.display == 'none'){
        notf.style.display = "flex"
        notf.innerHTML = quant.innerHTML
    }else{
        notf.style.display = "none"
    }
}

//-----------------------FOTOS-------------------------//
const fotos = ["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]

var position = 0

function changefoto(imgsrc){
    position = imgsrc
    principalimg.src = fotos[position]
}

function changefotosha(imgsrc){
    position = imgsrc
    principalimgsha.src = fotos[position]
}

function setas(dir){
    if(dir == 1){
        position++
    }else{
        position--
    }

    if(position < 0){
        position = 3
    }
    if(position > 3){
        position = 0
    }

    changefotosha(position)
}

function psetas(dir){
    if(dir == 1){
        position++
    }else{
        position--
    }

    if(position < 0){
        position = 3
    }
    if(position > 3){
        position = 0
    }

    changefoto(position)
}

const shadow = document.getElementById('shadow')

const menushadow = document.getElementById('menushadow')

function show(){
    if(document.body.clientWidth > 460){
        shadow.style.display = 'flex'
        changefotosha(position)
    }
}

function closesha(){
    shadow.style.display = 'none'
}

function showsidemenu(){
    menushadow.style.display = 'flex'
}

function closesidemenu(){
    menushadow.style.display = 'none'
}