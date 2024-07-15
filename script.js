let btn = document.querySelector('#btn');

let cont = document.querySelector('#context');

console.log(btn);
console.log(cont)

function check(){
    cont.textContent = "Fronted Mentor offers realistic coding challenges to help developers improve their fronted coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for protfolio building";
    cont.style.color = 'gray';
    cont.style.marginLeft = '30px';
    cont.style.marginRight = '30px';
    cont.style.borderBottom = 'solid 1px hsl(0deg 0.93% 79.02%)';
    cont.style.paddingBottom = '20px';

    btn.style.backgroundColor = 'black';
    btn.textContent = '-';
    btn.style.fontSize = '19px';
}

btn.addEventListener('click', check);