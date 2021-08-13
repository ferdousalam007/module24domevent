const red = document.getElementById('red');
red.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor='red';
}
//method 2
function makeblue(){
    document.body.style.backgroundColor = 'blue';

}
// method3
const green = document.getElementById('green');
green.onclick= function(){
    document.body.style.backgroundColor='green';
}
//method 4
const coffeeColor = document.getElementById('coffee');
coffeeColor.addEventListener('click',function(){
    document.body.style.backgroundColor ="coral";
});

//method5
const crimsonColor = document.getElementById('crimson1')
crimsonColor.addEventListener('click',makeCrimson);
function makeCrimson(){
    document.body.style.backgroundColor ="crimson";
}

const whiteColor = document.getElementById('white');
whiteColor.addEventListener('click',makewhite);
function makewhite(){
    document.body.style.backgroundColor ="white";
}
