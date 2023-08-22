import { Component, OnInit } from "@angular/core";
import { createMapInstance } from "../google";

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"],
})
export class ControlsComponent implements OnInit {
  mapa: google.maps.Map;
  posicao: google.maps.LatLngLiteral = { lat: -3.7931392, lng: -38.6020164 };

  constructor() {}

  ngOnInit() {
    this.obterInstanciaDoMapa();
  }

  obterInstanciaDoMapa() {
    createMapInstance("map", "map", {
      center: this.posicao,
    }).then((instance) => {
      this.mapa = instance.map;

      this.configurarControles();
      // this.adicionarControlePersonalizado();
    });
  }

  configurarControles() {
    this.mapa.setOptions({
      zoom: 20,
      mapTypeId: "hybrid",

      // disableDefaultUI: true,
      // zoomControl: false,
      // mapTypeControl: true,
      // mapTypeControlOptions: {
      //   position: google.maps.ControlPosition.LEFT_TOP,
      //   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      //   mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
      // },
      // scaleControl: true,
      // rotateControl: false,
      // zoomControl: true,
      // streetViewControl: false,
      // fullscreenControl: true,
    });
  }

  adicionarControlePersonalizado() {
    const buttom = document.createElement("button");
    buttom.innerText = "Aproximar";

    buttom.style.border = "2px solid rgb(23, 43, 178);";
    buttom.style.background = "#fff";
    buttom.style.margin = "8px";
    buttom.style.padding = "17px 26px";
    buttom.style.borderRadius = "9px";
    buttom.style.color = "rgb(23, 43, 178);";
    buttom.style.textShadow = "rgba(0, 0, 0, 0.32) 0px 0px 25px;";

    buttom.addEventListener("click", () => this.aproximar());
    this.mapa.controls[google.maps.ControlPosition.LEFT_TOP].push(buttom);
  }

  aproximar() {
    this.mapa.setZoom(this.mapa.getZoom() + 1);
  }
}
