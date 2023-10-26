const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {

    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);
    let c = parseInt(liczba3.value);

    let p = (a+b+c)*0.5;
    let pole = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    wynik.innerHTML = '<br> a:'+a+
        '<br> b:'+b+
        '<br> c:'+c+
        '<br> pole:'+pole;



})


