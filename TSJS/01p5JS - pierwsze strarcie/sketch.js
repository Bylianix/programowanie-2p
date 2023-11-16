function setup(){
    createCanvas(1519,700)
    background('grey')
}

let x = 100;
let y = 100

function draw(){
        fill(random(1,255),random(1,255),random(1,255))
    let dryg = random(-3,3);
    ellipse(x + dryg,y + dryg,100,100)  
    noFill()
    fill(105,200,100)
    ellipse(760,350,50,50)
    fill(275,0,200)
    ellipse(560,350,50,50)
    fill(275,0,200)
    ellipse(960,350,50,50)
    rect(735,250,50,50)
    rect(735,410,50,50)
    fill('red')
    ellipse(mouseX,mouseY,10,10)

}



