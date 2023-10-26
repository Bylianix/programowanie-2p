const liczba1 = document.querySelector('#liczba1');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let F = (a*1.8)+32;
    let K = a+273.15;
    wynik.innerHTML = 'C ='+a+
                    '<br> K ='+K+
        '<br>F = '+F;
})


