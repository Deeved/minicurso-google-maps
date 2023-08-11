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
    this.obterInstaciaDoMapa("mapa01", Zoom.Mundo);
    this.obterInstaciaDoMapa("mapa02", Zoom.Continente);
    this.obterInstaciaDoMapa("mapa03", Zoom.Cidade);
    this.obterInstaciaDoMapa("mapa04", Zoom.Rua);
    this.obterInstaciaDoMapa("mapa05", Zoom.Construcoes);

    // setTimeout(() => {
    //   this.mapa03.setOptions({
    //     maxZoom: 15,
    //     minZoom: 10,
    //     zoomControl: false,
    //   });
    // }, 1000);
  }

  obterInstaciaDoMapa(map: string, zoom: number) {
    MapInstance(map, map, { center: this.posicao, zoom }).then((instance) => {
      this[map] = instance.map;
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
