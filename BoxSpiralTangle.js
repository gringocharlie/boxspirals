const width = 600;
const height = 600;

function setup() {
    createCanvas(width, height);
    background(255);

const bs = new BoxSpirals(width, height, {
        background: 'white',
        divisions: new Range(6, 10),
        rotation: 'random',
        startCorner: 'random',
        size: new Range(30, 60),
    });
	
    image(bs.g, bs.origin.x, bs.origin.y);
}
