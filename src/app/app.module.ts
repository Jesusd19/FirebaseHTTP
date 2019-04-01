import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personajes/personaje.component';
import { AppRoutingModule } from './app-routing.module.';
import { PersonajesService } from './services/personajes.service';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipes/keys.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonajeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PersonajesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
