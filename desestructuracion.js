
//ANCHOR ---> Desestructuracion de Arrays

let personas = ["Laura", "gonzalo", "pepito"]

// const nombre1 = personas[0]
// const nombre2 = personas[1]
// const nombre3 = personas[2]



const [ , nombre2, nombre3] = personas

console.log(nombre2)
console.log(nombre3)

//ANCHOR ---> Desestructuracion de Objetos


let perro = {
    nombre: "Jack",
    edad: 2,
    color: "marron",
    raza: "callejero"
}

let { edad, nombre, raza, color } = perro

console.log(perro.edad)
console.log(edad)
console.log(nombre)
console.log(color)
console.log(raza)


{/* <h2>{nombre}</h2>
<h2>{raza}</h2>
<h2>{edad}</h2>
<h2>{color}</h2>  */}