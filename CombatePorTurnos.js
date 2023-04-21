let Hero = {
    nombre: "Heroe",
    vidaMaxima: 100,
    vidaActual: 100,
    dano: 5,
}

let Limo = {
    nombre: "Limo",
    vidaMaxima: 100,
    vidaActual: 200,
    dano: 10,
}

do {
    console.log("Empieza el combate")
    console.log(`${Hero.nombre} ${"-"} ${"HP"} ${Hero.vidaActual} ${"/"} ${Hero.vidaMaxima}`)
    console.log(`${Limo.nombre} ${"-"} ${"HP"} ${Limo.vidaActual} ${"/"} ${Limo.vidaMaxima}`)
    console.log(`${Hero.nombre} ${"deals"} ${Hero.dano} ${"DMG"} ${"to"} ${Limo.nombre}`)
    Limo.vidaActual = Limo.vidaActual - Hero.dano;
    console.log("")
    console.log(`${Hero.nombre} ${"-"} ${"HP"} ${Hero.vidaActual} ${"/"} ${Hero.vidaMaxima}`)
    console.log(`${Limo.nombre} ${"-"} ${"HP"} ${Limo.vidaActual} ${"/"} ${Limo.vidaMaxima}`)
    console.log(`${Limo.nombre} ${"deals"} ${Limo.dano} ${"DMG"} ${"to"} ${Hero.nombre}`)
    Hero.vidaActual = Hero.vidaActual - Limo.dano;
    console.log("")
    console.log(`${Hero.nombre} ${"-"} ${"HP"} ${Hero.vidaActual} ${"/"} ${Hero.vidaMaxima}`)
    console.log(`${Limo.nombre} ${"-"} ${"HP"} ${Limo.vidaActual} ${"/"} ${Limo.vidaMaxima}`)
} while (Hero.vidaActual > 0 && Limo.vidaActual > 0);


if (Hero.vidaActual <=0) {
    console.log(`${Hero.nombre} ${"died!"}`)
} else {
    console.log(`${Limo.nombre} ${"died!"}`)
}