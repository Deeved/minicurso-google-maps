import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { ZoomComponent } from "./zoom/zoom.component";
import { MapTypeComponent } from "./map-type/map-type.component";
import { TiltComponent } from "./tilt/tilt.component";
import { ControlsComponent } from "./controls/controls.component";

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
    path: "controls",
    component: ControlsComponent,
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
