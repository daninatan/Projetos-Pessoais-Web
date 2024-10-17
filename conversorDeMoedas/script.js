firstText = document.getElementById("first")
secondText = document.getElementById("second")
firstCurrency = document.getElementById("options1")
secondCurrency = document.getElementById("options2")
firstNum = ""
secondNum = ""

function atualizarValores(num){
    if(num == 1){
        secondText.value = converter1para2(parseFloat(firstText.value))
    }else{
        firstText.value = converter2para1(parseFloat(secondText.value))
    }
}

function converter1para2(value){
    switch(firstCurrency.value){
        case "real":
            switch(secondCurrency.value){
                case "real":
                    return value.toFixed(2)
                case "dollar":
                    return (value * 0.18).toFixed(2)
                case "euro":
                    return (value * 0.16).toFixed(2)
            }

        case "dollar":
            switch(secondCurrency.value){
                case "real":
                    return (value * 5.66).toFixed(2)
                case "dollar":
                    return value.toFixed(2)
                case "euro":
                    return (value * 0.92).toFixed(2)
            }

        case "euro":
            switch(secondCurrency.value){
                case "real":
                    return (value * 6.13).toFixed(2)
                case "dollar":
                    return (value * 1.08).toFixed(2)
                case "euro":
                    return value.toFixed(2)
            }
    }
}

function converter2para1(value){
    switch(secondCurrency.value){
        case "real":
            switch(firstCurrency.value){
                case "real":
                    return value.toFixed(2)
                case "dollar":
                    return (value * 0.18).toFixed(2)
                case "euro":
                    return (value * 0.16).toFixed(2)
            }

        case "dollar":
            switch(firstCurrency.value){
                case "real":
                    return (value * 5.66).toFixed(2)
                case "dollar":
                    return value.toFixed(2)
                case "euro":
                    return (value * 0.92).toFixed(2)
            }

        case "euro":
            switch(firstCurrency.value){
                case "real":
                    return (value * 6.13).toFixed(2)
                case "dollar":
                    return (value * 1.08).toFixed(2)
                case "euro":
                    return value.toFixed(2)
            }
    }
}