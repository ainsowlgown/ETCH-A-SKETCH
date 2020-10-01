console.log('Etch-A-Sketch.......................100%');

//1----setting up canvas with document.querySelector

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // canvas context 

// const canvas = document.querySelector('#sketch_pad');



const MOVE_AMOUNT = 20;

// consoling
console.log(canvas);


//2------------------SETUP OUR CANVAS FOR DRAWING


// const width = canvas.width; 
// const height = canvas.height;
const {
    width,
    height
} = canvas; //shortcut
// Creating Random X nd Y Points On The Canvas.

let x = Math.floor(Math.random() * width);
console.log(x);
let y = Math.floor(Math.random() * height);
console.log(y); 

console.log(width, height);
//:- These are for setting canvas draw into into round and cansvas stroke width into 10 px
ctx.lineCap = 'round'; //it will change canvas stroke to predefault butt to round
ctx.lineJoin = 'round'; 
ctx.lineWidth = MOVE_AMOUNT;

// const rand_color_gen = Math.floor(Math.random()*300);
 let hue = 0;

ctx.beginPath(); //starts the drawing
ctx.moveTo(x, y); // moveTo(from left to right, from top to bottom);
ctx.lineTo(x, y);
ctx.stroke();

//WRITE HANDELERS FOR KEYS      
 const handlekey = (e) => {
     if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key})
        // console.log(e.key);
     }
    
 }


//WRITE A DRAW FUNCTION
 const draw = ({key}) => {
    console.log(key);
    //start the path
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100% , 50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);
    //moving x and y on user actions
    switch(key) {
        case 'ArrowUp' :
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown' :
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft' :
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight' :
            x += MOVE_AMOUNT;
            break;
        default :
        break;
    }
    ctx.lineTo(x,y);
    
    ctx.stroke();
 }

//LISTEN FOR ARRROW KEYS
window.addEventListener('keydown',handlekey);
// window.addEventListener('keyup',handlekey);