//identificación de canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//identificación de imagenes
const fondo = new Image();
fondo.src = "statics/media/images/carretera_fondo2.png";

const amongus = new Image();
amongus.src = "statics/media/images/amongus_sprites.png";

//se muestran las imagenes
fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo, 380, 320);    
})

amongus.addEventListener('load', () => {
    ctx.drawImage(amongus, 5, 5, 52, 55, 340, 320, 52, 50);
    ctx.drawImage(amongus, 62, 70, 52, 55, 340, 390, 52, 50);
});




