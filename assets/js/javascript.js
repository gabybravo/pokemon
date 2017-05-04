function Pokemon(nombre, color, poderDeAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.poderDeAtaque = poderDeAtaque;
  
  this.mostrarPokemon = function(){
    return("Hola, soy " + this.nombre + "y soy de color " + this.color)
  }
  
  this.aumentarAmistad = function(valor){
    this.nivelDeAmistad = this.nivelDeAmistad + valor;
  }
  
  this.atacar = function(pokemon){
    pokemon.vida = pokemon.vida - this.poderDeAtaque;
    return pokemon.vida
  }
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon("Charmander", "rojo", 20)

function batalla(){
var pokem1 = document.getElementById("poke1").value
var pokem2 = document.getElementById("poke2").value

var pelea1 = new Pokemon(pokem1, "amarillo", 100)
var pelea2 = new Pokemon(pokem2, "rojo", 20)

var resultado = document.getElementById("resultado")

pelea1.atacar(pelea2)

var textoEscrito = pelea1.nombre + " atacó a " + pelea2.nombre;
resultado.innerHTML = textoEscrito;
}

