import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BasicComponent } from "./basic/basic.component";
import { AppRoutingModule } from "./app-routing.module";
import { MarkersComponent } from "./markers/markers.component";
import { PolylinesComponent } from "./polylines/polylines.component";
import { IonButtonModule, IonTabGroupModule } from "@brisanet/ion";
import { ZoomComponent } from './zoom/zoom.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MarkersComponent,
    PolylinesComponent,
    ZoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonTabGroupModule,
    IonButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
