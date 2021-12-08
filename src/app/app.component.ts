import { Component, OnInit } from '@angular/core';
import { CambioEstado, EstadoService } from 'src/service/swaggerbillingAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'texproil';
  public tareas: any;
  // public aux: CambioEstado;
  public estados: any;
  public cambiar = false;
  constructor(
    private servicioEstado: EstadoService

  ) { }
  ngOnInit(): void {

    this.servicioEstado.estadoIdGet('613bc8c397d979667ca2a137').subscribe(res => {
      this.tareas = res.tareasOperario;
    }
    );
    this.servicioEstado.estadoTipoEstadoGet().subscribe(res => this.estados = res);
  }


  seleccionarEstado() {
    this.cambiar = true;
  }


  cambiarEstado() {

    const estado = {
      "idOti": "617414850300be212f4f1b52",
      "idTarea": "617414850300be212f4f1b6c",
      "nombreSector": "corte",
      "observacion": "hola profes",
      "tipoEstado": {
        "nombre": "finalizada",
        "descripcion": ""
      }
    }

    this.servicioEstado.estadoPut(estado).subscribe(res => console.log(res));

  }

}
