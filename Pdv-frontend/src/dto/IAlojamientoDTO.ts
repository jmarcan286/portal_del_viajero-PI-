import { IAlojamientoComodidadAlojamientoDTO } from "./IAlojamientoComodidadAlojamientoDTO";
import { IAlquilerAlojamientoDTO } from "./IAlquilerAlojamientoDTO";
import { IImagenAlojamientoDTO } from "./IImagenAlojamientoDTO";
import { IUbicacionAlojamientoDTO } from "./IUbicacionAlojamientoDTO";
import { IUsuarioDTO } from "./IUsuarioDTO";
import { IValoracionAlojamientoDTO } from "./IValoracionAlojamientoDTO";

export interface IAlojamientoDTO {
    id?: number;
    txtNombre?: string;
    txtDescripcion?: string;
    numPlazaMin?: number;
    numPlazaMax?: number;
    numPrecioNoche?: number;
    idUsuario?: IUsuarioDTO;
    idValoracionesAlojamiento?: IValoracionAlojamientoDTO[];
    idAlquileresAlojamiento?: IAlquilerAlojamientoDTO[];
    idUbicacion?: IUbicacionAlojamientoDTO;
    idAlojamientoComodidades?: IAlojamientoComodidadAlojamientoDTO[];
    idImagenesAlojamiento?: IImagenAlojamientoDTO[];
    idComodidades?: number[];
    numValoraciones?: number;
    valoracionPromedio?: number;
}