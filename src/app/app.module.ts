import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BasicComponent } from "./basic/basic.component";
import { AppRoutingModule } from "./app-routing.module";
import { MarkersComponent } from "./markers/markers.component";
import { PolylinesComponent } from "./polylines/polylines.component";
import { IonButtonModule } from "@brisanet/ion";
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MarkersComponent,
    PolylinesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, IonButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
