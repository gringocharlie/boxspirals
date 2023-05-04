const width = 600;
const height = 100;

function setup() {
    createCanvas(width, height);
    background(255);
}

function draw() {
    let g = createGraphics(width, height);

    let bse1 = new BoxSpiralElement(g, new Point(50, 50), {});
    bse1.draw();
    g.text('bse1', 50, 90);

    let bse2 = new BoxSpiralElement(g, new Point(150, 50), {
        divisions: 8,
        rotation: 'cw',
        startCorner: 'random',
    });
    bse2.draw();
    g.text('bse2', 150, 90);

    let bse3 = BoxSpiralElement.newFromCoordinates(g, new Point(225, 25), new Point(275, 25), new Point(275, 75), new Point(225, 75), {
        divisions: 10,
        rotation: 'cw',
        startCorner: 'random',
    });
    bse3.draw();
    g.text('bse3', 250, 90);

    let bse4 = BoxSpiralElement.newFromCoordinates(g, new Point(325, 25), new Point(375, 25), new Point(375, 75), new Point(325, 75), {
        divisions: 10,
        rotation: 'cw',
        startCorner: 'random',
        fillColor: 'yellow',
        strokeColor: 'red',
    });
    bse4.draw();
    g.stroke(0);
    g.fill(0);
    g.text('bse4', 350, 90);

    let bse5 = BoxSpiralElement.newFromCoordinates(g, new Point(400, 25), new Point(475, 30), new Point(475, 60), new Point(425, 75), {
        divisions: 8,
    });
    bse5.draw();
    g.text('bse5', 450, 90);

    let bse6 = BoxSpiralElement.newFromCoordinates(g, new Point(575, 25), new Point(525, 25), new Point(575, 75), new Point(525, 75), {
        divisions: 9,
    });
    bse6.draw();
    g.text('bse6', 550, 90);

    image(g, 0, 0);
    noLoop();
}
