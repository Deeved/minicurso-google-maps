import { Component, OnInit } from "@angular/core";
import { createMapInstance } from "../google";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent implements OnInit {
  instanciaDoMapa: google.maps.Map;
  posicao: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  zoomPadrao = 15;

  constructor() {}

  ngOnInit() {
    this.obterInstanciaDoMapa();
  }

  obterInstanciaDoMapa(): void {
    this.instanciaDoMapa = new google.maps.Map(
      document.getElementById("mapa") as HTMLElement,
      {
        center: this.posicao,
        zoom: this.zoomPadrao,
      }
    );

    // createMapInstance("mapa", "mapa", {
    //   center: this.posicao,
    //   zoom: this.zoomPadrao,
    // }).then((resp) => {
    //   this.instanciaDoMapa = resp.map;
    // });
  }
}
