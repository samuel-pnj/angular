interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles : Detalles
}

interface Detalles{
    autor:string;
    año:number;
}

const reproductor: Reproductor = {

    volumen : 90,
    segundo: 36,
    cancion: 'Mes',
    detalles:{
        autor:'yo',
        año: 2015
    }
}

const {volumen, segundo,cancion, detalles:{autor, año }} = reproductor;


//console.log('El volumen actual es: ' + volumen);
//console.log('El segundo actual es: ' + segundo);
//console.log('La cancion actual es: ' + cancion);
//console.log('El autor es: ' + autor);
//console.log('El año de salida es: ' + año);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const[p1, p2, p3]= dbz;
console.log('Personaje 1:',p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);