
// ANCHOR ---> operador ternario y operador AND (&&)

let clima = "soleado"

const llevarParaguas = ( tipoClima )=>{

    // if( tipoClima === "lluvioso" ){
    //     return "Si llevalo"
    // }else{
    //     return "No, no hace falta"
    // }

    // return tipoClima === "lluvioso" && "si, llevalo"
    return tipoClima === "lluvioso" ? "Si llevalo" : "no, no hace falta"

}

let haceFaltaParaguas = llevarParaguas( clima )

console.log(haceFaltaParaguas)