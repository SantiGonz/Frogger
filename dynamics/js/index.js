//identificación de canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//CLASE OBEJTO para los sprites
class Objetito{
    constructor(x, y, dx, dy, ruta, tamX, tamY, ){
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

    //PARA QUE EL AMONGUS SE PUEDA MOVER A LA DERECHA, IZQUIERDA ARRIBA Y ABAJO
    caminarDerecha(){
        if ( this.x > 120 && this.x < 1180){
            this.x += this.dx;
        }
    }
    caminarIzquierda(){
        if ( this.x > 120 && this.x < 1180){
            this.x -= this.dx;
        }
    }
    caminarArriba(){
        if ( this.y > 0 && this.x < 700){
            this.y -= this.dy;
        }
    }
    caminarAbajo(){
        if ( this.y > 0 && this.x < 700){
            this.y += this.dy;
        }
    }

    //FUNCIONES PARA EL BOT
    moverArriba_abajo(){
        this.y += 20;
        if(this.y > 700){
            this.y = -120;
        }
    }
    moverAbajo_arriba(){
        this.y -= 35;
        if(this.y < -120){
            this.y = 700;
        }
    }
    
    //salvao(){
    //}

    dibujar(){
        ctx.drawImage(this.img, this.spriteX, this.spriteY, this.tamX, this.tamY, this.x, this.y, this.tamX, this.tamY);
    }
}


//constructor(x, y, dx, dy, ruta, tamX, tamY) X y Y para el canvas, DX y DY para el cmabio de posición, 
//ctx.drawImage(this.img, this.spriteX, this.spriteY, this.tamX, this.tamY, this.x, this.y, this.tamX, this.tamY);

const amongus = new Objetito(100, 300, 2, 2, "statics/media/images/amongus_sprites.png", 60, 60);
const coche1 = new Objetito(230, -50, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120);
const coche2 = new Objetito(430, 500, 2, 2, "statics/media/images/mata_amongus6.png", 120, 120);
const coche3 = new Objetito(660, -100, 2, 2, "statics/media/images/mata_amongus6.png", 120, 120);
const coche4 = new Objetito(830, 800, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120);
const cocheloco = new Objetito(510, 800, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120);
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
        amongus.dibujar();
        
        coche1.dibujar();
        coche1.moverArriba_abajo();
        
        coche2.dibujar();
        coche2.moverAbajo_arriba();

        cocheloco.dibujar();
        cocheloco.moverArriba_abajo();

        coche3.dibujar();
        coche3.moverAbajo_arriba();

        coche4.dibujar();
        coche4.moverArriba_abajo();
        

        // coche3.dibujar();
        // coche3.dibujar();

        // coche4.dibujar();

        // cocheloco.dibujar();
        

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




