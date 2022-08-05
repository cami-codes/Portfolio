import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ModalProjetoComponent } from './modal-projeto/modal-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMimComponent,
    ProjetosComponent,
    ModalProjetoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
