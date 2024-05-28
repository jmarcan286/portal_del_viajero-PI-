import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroupDirective, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-comodidad',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modificar-comodidad.component.html',
  styleUrl: './modificar-comodidad.component.css'
})
export class ModificarComodidadComponent implements OnInit{

  IsActionNew: boolean = false;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if(params['action'].toLowerCase() == 'new'){
          this.IsActionNew = true;
          this.titleService.setTitle('Añadir Comodidad');
        }
      });
  }

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
      icono: 'restaurant_menu',
      nombre: 'Resturante',
      codigo: 'COD-BAN2',
      codigoTipoComodidad: 'INST',
      nombreTipoComodidad: 'Instalaciones'
    }
  ]

}
