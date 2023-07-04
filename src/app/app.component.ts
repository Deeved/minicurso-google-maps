import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TabInGroup } from "@brisanet/ion";

export interface Tab extends TabInGroup {
  value?: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  title = "minicurso-google-maps";
  tabs: Tab[] = [
    {
      label: "Basic",
      selected: true,
      value: "/basic",
    },
    {
      label: "Markers",
      selected: false,
      value: "/markers",
    },
    {
      label: "Polylines",
      selected: false,
      value: "/polylines",
    },
    {
      label: "Polygons",
      selected: false,
      value: "/polygons",
    },
  ];

  selected(tab) {
    this.router.navigate([tab.value]);
  }

  ngOnInit(): void {}
}
