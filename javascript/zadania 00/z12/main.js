
const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);

    let w = Math.floor(Math.random() * (b-a+1) + b);
    let w2 = Math.floor(Math.random() * (b-a+1) + b);
    let w3 = Math.floor(Math.random() * (b-a+1) + b);
    let w4 = Math.floor(Math.random() * (b-a+1) + b);
    let w5 = Math.floor(Math.random() * (b-a+1) + b);
    let suma = w+w2+w3+w4+w5;


    let iloczyn = w*w2*w3*w4*w5;
    let srednia = suma/5;
    wynik.innerHTML ="P1 = "+w+"<br>P2 = "+w2+"<br>P3 = "+w3+"<br>P4 = "+w4+"<br>P5 = "+w5+"<br>Suma = "+suma+"<br>iloczyn = "+iloczyn+"<br>srednia = "+srednia;

})


