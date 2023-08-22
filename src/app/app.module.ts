import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BasicComponent } from "./basic/basic.component";
import { AppRoutingModule } from "./app-routing.module";
import { IonButtonModule, IonTabGroupModule } from "@brisanet/ion";
import { ZoomComponent } from "./zoom/zoom.component";
import { MapTypeComponent } from "./map-type/map-type.component";
import { TiltComponent } from "./tilt/tilt.component";
import { ControlsComponent } from "./controls/controls.component";
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ZoomComponent,
    MapTypeComponent,
    TiltComponent,
    ControlsComponent,
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
