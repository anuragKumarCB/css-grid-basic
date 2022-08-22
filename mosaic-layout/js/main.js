// on-click div color should change to that color
// for that you have to select all divs and save it to const for dry-code
const allDiv = document.querySelectorAll('.divColor');

// trigger-program
document.querySelector('.originalColor').addEventListener('click', originalColor);
document.querySelector('.secondColor').addEventListener('click', secondColor);
document.querySelector('.thirdColor').addEventListener('click', thirdColor);
document.querySelector('.forthColor').addEventListener('click', forthColor);
document.querySelector('.fifthColor').addEventListener('click', fifthColor);
document.querySelector('.sixthColor').addEventListener('click', sixthColor);
document.querySelector('.seventhColor').addEventListener('click', seventhColor);
document.querySelector('.eighthColor').addEventListener('click', eighthColor);
document.querySelector('.ninethColor').addEventListener('click', ninethColor);
document.querySelector('.tenthColor').addEventListener('click', tenthColor);
document.querySelector('.eleventhColor').addEventListener('click', eleventhColor);
document.querySelector('.twelvethColor').addEventListener('click', twelvethColor);

function originalColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(6, 216, 125)';
    })
}
function secondColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(247, 95, 0)';
    })
}
function thirdColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(166, 35, 73)';
    })
}function forthColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(130, 112, 85)';
    })
}function fifthColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(81, 234, 234)';
    })
}function sixthColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(27, 75, 54)';
    })
}function seventhColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(0, 38, 81)';
    })
}function eighthColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(166, 108, 255)';
    })
}function ninethColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(255, 178, 0)';
    })
}function tenthColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(255, 157, 118)';
    })
}function eleventhColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(141, 141, 170)';
    })
}function twelvethColor(){
    allDiv.forEach(addColor =>{
        addColor.style.backgroundColor = 'rgb(251, 53, 105)';
    })
}