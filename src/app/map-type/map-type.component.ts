import { Component, OnInit } from "@angular/core";
import { createMapInstance } from "../google";

enum TipoDeMapa {
  Roadmap = "roadmap",
  Satellite = "satellite",
  Hybrid = "hybrid",
  Terrain = "terrain",
}
@Component({
  selector: "app-map-type",
  templateUrl: "./map-type.component.html",
  styleUrls: ["./map-type.component.scss"],
})
export class MapTypeComponent implements OnInit {
  mapa01: google.maps.Map;
  mapa02: google.maps.Map;
  mapa03: google.maps.Map;
  mapa04: google.maps.Map;

  posicao: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  zoomPadrao = 15;

  constructor() {}

  ngOnInit() {
    this.obterInstanciaDoMapa("mapa01");
    this.obterInstanciaDoMapa("mapa02", TipoDeMapa.Satellite);
    this.obterInstanciaDoMapa("mapa03", TipoDeMapa.Hybrid);
    this.obterInstanciaDoMapa("mapa04", TipoDeMapa.Terrain);
  }

  obterInstanciaDoMapa(
    map: string,
    tipoDeMapa: TipoDeMapa = TipoDeMapa.Roadmap
  ) {
    createMapInstance(map, map, {
      center: this.posicao,
      zoom: this.zoomPadrao,
    }).then((instance) => {
      this[map] = instance.map;

      this[map].setOptions({
        center: this.posicao,
        zoom: this.zoomPadrao,
        mapTypeId: tipoDeMapa,
      });
    });
  }
}
