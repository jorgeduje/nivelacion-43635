
let x = 12
let y = x

x = 20

console.log(y)
console.log(x)

let numeros = [1, 4, 6]
let numerosCopia = numeros


numerosCopia.push(32)

console.log(numeros)
console.log(numerosCopia)


let persona = {
    nombre: "pepito",
    edad: 2
}

let personaCopia = persona

personaCopia.nombre = "maria"

console.log(persona)
console.log(personaCopia)

console.log("-----------")
console.log("-----------")
console.log("-----------")

// ANCHOR ---> Operador spread

let auto = {
    marca: "VW",
    color: "rojo",
    modelo: 2015
}

let autoCopia = {...auto, motor: 1.6}

autoCopia.color = "blanco"

auto.modelo = 2020

console.log(autoCopia)
console.log(auto)



let nombres = ["juancito", "carmen", "fulanito"]

let nombresCopia = [...nombres]

nombresCopia.push("adrian")

console.log(nombres)
console.log(nombresCopia)



// ANCHOR ---> Operador rest

let num = [1, 2, 5]

const sumar = ( ...num)=>{

    // console.log(num[0])
    // console.log(num[4])

    console.log(num)


}

sumar(1, 5, 12, 6, 7, "hola", true)