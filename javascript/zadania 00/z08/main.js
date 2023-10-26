const liczba1 = document.querySelector('#liczba1');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let b = a/60;
    let h = Math.floor(a/3600);
    let m =Math.floor(b%60) ;
    let s = a-h.toFixed(0)*3600-m*60;
    wynik.innerHTML =h.toFixed(0)+" godzin "+m+" minut "+s+" sekund ";
})


