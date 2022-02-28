//Função para ocultar barra de pesquisa na homepage//
window.onload = function onLoad(){
    let onLoad3 = document.querySelector('.searchBar').style.visibility = "hidden";
    let onLoad = document.querySelector('.backImgH3').style.visibility = "hidden";
    
}

//Função para mostrar a barra de pesquisa ao clicar na lupa e para ocultar quando retirar o cursor do mouse//

function onClick(){
    let onClick = document.querySelector('.searchBar').style.visibility = 
        "visible";
        
}
function onMouseOut(){
    let onMouseOut = document.querySelector('.searchBar').style.visibility = 
        "hidden";
}
//Fim das funções do header//


//Funções das imagens na div initialContainer//

function onOver(){
    let onOver = document.querySelector('.backImgH3').style.visibility = 
        "visible"
        if (onOver = true){
            document.querySelector('.backImgH3').style.width = "100vw"
        }
}

function onMouseOut2(){
    let onMouseOut2 = document.querySelector('.backImgH3').style.visibility = 
        "hidden";

        if (onmouseout = true){
            document.querySelector('.backImgH3').style.width = "0vw"
}
}




