
const liczba1 = document.querySelector('#liczba1');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click',function () {
    let a = parseInt(liczba1.value);
    let tab0 = a*0;
    let tab1 = a*1;
    let tab2 = a*2;
    let tab3 = a*3;
    let tab4 = a*4;
    let tab5 = a*5;
    let tab6 = a*6;
    let tab7 = a*7;
    let tab8 = a*8;
    let tab9 = a*9;
    let tab10 = a*10;



    wynik.innerHTML = "x = "+a+"<br>0 x "+a+" = "+tab0+"<br> 1 x "+a+" = "+tab1+"<br> 2 x "+a+" = "+tab2+"<br> 3 x "+a+" = "+tab4+"<br> 4 x "+a+" = "+tab4+
        "<br> 5 x "+a+" = "+tab5+"<br> 6 x "+a+" = "+tab6+"<br> 7 x "+a+" = "+tab7+"<br> 8 x "+a+" = "+tab8+"<br> 9 x "+a+" = "+tab9+"<br> 10 x "+a+" = "+tab10;
})


