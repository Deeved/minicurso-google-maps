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
      selected: false,
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
      label: "Tilt and Heading",
      selected: false,
      value: "/tilt",
    },
    {
      label: "Controls",
      selected: false,
      value: "/controls",
    },
  ];

  selected(tab) {
    this.router.navigate([tab.value]);
  }

  ngOnInit(): void {
    const pathName = window.location.pathname;
    let currentTab = this.tabs.filter((tab) => tab.value === pathName)[0];

    if (!currentTab) {
      currentTab = this.tabs[0];
      this.router.navigate([currentTab.value]);
    }

    currentTab.selected = true;
  }
}
