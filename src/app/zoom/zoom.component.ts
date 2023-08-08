import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

@Component({
  selector: "app-zoom",
  templateUrl: "./zoom.component.html",
  styleUrls: ["./zoom.component.scss"],
})
export class ZoomComponent implements OnInit {
  map01: google.maps.Map;
  map02: google.maps.Map;
  map03: google.maps.Map;
  map04: google.maps.Map;
  map05: google.maps.Map;

  position: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  private readonly brisanetIcon = "/assets/brisanet.png";

  constructor() {}

  ngOnInit() {
    this.getMapInstance("map01", 1);
    this.getMapInstance("map02", 5);
    this.getMapInstance("map03", 10);
    this.getMapInstance("map04", 15);
    this.getMapInstance("map05", 20);
  }

  getMapInstance(map: string, zoom: number) {
    MapInstance(map, map, { center: this.position, zoom }).then((instance) => {
      this.map01 = instance.map;

      this.addMarker(instance.map);
    });
  }

  addMarker(map: google.maps.Map) {
    const marker = new google.maps.Marker({
      position: this.position,
      icon: this.brisanetIcon,
    });

    marker.setMap(map);
  }
}
