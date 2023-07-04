import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../google";

@Component({
  selector: "app-markers",
  templateUrl: "./markers.component.html",
  styleUrls: ["./markers.component.scss"],
})
export class MarkersComponent implements OnInit {
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  marker: google.maps.Marker;
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    MapInstance("map", "map", { center: this.center, zoom: 15 }).then((map) => {
      this.map = map.map;

      this.addMarker();
    });
  }

  addMarker(): void {
    let newMarker = new google.maps.Marker({
      position: { lat: -7.2219439, lng: -39.3277978 },
      map: this.map,
      // icon: "https://img.icons8.com/?size=24&id=21159&format=png",
      // icon: "/assets/P-Brisanet.png/?size=24",
    });

    // newMarker.addListener("click", (e) => {
    //   console.log(e.latLng);
    // });

    this.marker = newMarker;
  }
}
