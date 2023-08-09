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

  title = "Minicurso Google Maps";
  tabs: Tab[] = [
    {
      label: "Basic",
      selected: true,
      value: "/basic",
    },
    {
      label: "Zoom",
      selected: false,
      value: "/zoom",
    },
    {
      label: "MapType",
      selected: false,
      value: "/map-type",
    },
    {
      label: "Tilt",
      selected: false,
      value: "/tilt",
    },
  ];

  selected(tab) {
    this.router.navigate([tab.value]);
  }

  ngOnInit(): void {}
}
