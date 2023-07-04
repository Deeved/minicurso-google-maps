import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

export interface Polyline<T> extends google.maps.Polyline {
  data: T;
}

@Component({
  selector: "app-polylines",
  templateUrl: "./polylines.component.html",
  styleUrls: ["./polylines.component.scss"],
})
export class PolylinesComponent implements OnInit {
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    MapInstance("map", "map", { center: this.center, zoom: 15 }).then(
      (instance) => {
        this.map = instance.map;
      }
    );
  }
}
