const liczba1 = document.querySelector('#liczba1');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let mm = a*25.3995;
    wynik.innerHTML =a+"cali to "+mm+"mm.";
})


