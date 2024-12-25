const search = document.getElementById('search')

function display(x) {
    //console.log(val)
    search.innerText += x
}
function calculate() {
    let calcVal = search.innerText
    //console.log(calcVal)
    let sum = eval(calcVal)
    //console.log(sum)
    search.innerText = sum
}
function blank(){
    //console.log("clear")
    search.innerText = " ";
}