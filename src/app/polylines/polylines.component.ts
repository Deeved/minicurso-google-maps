import { Component, OnDestroy, OnInit } from "@angular/core";
import { MapInstance } from "../google";

export interface Polyline<T> extends google.maps.Polyline {
  data: T;
}

@Component({
  selector: "app-polylines",
  templateUrl: "./polylines.component.html",
  styleUrls: ["./polylines.component.scss"],
})
export class PolylinesComponent implements OnInit, OnDestroy {
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.2219439, lng: -39.3277978 };
  polyline: google.maps.Polyline;

  path = [
    { lat: -7.219137976218226, lng: -39.32720218081236 },
    { lat: -7.219350851892891, lng: -39.32804975886106 },
    { lat: -7.220798403823536, lng: -39.32779494900465 },
    { lat: -7.220593511644255, lng: -39.3269393243289 },
    { lat: -7.219137976218226, lng: -39.32720218081236 },
  ];
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap(): void {
    MapInstance("map", "map", { center: this.center, zoom: 15 }).then(
      (instance) => {
        this.map = instance.map;
        // this.map.addListener("click", (event: google.maps.MapMouseEvent) =>
        //   console.log({ lat: event.latLng.lat(), lng: event.latLng.lng() })
        // );
        this.addPoly(this.path);
      }
    );
  }

  addPoly(path): void {
    const poly = new google.maps.Polyline({
      path,
      strokeColor: "#FF0000",
    });

    this.polyline = poly;
    poly.setMap(this.map);
  }

  showPoly(): void {
    this.polyline.setVisible(true);
  }

  hidePoly(): void {
    this.polyline.setVisible(false);
  }

  deletePoly(): void {
    this.polyline.setMap(null);
  }

  editPoly(): void {
    this.polyline.setOptions({
      editable: true,
    });
  }

  savePoly(): void {
    const polylinePath = this.polyline.getPath();

    let newPath = [];
    polylinePath.forEach((path) => {
      newPath = [...newPath, path.toJSON()];
    });
    console.log(newPath);
  }

  ngOnDestroy(): void {
    this.polyline.setMap(null);
  }
}
