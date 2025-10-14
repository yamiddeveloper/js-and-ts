// Prototipos : Objetos que heredan propiedades y metodos de otros objetos

function Persona(nombre) {
	this.nombre = nombre;
  }
  
  Persona.prototype.saludar = function() {
	console.log("Hola, soy " + this.nombre);
  };
  
  const juan = new Persona("Juan");
  juan.saludar(); // "Hola, soy Juan"
  
  const yamid = new Persona("Yamid");
  yamid.saludar();

// Herencia prototipica : Un objeto puede heredar propiedades y metodos de otro objeto
