import { Component, OnInit } from '@angular/core';
import { Mascota, Tipo } from 'src/app/clase/mascota';

@Component({
  selector: 'app-cargar-mascota',
  templateUrl: './cargar-mascota.component.html',
  styleUrls: ['./cargar-mascota.component.css']
})
export class CargarMascotaComponent implements OnInit {

    nombre: string;
    imagen: string;
    tipo: Tipo;
    tiposMascotas: any[] = [];
    lista: Array<Mascota> = [];
    constructor() {}
    mascotaCargada : Mascota;
    ver : boolean = false;

    ngOnInit() {
        this.nombre = "Juan";
        this.imagen = "https://www.purina.es/sites/g/files/mcldtz1656/files/2017-11/Bringing-Your-Kitten-Home_2.jpg";
        for (let item in Tipo) {
            if (isNaN(Number(item))) {
              this.tiposMascotas.push({ text: item, value: Tipo[item] });
            }
          }
    }

    public enviar (event): void {
        
        this.mascotaCargada = new Mascota(this.nombre, this.imagen, this.tipo);
        //this.lista.push(new Mascota(this.nombre, this.imagen, this.tipo));
        this.lista.push(this.mascotaCargada);
        this.ver = true;
    }

    public sacarTurno (e) {
        console.log(e);
    }

}
