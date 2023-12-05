
const liczba1 = document.querySelector('#liczba1');
const spr0 = document.querySelector('#sprawdz0');
const wynik = document.querySelector('#wynik');
const sprawdz = document.querySelector('#sprawdz');
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');

let a = parseInt(liczba1.value);
let s0 = parseInt(spr0.value);
let los = Math.floor(Math.random()*10+1);
btn1.addEventListener('click',function () {

    sprawdz.innerHTML =los+" x "+a+" = ";
})
btn2.addEventListener('click',function () {

    let noob = a*los;
    if(s0 === noob){
        wynik.innerHTML = "brawo";
    }
    else{
        wynik.innerHTML ="sproboj innym razem";
    }




})


