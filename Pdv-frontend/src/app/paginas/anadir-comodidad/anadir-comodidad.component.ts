import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { FormGroupDirective, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-anadir-comodidad',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './anadir-comodidad.component.html',
  styleUrl: './anadir-comodidad.component.css'
})
export class AnadirComodidadComponent {

  comodidades = new FormGroup({
    icono: new FormControl(''),
    descripcion: new FormControl(''),
    nombre: new FormControl(''),
    codigo: new FormControl(''),
    codigoTipoComodidad: new FormControl(''),
    nombreTipoComodidad: new FormControl('')
  });

  comodidad: any [] = [
    {
      icono: 'pool',
      nombre: 'piscina',
      codigo: 'COD-BAN',
      codigoTipoComodidad: 'INST',
      nombreTipoComodidad: 'Instalaciones'
    },
    {
      icono: 'golf_course',
      nombre: 'Campo de golf',
      codigo: 'COD-BAN1',
      codigoTipoComodidad: 'INST',
      nombreTipoComodidad: 'Instalaciones'
    },
    {
      icono: 'restaurant_menu',
      nombre: 'Resturante',
      codigo: 'COD-BAN2',
      codigoTipoComodidad: 'INST',
      nombreTipoComodidad: 'Instalaciones'
    }
  ]

}
