var nombre = 'Selena', apellido = 'Gómez'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

var primerLetraNombre = nombre.charAt(0)
var totalLetrasNombre = nombre.length

// interpolacion de texto
var nombreCompleto = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var ultimaLetra = nombre.charAt(nombre.length - 1)

console.log('Hola ' + nombre + ' ' + apellido)