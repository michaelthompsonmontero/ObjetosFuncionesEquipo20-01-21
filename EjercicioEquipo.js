const articulo = {
    nombre: "Chochos",
    descripcion: "Mejora tu vida",
    precio: 50,
    cantidad: 5,
    foto: `https://m.media-amazon.com/images/I/81FSi73fyRL._AC_SX425_.jpg
    `
}

document.getElementById("uno").innerHTML = `<h1>${articulo.nombre}</h1>
<img src="${articulo.foto}">`;

console.log(articulo.nombre);
