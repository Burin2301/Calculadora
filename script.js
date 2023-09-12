const screen = document.querySelector('#screen')
const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('#equal')
const percentBtn = document.querySelector('#percent')
const clearBtn = document.querySelector('.clear')
const backBtn = document.querySelector('.back')



let result = ''
let value
let operator = null
let val1
let val2

function addNumbers(a, b){
    result = a + b
    operator = null
}
function addSubstraction(a, b){
    result = a - b
    operator = null
}
function addMultiply(a, b){
    result = a * b
    operator = null
}
function addDivide(a, b){
    result = a / b
    operator = null
}
function updateScreen(){
    screen.innerText = result
}
function addValue(number){
    result += number
    updateScreen()
}
numberBtns.forEach((number =>{
    number.addEventListener('click', ()=> addValue(number.innerText) )
    }
))
function addOperator(ope){
    if(operator === null){
        operator = ope
        result += ' ' + ope + ' '
        updateScreen()

    }
}
operatorBtns.forEach((operator =>{
    operator.addEventListener('click', () => addOperator(operator.innerText))
}))
function clearScreen(){
    result = ''
    operator = null
    updateScreen()
}
clearBtn.addEventListener('click', clearScreen)
function calculate(){
    if(operator !== null){
        components = result.split(' ')
        val1 = parseInt(components[0]) 
        val2 = parseInt(components[2]) 

        if(operator == '+'){
            addNumbers(val1, val2)
            
        }else if(operator == '-'){
            addSubstraction(val1,val2)
        }else if(operator == '*'){
            addMultiply(val1,val2)
        }else if(operator == '/'){
            if(val2 !== 0){
                addDivide(val1,val2)
            }
            else{
                result = 'ERROR'
                operator = null
            }
        }else{
            result = 'ERROR'
            operator = null
        }
    }
    updateScreen()
    // 
}
equalBtn.addEventListener('click', calculate)
percentBtn.addEventListener('click', percentOperation)
function percentOperation(){
    result = result/100
    updateScreen()

}
backBtn.addEventListener('click', backSpace)
function backSpace(){
    result = result.slice(0, -1)
    updateScreen()
}





// STYLE STUFF



const modeBtn = document.querySelector('#mode')
const container = document.querySelector('.container')
const cursor = document.getElementById('cursor')

let lightMode = false



modeBtn.addEventListener('click', changeMode)

function changeMode(){
    isLightMode = !lightMode
    lightMode = true
    if(isLightMode){
        container.classList.add('lightMode')
        screen.classList.add('lightModeScreen')
    }else{
        container.classList.remove('lightMode')
        screen.classList.remove('lightModeScreen')
        lightMode = false
    }
}

window.onmousemove = e =>{
    const x = e.clientX - cursor.offsetWidth / 2,
    y = e.clientY - cursor.offsetHeight / 2
    cursor.style.transform = `translate(${x}px, ${y}px)`
}



















// function updateScreen(){
//     screen.value = result

// }
// numberBtns.forEach((number =>{
//     number.addEventListener('click',()=> agregarValor(number.textContent))
// }))
// function agregarValor(valor){
//     result += valor
//     updateScreen()
// }


