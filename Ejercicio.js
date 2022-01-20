const arreglo = ["Guillermo", "Chang", 34];

//console.log(arrglo);

let objeto = {
    nombre: "Guillermo",
    apellido:{
    
    paterno: "Chang",
    materno: "Gordillo"}
    edad: 34;
nombreCompleto: function(){
    retun this.nombre+ " " + this.apellido.paterno;
}
}

console.log(objeto.nombreCompleto());