//Solicitar nombre del alumno.
let alumno= prompt("Ingresar nombre del alumno")

//Solicitar nombre de materia.
let materia= prompt("Ingresar nombre de la materia")

//Solicitar nota 1.
let nota1= parseFloat(prompt("Ingresar nota 1"))

//Solicitar nota 2.
let nota2= parseFloat(prompt("Ingresar nota 2"))

//Solicitar nota 3.
let nota3= parseFloat(prompt("Ingresar nota 3"))


//Calcular promedio.
let promedio= (nota1+nota2+nota3) / 3

//Validar condiciones de rango.

if(isNaN(nota1) || isNaN (nota2) || isNaN (nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 )
{console.log(alert("Ingrese una nota valida en el rango del 0 al 10"))
console.log("NOTA1..." + nota1)
console.log("NOTA2..." + nota2)
console.log("NOTA3..." + nota3)
} else {
    console.log("NOTA1..." + nota1)
    console.log("NOTA2..." + nota2)
    console.log("NOTA3..." + nota3)
    console.log("PROMEDIO..." + promedio)}

//Imprimir resultados. 

if(promedio=>7){
    console.log(""+alumno+" Felicidades. Has aprobado con un promedio de "+promedio+"")
} else {
    console.log(""+alumno+" Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es "+promedio+"")}


