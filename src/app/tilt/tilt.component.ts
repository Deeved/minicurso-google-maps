import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

@Component({
  selector: "app-tilt",
  templateUrl: "./tilt.component.html",
  styleUrls: ["./tilt.component.scss"],
})
export class TiltComponent implements OnInit {
  map01: google.maps.Map;
  map02: google.maps.Map;

  fortalezaPosition: google.maps.LatLngLiteral = {
    lat: -3.7931392,
    lng: -38.6020164,
  };

  juazeiroPosition: google.maps.LatLngLiteral = {
    lat: -7.2219439,
    lng: -39.3277978,
  };

  private readonly brisanetIcon = "/assets/brisanet.png";

  ngOnInit() {
    this.getMapInstance("map01", 20, this.juazeiroPosition);
    this.getMapInstance("map02", 20, this.fortalezaPosition);

    // setTimeout(() => {
    //   this.map01.setTilt(45);

    //   this.map02.setTilt(0);
    // }, 2000);
  }

  getMapInstance(map: string, zoom: number, center: google.maps.LatLngLiteral) {
    MapInstance(map, map, {
      center,
      zoom,
      mapTypeId: "hybrid",
    }).then((instance) => {
      this[map] = instance.map;
    });
  }
}
