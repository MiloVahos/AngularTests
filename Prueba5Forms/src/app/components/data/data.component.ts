import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object = {

    nombrecompleto: {
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: "fff@udea.com"

  }

  constructor() { 

    console.log(this.usuario);
    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('' , [
          Validators.required,
          Validators.minLength(5) 
        ]),
        'apellido': new FormControl('', Validators.required )
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ])
    })
    this.forma.setValue( this.usuario );
  }

  guardarCambios(){
    console.log( this.forma.value );
    this.forma.reset({
      nombrecompleto: {
        nombre: "",
        apellido: ""
      },
      correo:""
    });
  }


}
