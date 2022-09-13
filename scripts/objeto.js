var miAuto = {
	//propiedades
	marca : "Toyota",
	modelo : "Corolla",
	anio : 2020,
	//Se pueden crear funciones anonimas dentro de un objeto
	detalleAuto : function(){
		console.log(`Auto ${this.modelo} ${this.anio}`);
		//this = Es una variable que hace referencia a un objeto
	}
};//creacion de objeto

//Llamar objeto con determinada propiedad o funcion
miAuto.marca
miAuto.detalleAuto