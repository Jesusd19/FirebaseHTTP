import { Personaje } from "./../interfaces/personaje.interface";
import { Component, OnInit } from "@angular/core";
import { PersonajesService } from "src/app/services/personajes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-personaje",
  templateUrl: "./personaje.component.html",
  styles: []
})
export class PersonajeComponent implements OnInit {
  personaje: Personaje = {
    nombre: "",
    bio: "",
    lugar: "Francia"
  };
  id: string;

  constructor(
    private personajeServices: PersonajesService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.activeRouter.params.subscribe(params =>  {               
      this.id = params.id
      if (this.id !== "nuevo") {
        this.personajeServices.getPersonaje(this.id).subscribe( (data:Personaje) => {
          this.personaje = data;
        })        
      }
    });
  }

  ngOnInit() {}

  guardar() {
    if (this.id === "nuevo") {
      console.log(this.personaje);
      this.personajeServices.nuevoPersonaje(this.personaje).subscribe(data => {
        this.router.navigate([ "/personaje", data["name"] ]);
      },
      error => console.error(error));
    } else {
      this.personajeServices.actualizarPersonaje(this.personaje,this.id).subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }

  agregarNuevo(forma:NgForm){
        this.router.navigate([ 'personaje', 'nuevo' ]);
        forma.reset({
          lugar: 'Francia'
        })
  }
}
