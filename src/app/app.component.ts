import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // https://developers.google.com/maps/documentation/javascript/using-typescript?hl=pt-br

  title = "minicurso-google-maps";
  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: -7.179322, lng: -39.2796439 };
  marker: google.maps.Marker;

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: this.center,
        zoom: 12,
      }
    );

    this.addMarker();
  }

  // https://developers.google.com/maps/documentation/javascript/markers?hl=pt-br
  addMarker(): void {
    let newMarker = new google.maps.Marker({
      position: { lat: -7.2219439, lng: -39.3277978 },
      map: this.map,
      icon: "https://img.icons8.com/?size=24&id=21159&format=png",
    });

    this.marker = newMarker;
  }
}
