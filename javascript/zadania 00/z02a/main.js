let a = prompt("Podaj liczbe a: ","");
a = parseInt(a);
let b = prompt("Podaj liczbe b: ","");
b = parseInt(b);
let c = prompt("Podaj liczbe c: ","");
c = parseInt(c);
let d = prompt("Podaj liczbe d: ","");
d = parseInt(d);
let srednia = srednia2(a,b,c,d)
let sum = suma(a,b,c,d)
document.write("a = ",a ,"<br>");

document.write("b = ",b,"<br>");

document.write("c = ",c,"<br>");

document.write("d = ",d,"<br>");

document.write("suma = ",sum,"<br>srednia = ",srednia,"<br>zaokronglona srednia = ",Math.round(srednia))