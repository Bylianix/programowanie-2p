const liczba1 = document.querySelector('#liczba1');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let bez = a;
    let b = (a*a);
    let c = (1+(bez*bez));
    let w =b/c;
    wynik.innerHTML ="wynik = "+w;
})


