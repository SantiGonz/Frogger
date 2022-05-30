//identificación de canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//CLASE OBEJTO para los sprites
class Objetito{
    constructor(x, y, dx, dy, ruta, tamX, tamY, tipo){
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
        this.tipo = tipo;
    }

    //PARA QUE EL AMONGUS SE PUEDA MOVER A LA DERECHA, IZQUIERDA ARRIBA Y ABAJO
    caminarDerecha(){
        //if ( this.x < 80 && this.x < 1180){
            this.x += this.dx;
        //}
    }
    caminarIzquierda(){
        //if ( this.x > 120 && this.x < 1180){
            this.x -= this.dx;
        //}
    }
    caminarArriba(){
        //if ( this.y > 0 && this.x < 700){
            this.y -= this.dy;
        //}
    }
    caminarAbajo(){
        //if ( this.y > 0 && this.x < 700){
            this.y += this.dy;
        //}
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

const audioMori = new Audio("./statics/media/audio/atropellao.mp3");

const amongus = new Objetito(100, 300, 15, 15, "statics/media/images/amongus_sprites.png", 60, 60, "peaton");
const amongus2 = new Objetito(100, 300, 15, 15, "statics/media/images/amongus_sprites.png", 60, 60, "peaton");
const amongus3 = new Objetito(100, 300, 15, 15, "statics/media/images/amongus_sprites.png", 60, 60, "peaton");
const amongus4 = new Objetito(100, 300, 15, 15, "statics/media/images/amongus_sprites.png", 60, 60, "peaton");

const coche1 = new Objetito(230, -50, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120, "auto");
const coche2 = new Objetito(430, 500, 2, 2, "statics/media/images/mata_amongus6.png", 120, 120, "auto");
const coche3 = new Objetito(660, -100, 2, 2, "statics/media/images/mata_amongus6.png", 120, 120, "auto");
const coche4 = new Objetito(830, 800, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120, "auto");
const cocheloco = new Objetito(510, 800, 2, 2, "statics/media/images/mata_amongus2.png", 120, 120, "auto");

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
        
        //BOTS UWU
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
        
        amongus.dibujar();
        window.requestAnimationFrame(dibujar);
    }

window.requestAnimationFrame(dibujar);

// Si ( x1 > x2+w2 ) ==> No hay colisión
// Si ( x1+w1 < x2 ) ==> No hay colisión
// Si ( y1 > y2+h2 ) ==> No hay colisión
// Si ( y1+h1 < y2 ) ==> No hay colisión
// En otro caso ==> Hay colisión

window.addEventListener("keydown", (evento) =>{
    let tecla = evento.key;
    console.log(tecla);
    if (tecla == "ArrowUp"){
        if (amongus.y > 0){
            amongus.caminarArriba();
        }
        if (amongus.x > coche1.x+coche1.tamX){
            console.log("NO HUBO COLISION condicion1");
        } else if (amongus.x+amongus.tamX < coche1.x){
            console.log("NO HUBO COLISION condicion2");
        } else if (amongus.y > coche1.y+coche1.tamY){
            console.log("NO HUBO COLISION condicion3");
        } else if (amongus.y+amongus.tamY < coche1.y){
            console.log("NO HUBO COLISION condicion4");
        } else{
            console.log("Si HUBO COLISION");
            audioMori.volume = 0.1;
            audioMori.play();
        }
    } else if (tecla == "ArrowDown"){
        if ( amongus.y < 640){
            amongus.caminarAbajo();
        }
    } else if (tecla == "ArrowLeft"){
        if ( amongus.x > 0){
            amongus.caminarIzquierda();
        }
    } else if (tecla == "ArrowRight"){
        if ( amongus.x < 1120){
            amongus.caminarDerecha();
        }
    }
});





