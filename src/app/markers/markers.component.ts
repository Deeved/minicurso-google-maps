import { Component, OnDestroy, OnInit } from "@angular/core";
import { MapInstance, Marker } from "../google";

@Component({
  selector: "app-markers",
  templateUrl: "./markers.component.html",
  styleUrls: ["./markers.component.scss"],
})
export class MarkersComponent implements OnInit, OnDestroy {
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  marker: Marker;
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    MapInstance("map", "map", { center: this.center, zoom: 15 }).then(
      (instance) => {
        this.map = instance.map;

        this.addMarker();
      }
    );
  }

  addMarker(): void {
    let newMarker: Marker<{ label: string }> = new google.maps.Marker({
      position: { lat: -7.2219439, lng: -39.3277978 },
      map: this.map,
      // icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10 },
      // icon: "/assets/P-Brisanet.png/?size=24",
      // draggable: true,
    });

    newMarker.item = {
      label: "new marker",
    };

    // newMarker.addListener("click", (e) => {
    //   newMarker.setAnimation(google.maps.Animation.BOUNCE);
    //   newMarker.setLabel(newMarker.item.label);
    //   console.log(e.latLng);
    // });

    this.marker = newMarker;
  }

  ngOnDestroy(): void {
    this.marker.setMap(null);
  }
}
