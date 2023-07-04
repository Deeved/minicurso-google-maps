import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { MarkersComponent } from "./markers/markers.component";
import { PolylinesComponent } from "./polylines/polylines.component";

const routes: Routes = [
  {
    path: "basic",
    component: BasicComponent,
  },
  {
    path: "markers",
    component: MarkersComponent,
  },
  {
    path: "polylines",
    component: PolylinesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}