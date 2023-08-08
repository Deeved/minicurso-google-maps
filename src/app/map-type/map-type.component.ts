import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

@Component({
  selector: "app-map-type",
  templateUrl: "./map-type.component.html",
  styleUrls: ["./map-type.component.scss"],
})
export class MapTypeComponent implements OnInit {
  map01: google.maps.Map;
  map02: google.maps.Map;
  map03: google.maps.Map;
  map04: google.maps.Map;

  position: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };

  defaultZoom = 15;

  constructor() {}

  ngOnInit() {
    this.getMapInstance("map01", this.defaultZoom);
    this.getMapInstance("map02", this.defaultZoom);
    this.getMapInstance("map03", this.defaultZoom);
    this.getMapInstance("map04", this.defaultZoom);

    this.setMapType();
  }

  getMapInstance(map: string, zoom: number) {
    MapInstance(map, map, {
      center: this.position,
      zoom,
      mapTypeId: "roadmap",
    }).then((instance) => {
      this[map] = instance.map;
    });
  }

  setMapType() {
    setTimeout(() => {
      this.map02.setMapTypeId("satellite");
      this.map03.setMapTypeId("hybrid");
      this.map04.setMapTypeId("terrain");
    });
  }
}
