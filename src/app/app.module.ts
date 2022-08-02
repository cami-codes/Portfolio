import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
