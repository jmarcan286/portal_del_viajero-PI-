import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTipoComodidadDTO } from '../../dto/ITipoComodidadDTO';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class TipoComodidadService {

  tipoComodidadAPI = "/tipo-comodidad";

  constructor(private http: HttpClient) { }

  buscarTiposComodidades(): Observable<iTipoComodidadDTO[]> {
    return this.http.get<iTipoComodidadDTO[]>(environment.api + this.tipoComodidadAPI);
  }

}
