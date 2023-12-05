const procent = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function (){
let a = parseInt(procent.value);
    let test = Math.floor(a/10)
    switch (test){
        case 1:
            wynik.innerHTML="2"
            break
        case 2:
            wynik.innerHTML="2"
            break
        case 3:
            wynik.innerHTML="2"
            break
        case 4:
            wynik.innerHTML="2"
            break
        case 5:
            wynik.innerHTML="3"
            break
        case 6:
            wynik.innerHTML="3+"
            break
        case 7:
            wynik.innerHTML="4"
            break
        case 8:
            wynik.innerHTML="4+"
            break
        case 9:
            wynik.innerHTML="5"
            break
        case 10:
            wynik.innerHTML="5"
            break
        default:
            wynik.innerHTML="nie mozna miec takiego wyniku"
            break

    }

})