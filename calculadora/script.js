
let expression = "";
let visor = document.getElementById("valorCalculo");

function clearBtn(){
    visor.innerHTML = "";
    expression = "";
}

function typeNumber(e){
    if(visor.innerHTML != "" || e.innerHTML != "."){
        expression += e.innerHTML;
        visor.innerHTML += e.innerHTML;
    }
}

function typeOperator(e){
    expression += e.innerHTML;
    visor.innerHTML = "";
}

function evalOperation(){
    let result = eval(expression);
    if(result != undefined){
        if(result == Infinity){
            visor.innerHTML = "Error";
        }else{
            visor.innerHTML = result;
        }
    }
    
}