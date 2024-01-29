const leftBtn= document.getElementById('encrypt')
const rightBtn= document.getElementById('decrypt')
const leftBox= document.getElementById('leftBox')
const rightBox= document.getElementById('rightBox')

function leftData() {
    if (leftBox.value!=""){
        rightBox.value= leftBox.value
        leftBox.value= ""
    }
    
}

function rightData() {
    if (rightBox.value!=""){
        leftBox.value= rightBox.value
        rightBox.value= ""
    }
    
}
leftBtn.addEventListener('click', leftData)
rightBtn.addEventListener('click', rightData)

// console.log(leftBox.value);