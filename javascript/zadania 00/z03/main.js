
let a = prompt("Podaj liczbe a: ","0");
a = parseInt(a);
let b = prompt("Podaj liczbe b: ","0");
b = parseInt(b);
let c = prompt("Podaj liczbe c: ","0");
c = parseInt(c);
let d = prompt("Podaj liczbe d: ","0");
d = parseInt(d);
let iloczyn = a*b*c*d;
let sr = Math.pow(iloczyn,0.25);
let s = sr.toFixed(3);

document.write("a = ",a,"<br>");

document.write("b = ",b,"<br>");

document.write("c = ",c,"<br>");

document.write("d = ",d,"<br>");
document.write("iloczyn = ",iloczyn,"<br>");

document.write("<b>srednia geometryczna to : ", sr,"<br></b>");
document.write("<b>srednia zaokraglona to : ", s,"<br></b>");
console.log(iloczyn);