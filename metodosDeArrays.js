
// LINK METODOS PARA ARREGLOS 



// ANCHOR ---> Metodo map
// SIEMPRE DEVUELVE UN NUEVO ARREGLO DE LA MISMA LONGITUD
// con lo que querramos
let numeros = [2, 4, 3, 12]
// numeros.indexOf(2)

//["hola", "hola", "hola", "hola" ]
// let arrMapeado = numeros.map( (elemento)=> elemento + 1 )
let arrMapeado = numeros.map( (elemento)=> {
    return elemento + 1 
} )

console.log(arrMapeado)

// ANCHOR ---> Metodo filter
// DEVUELVE TAMBIEN UN ARREGLO 

let autos = [
    {
        nombre: "nose",
        precio: 200
    },
    {
        nombre: "otra cosa",
        precio: 500
    },
    {
        nombre: "algo mas",
        precio: 300
    }
]

let autosFiltrados = autos.filter( (elemento)=>{

    return elemento.precio <= 400

} )

console.log(autosFiltrados)


// ANCHOR ---> Metodo find
// DEVUELVE EL LEMENTO QUE ENCONTRO

let autoEncontrado = autos.find( (elemento)=>{

    return elemento.nombre === "algo mas"

} )

console.log(autoEncontrado)


// ANCHOR ---> Metodo some
// DEVUELVE UN BOOLEANO ( TRUE / FALSE )

let existeAlgunElemento = autos.some( (elemento)=> {
    return elemento.precio === 500
})

console.log(existeAlgunElemento)