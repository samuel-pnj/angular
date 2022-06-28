

/*
    ===== Código de TypeScript =====
*/

let habilidades: string []= ['Bash', 'Counter', 'Heal'];

interface Personaje{
    nombre:string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje= {
    nombre: "bergi",
    hp:100,
    habilidades: ['Bash', 'Counter', 'Heal']
}

personaje.puebloNatal = "Pueblo paleta";

console.table(personaje);