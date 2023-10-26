const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);
    let iloczyn = a*b;
    let iloraz = Math.floor(a/b);
    let suma = a+b;
    let roznica = a-b;
    let reszta = a%b;

    wynik.innerHTML = ' a:'+a+
                        '<br> b:'+b+
                          '<br> suma:'+suma+
                        '<br> roznica:'+roznica+
                        '<br> iloczyn:'+iloczyn+
                       '<br> iloraz:'+iloraz+
                        '<br> reszta z dzielenia:'+reszta;
})


