
console.log('hi');
function Add(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('res').textContent = num1 + num2;
}


// // main.js

// function Add() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);

//     if (!isNaN(num1) && !isNaN(num2)) {
//         const result = num1 + num2;
//         document.getElementById('res').textContent = `Result: ${result}`;
//     } else {
//         document.getElementById('res').textContent = 'Please enter valid numbers';
//     }
// }
