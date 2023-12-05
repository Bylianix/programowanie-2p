const dzien = document.querySelector('#dzien');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function (){
let a = parseInt(dzien.value);
    switch (a) {
        case 1:
            wynik.innerHTML = "poniedzialek"
            break
        case 2:
            wynik.innerHTML = "wtorek"
            break
        case 3:
            wynik.innerHTML = "sroda"
            break
        case 4:
            wynik.innerHTML = "czwartek"
            break
        case 5:
            wynik.innerHTML = "piatek"
            break
        case 6:
            wynik.innerHTML = "sobota"
            break
        case 7:
            wynik.innerHTML = "niedziela"
            break
        default:
            wynik.innerHTML="bląd"
            break
    }
})