let yourName = "Logan Sawyer" // HINT: Replace this with your own name!
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let gbTotal = document.querySelector('#qty-gb')
let ccTotal = document.querySelector('#qty-cc')
let sugarTotal = document.querySelector('#qty-sugar')
let total = document.querySelector('#qty-total')

// GINGERBREAD 
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbTotal.textContent=gb
    total.textContent=sugar+gb+cc
    console.log('Gingerbread + button was clicked!')
})

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
    gb--
    gbTotal.textContent=gb
    total.textContent=sugar+gb+cc
    console.log('Gingerbread - button was clicked!')
})

// CHOCOLATE CHIP
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccTotal.textContent=cc
    total.textContent=sugar+gb+cc
    console.log('Chocolate Chip Cookie + button was clicked!')
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
    cc--
    ccTotal.textContent=cc
    total.textContent=sugar+gb+cc
    console.log('Chocolate Chip Cookie - button was clicked!')
})

// SUGAR
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarTotal.textContent=sugar
    total.textContent=gb+sugar+cc
    console.log('Sugar Cookie + button was clicked!')
})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
    sugar--
    sugarTotal.textContent=sugar
    total.textContent=sugar+cc+gb
    console.log('Sugar Cookie - button was clicked!')
})
//I DID IT