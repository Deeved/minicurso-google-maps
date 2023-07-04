import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BasicComponent } from "./basic/basic.component";
import { AppRoutingModule } from "./app-routing.module";
import { MarkersComponent } from "./markers/markers.component";
@NgModule({
  declarations: [AppComponent, BasicComponent, MarkersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
