/**Objetos */
let miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelauto: function(){
        console.log(`mi auto es ${this.marca} ${this.modelo} ${this.annio}`);
        
    }
};
console.log(miAuto.toyota);
miAuto.detalleDelauto();
