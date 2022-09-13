var opcion = prompt("Cuanto es 2+2?:");
var respuestaCorrecta  = 2 + 2
while(opcion != respuestaCorrecta){
    var opcion = prompt("Incorrecto. Cuanto es 2+2?:");
}
console.log("Felicidades! El valor correcta es: " + respuestaCorrecta);