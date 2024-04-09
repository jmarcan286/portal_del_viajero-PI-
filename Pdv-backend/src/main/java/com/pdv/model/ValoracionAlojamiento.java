package com.pdv.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "valoracion_alojamiento")
public class ValoracionAlojamiento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_valoracion_alojamiento")
	private Long id;
	
	@Column(name = "txt_mensaje", nullable = false)
	private String txtMensaje;
	
	@Column(name = "txtAsunto", nullable = false, length = 50)
	private String txtAsunto;
	
	@Column(name = "provincia", nullable = false, length = 60)
	private String provincia;
	
	@Column(name = "puntuacion", nullable = false)
	private Integer puntuacion;
	
	@ManyToOne(optional = false, targetEntity = Usuario.class)
	@JoinColumn(referencedColumnName = "id_usuario", columnDefinition = "id_usuario")
	private Usuario usuarioValorador;
	
	@ManyToOne(optional = false, targetEntity = Alojamiento.class)
	@JoinColumn(referencedColumnName = "id_alojamiento", columnDefinition = "id_alojamiento")
	private Alojamiento alojamientoValorado;
	
}
