export enum Tipo {
    Perro,
    Gato,
    Pez
}

export class Mascota {
    nombre : string;
    imagen : string;
    tipo : Tipo;

    constructor(nombre, imagen, tipo){
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
    }
}
