//identificación de canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//CLASE OBEJTO para los sprites
class Objetito{
    constructor(x, y, dx, dy, ruta, tamX, tamY){
        this.x = x; //posicion x del amongus
        this.y = y; //posicion y del amongus
        this.tamX = tamX; //tamaño constante x de nuestro sprite en la plantilla de los sprites
        this.tamY = tamY; //tamaño constante y de nuestro sprite en la plantilla de los sprites
        this.dy = dy; //el aumento en la posicion x del amongus
        this.dx = dx; //el aumento en la posicion y del amongus
        this.spriteX = 0; //coordenadas x de la plantilla donde están todos los sprites
        this.spriteY = 0; //coordenadas y de la plantilla donde están todos los sprites
        const imagen = new Image(); //tratamos a las imagenes como objeto porque ocupamos varias imagenes (ver línea 54)
        imagen.src = ruta; // ruta de la imagen
        this.img = imagen; //nombre de la imagen (ver línea 50)
    }

    //PARA QUE EL AMNGUS SE PUEDA MOVER A LA DERECHA, IZQUIERDA ARRIBA Y ABAJO
    caminarDerecha(){
        if ( x > 120 && x < 1180){
            this.x += this.dx;
        }
    }
    caminarIzquierda(){
        if ( x > 120 && x < 1180){
            this.x -= this.dx;
        }
    }
    caminarArriba(){
        if ( y > 0 && x < 700){
            this.y -= this.dy;
        }
    }
    caminarAbajo(){
        if ( y > 0 && x < 700){
            this.y += this.dy;
        }
    }

    //FUNCIONES PARA EL BOT
    moverIzquierda(){
         
    }
    moverDerecha(){
        
    }
    moverDerecha(){

    }
    moverIzquierda(){

    }
    
    salvao(){

    }


    dibujar(){
        ctx.drawImage(this.img, this.spriteX, this.spriteY, this.tamX, this.tamY, this.x, this.y, this.tamX, this.tamY);
    }
}

const amongus = new Objetito(0, 0, 3, 2, "statics/media/images/amongus_sprites.png", 60, 60);
const coches = new Objetito(0, 0, 3, 2, "statics/media/images/mata_amongus.png", );
const fondo = new Image();
const arbusto = new Image();
fondo.src = "statics/media/images/carretera_fondo2.png";
arbusto.src = "statics/media/images/arbustito2.png";

    function dibujar(){
        ctx.fillStyle = "#4ea93b";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(fondo, 150, 0, 930, 700);
        ctx.drawImage(arbusto, 1100, 15, 80, 80);
        ctx.drawImage(arbusto, 1100, 200, 80, 80);
        ctx.drawImage(arbusto, 1100, 400, 80, 80);
        ctx.drawImage(arbusto, 1100, 600, 80, 80);
        ctx.drawImage(amongus, 0, 0, 50, 60, 0, 0, 65, 65);  


        // dvd.dibujar();
        // dvd2.dibujar();

        // ctx.drawImage(dvd.img, dvd.spriteX, dvd.spriteY, 32, 16, dvd.x, dvd.y, 32, 16);
        // ctx.drawImage(dvd.img, dvd.spriteX, dvd.spriteY, 32, 16, dvd.x, dvd.y, 32, 16);

        // x += dx;
        // y += dy;

        // if(dvd.x <= 0 || dvd.x >=canvas.width -32){
        //     dvd.dx = -dvd.dx;
        //     dvd.spriteX += 32;
        // } else if(dvd.y <= 0 || dvd.y >= canvas.height - 16){
        //     dvd.dy = -dvd.dy;
        //     dvd.spriteX += 32;
        // }

        window.requestAnimationFrame(dibujar);
    }

window.requestAnimationFrame(dibujar);



//identificación de imagenes
// const fondo = new Image();
// fondo.src = "statics/media/images/carretera_fondo2.png";

// const amongus = new Image();
// amongus.src = "statics/media/images/amongus_sprites.png";

//se muestran las imagenes
fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo, 380, 320);    
})

// amongus.addEventListener('load', () => {
//     ctx.drawImage(amongus, 5, 5, 52, 55, 340, 320, 52, 50);
//     ctx.drawImage(amongus, 62, 70, 52, 55, 340, 390, 52, 50);
// });




