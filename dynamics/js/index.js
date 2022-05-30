//identificación de canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//
class Objetito{
    constructor(x, y, dx, dy, ruta, tamX, tamY){
        this.x = x; //posicion x del amogus
        this.y = y; //posicion y del amogus
        this.tamX = tamX; //tamaño constante x de nuestro sprite en la plantilla de los sprites
        this.tamY = tamY; //tamaño constante y de nuestro sprite en la plantilla de los sprites
        this.dy = dy; //el aumento en la posicion x del amogus
        this.dx = dx; //el aumento en la posicion y del amogus
        this.spriteX = 0; //coordenadas x de la plantilla donde están todos los sprites
        this.spriteY = 0; //coordenadas y de la plantilla donde están todos los sprites
        const imagen = new Image(); //tratamos a las imagenes como objeto porque ocupamos varias imagenes (ver línea 54)
        imagen.src = ruta; // ruta de la imagen
        this.img = imagen; //nombre de la imagen (ver línea 50)
    }

    moverDerecha(){
        this.x += this.dx;
    }
    moverIzquierda(){
        this.x -= this.dx;
    }
    moverArriba(){
        this.y -= this.dy;
    }
    moverAbajo(){
        this.y += this.dy;
    }

    // caminarIzquierda(){
        
    // }
    // caminarDerecha(){
        
    // }
    // correrDerecha(){

    // }
    // correrIzquierda(){

    // }
    salvao(){

    }


    dibujar(){
        ctx.drawImage(this.img, this.spriteX, this.spriteY, this.tamX, this.tamY, this.x, this.y, this.tamX, this.tamY);
    }
}

const amongus = new Objetito(0, 0, 3, 2, "statics/media/images/amongus_sprites.png", 60, 60);
const coches = new Objetito(200, 100, 3, 2, "statics/media/images/mata_amongus.png", );
const fondo = new Image();
fondo.src = "statics/media/images/carretera_fondo2.png";


    function dibujar(){
        ctx.drawImage(fondo, 70, 0, 930, 700,);
        ctx.fillStyle = "#00aafa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

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

amongus.addEventListener('load', () => {
    ctx.drawImage(amongus, 5, 5, 52, 55, 340, 320, 52, 50);
    ctx.drawImage(amongus, 62, 70, 52, 55, 340, 390, 52, 50);
});




