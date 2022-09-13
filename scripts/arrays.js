var estudiantes = ["MAria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}


//for (var estudiante of estudiantes){
//    saludarEstudiantes(estudiante);
//}

while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);

}

//recorrer opbjetso

var articulos = [
    {nombre:"Bici",costo: 3000},
    {nombre:"Tv",costo: 5000},
    {nombre:"Libro",costo: 150},
    {nombre:"Celular",costo: 10000},
    {nombre:"Teclado",costo: 1000},
    {nombre:"Earpods",costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});


var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});


var articuloEncontrado = articulos.find(function (articulo){
    return articulo.nombre === "Tv";
});

