import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent{

  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre"
    acepta: false
  };

  sexos: string[] = ['Hombre', 'Mujer'];

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }];

  constructor() { }

  guardar(forma:NgForm ){
    console.log(forma);
    console.log(forma.value);
    console.log(this.usuario);
  }

}
