import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent implements OnInit {
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: this.center,
        zoom: 15,
      }
    );

    // MapInstance("map", "map", {
    //   center: this.center,
    //   zoom: 15,
    // }).then((map) => {
    //   this.map = map.map;
    //   console.log("Instância");
    //   map;
    // });
  }
}
