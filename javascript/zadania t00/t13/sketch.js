
let x = 0;
let y = 0;
let posx = 6;
let posy = 4;
let Size = 80;
let Color;
function setup() {
    createCanvas(1800, 1000);
    Color = color(255, 0, 0);
    background(220);
}

function draw() {
    noStroke();
    Square();

    changeSquareColor();
}

function Square() {
    fill(Color);
    x += posx;
    y += posy;
    square(x, y, Size);


    if (x > width - Size) {
        posx *= -1;
    }
    else if (x < 0) {
        posx *= -1;

    }
    if (y > height - Size) {
        posy *= -1;

    }
    if (y < 0) {
        posy *= -1;

    }

}

function changeSquareColor() {

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    Color = color(r, g, b);
}