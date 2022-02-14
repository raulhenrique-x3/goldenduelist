//Função para ocultar itens na homepage//
window.onload = function onLoad(){
    let onLoad0 = document.querySelector('.lordH3').style.visibility = "hidden";
    let onLoad1 = document.querySelector('.aleisterH3').style.visibility = "hidden";
    let onLoad2 = document.querySelector('.omenH3').style.visibility = "hidden";
    let onLoad3 = document.querySelector('.searchBar').style.visibility = "hidden";
}

//Função para mostrar a barra de pesquisa quando clicar na lupa e para ocultar quando retirar o cursor do mouse//
function onClick(){
    let onClick = document.querySelector('.searchBar').style.visibility = 
        "visible";
        
}
function onMouseOut(){
    let onMouseOut = document.querySelector('.searchBar').style.visibility = 
        "hidden";
        
}

//Aqui iniciam as funções onMouseOver e Out das Imagens//
function onOver0(){
    let onOver0 = document.querySelector('.lordH3').style.visibility =
        "visible";
    }

function onOut0(){
    let onOut0 = document.querySelector('.lordH3').style.visibility =
    "hidden";
}
//Aqui acaba a função da primeira imagem//
function onOver1(){
    let onOver1 = document.querySelector('.aleisterH3').style.visibility =
        "visible";
    }

function onOut1(){
    let onOut1 = document.querySelector('.aleisterH3').style.visibility =
    "hidden";
}
//Aqui acaba a função da segunda imagem//
function onOver2(){
    let onOver2 = document.querySelector('.omenH3').style.visibility =
        "visible";
    }

function onOut2(){
    let onOut2 = document.querySelector('.omenH3').style.visibility =
    "hidden";
}
//Aqui acaba a função da terceira imagem//
