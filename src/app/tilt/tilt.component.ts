import { Component, OnInit } from "@angular/core";
import { createMapInstance } from "../google";

@Component({
  selector: "app-tilt",
  templateUrl: "./tilt.component.html",
  styleUrls: ["./tilt.component.scss"],
})
export class TiltComponent implements OnInit {
  mapa01: google.maps.Map;
  mapa02: google.maps.Map;

  fortalezaPosition: google.maps.LatLngLiteral = {
    lat: -3.7931392,
    lng: -38.6020164,
  };

  juazeiroPosition: google.maps.LatLngLiteral = {
    lat: -7.2219439,
    lng: -39.3277978,
  };

  zoomPadrao = 20;
  tipoDeMapaPadrao = "hybrid";

  ngOnInit() {
    this.obterInstanciaDoMapa("mapa01", this.juazeiroPosition);
    this.obterInstanciaDoMapa("mapa02", this.fortalezaPosition);
  }

  obterInstanciaDoMapa(map: string, center: google.maps.LatLngLiteral) {
    createMapInstance(map, map, {
      center,
      zoom: this.zoomPadrao,
      mapTypeId: "hybrid",
    }).then((instance) => {
      this[map] = instance.map;

      this[map].setOptions({
        mapTypeId: this.tipoDeMapaPadrao,
        zoom: this.zoomPadrao,
        center,
        tilt: 45,
        heading: 0,
      });
    });
  }
}
