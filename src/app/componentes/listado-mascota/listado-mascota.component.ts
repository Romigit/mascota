import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Mascota } from 'src/app/clase/mascota';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

 // @Output() turno = new EventEmitter<any>();
  @Input() heroes: Array<Mascota> = [];; //@Input() mascota: Mascota;
  headElements = ['Celda', 'Nombre', 'Tipo', 'Foto'];

  colors = [{ tipo: "0", color: "green" }, 
  { tipo: "1", color: "red" }, 
  { tipo: "2", color: "blue" }, 
  { tipo: "Ignored", color: "yellow" }];

  constructor() { }

  ngOnInit(): void {
    console.log(this.heroes[0]);
  }

  //heroes = HEROES;
  selectedHero: Mascota; //selectedHero: Hero;

  onSelect(hero: Mascota): void {
    this.selectedHero = hero;
    //console.log(this.selectedHero.nombre);
  }

  getTheColor(tipo) {
    return this.colors.filter(item => item.tipo === tipo)[0].color // could be better written, but you get the idea

  }

}
