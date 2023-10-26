const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);
    let w = a*(b*0.01);
    wynik.innerHTML ="wynik = "+w;
})


