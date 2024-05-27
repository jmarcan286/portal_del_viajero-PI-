import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { FormGroupDirective, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-casas-alquiler',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './casas-alquiler.component.html',
  styleUrl: './casas-alquiler.component.css'
})
export class CasasAlquilerComponent {

  casasRurales: any[] = [
    {
      titulo: "Casa Rural en Málaga",
      localizacion: "Málaga, Andalucía",
      precio: "520",
      detalles: "Es una casa Rural que cuenta con piscina, un restaurante cerca, la playa está situada a 5 minutos andando y además, cuenta con una gran tranquilidad alrededor",
    },
    {
      titulo: "Urbanización privada",
      localizacion: "Marbella, Andalucía",
      precio: "700",
      detalles: "Es una casa Rural que cuenta con piscina, un restaurante cerca, la playa está situada a 5 minutos andando y además, cuenta con una gran tranquilidad alrededor",
    },
    {
      titulo: "Zona de despeje total",
      localizacion: "Gran Alacant, Alicante",
      precio: "350",
      detalles: "Es una casa Rural que cuenta con piscina, un restaurante cerca, la playa está situada a 5 minutos andando y además, cuenta con una gran tranquilidad alrededor",
    }
  ]

}