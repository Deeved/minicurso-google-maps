import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { ZoomComponent } from "./zoom/zoom.component";
import { MapTypeComponent } from "./map-type/map-type.component";
import { TiltComponent } from "./tilt/tilt.component";

const routes: Routes = [
  {
    path: "basic",
    component: BasicComponent,
  },
  {
    path: "zoom",
    component: ZoomComponent,
  },
  {
    path: "map-type",
    component: MapTypeComponent,
  },
  {
    path: "tilt",
    component: TiltComponent,
  },
  {
    path: "**",
    component: BasicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
