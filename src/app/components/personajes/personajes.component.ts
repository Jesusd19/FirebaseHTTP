import { Personaje } from './../interfaces/personaje.interface';
import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: []
})
export class PersonajesComponent implements OnInit {

  personajes: any[] = [];
  loading:boolean = true;
  constructor(private personajesServices: PersonajesService) {

    this.personajesServices.getPersonajes().subscribe( (data:any) => {
      this.personajes = data;
      this.loading = false;
    })
   }

  ngOnInit() {  
  }

  eliminarPersonaje(key$:string){
    this.personajesServices.deletePersonaje(key$).subscribe(data => {
      if (data) {
        console.error(data);
      } else { 
        delete this.personajes[key$];        
      }
    })
  }


}
