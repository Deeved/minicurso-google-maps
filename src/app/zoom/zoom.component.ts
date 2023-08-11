import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

enum Zoom {
  Min = 0,
  Mundo = 1,
  Continente = 5,
  Cidade = 10,
  Rua = 15,
  Construcoes = 20,
  Max = 22,
}
@Component({
  selector: "app-zoom",
  templateUrl: "./zoom.component.html",
  styleUrls: ["./zoom.component.scss"],
})
export class ZoomComponent implements OnInit {
  mapa01: google.maps.Map;
  mapa02: google.maps.Map;
  mapa03: google.maps.Map;
  mapa04: google.maps.Map;
  mapa05: google.maps.Map;

  posicao: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  private readonly iconeBrisanet = "/assets/brisanet.png";

  constructor() {}

  ngOnInit() {
    this.obterInstanciaDoMapa("mapa01", Zoom.Mundo);
    this.obterInstanciaDoMapa("mapa02", Zoom.Continente);
    this.obterInstanciaDoMapa("mapa03", Zoom.Cidade);
    this.obterInstanciaDoMapa("mapa04", Zoom.Rua);
    this.obterInstanciaDoMapa("mapa05", Zoom.Construcoes);
  }

  obterInstanciaDoMapa(map: string, zoom: number) {
    MapInstance(map, map, { center: this.posicao, zoom }).then((instance) => {
      this[map] = instance.map;

      // configuração da instancia
      this[map].setOptions({
        zoom,
        center: this.posicao,
        mapTypeId: "roadmap",
        // maxZoom: 15,
        // minZoom: 10,
        // zoomControl: false,
        // fullscreenControl: false,
      });

      this.adicionarMarcador(instance.map);
    });
  }

  adicionarMarcador(instanciaDoMapa: google.maps.Map) {
    const marker = new google.maps.Marker({
      position: this.posicao,
      icon: this.iconeBrisanet,
    });

    marker.setMap(instanciaDoMapa);
  }
}
