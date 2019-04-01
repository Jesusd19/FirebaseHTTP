import { Personaje } from './../components/interfaces/personaje.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  personajes_URL:string = "https://personajesapp.firebaseio.com/personajes.json";
  personaje_URL: string = "https://personajesapp.firebaseio.com/personajes/";

  constructor(private http:HttpClient) { }

  nuevoPersonaje(personaje: Personaje){
    let body = JSON.stringify( personaje );
    let headers = new  HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(this.personajes_URL,body,{ headers }).pipe(map( res => res ));
  }

  actualizarPersonaje(personaje: Personaje, key$:string){
    let body = JSON.stringify( personaje );
    let headers = new  HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${this.personaje_URL}/${ key$ }.json`
    return this.http.put(url,body,{ headers }).pipe(map( res => res));
  }

  getPersonaje(key$:string){
    let url = `${this.personaje_URL}/${ key$ }.json`;
    return this.http.get( url ).pipe(map( res => res));
  }

  getPersonajes(){
    return this.http.get( this.personajes_URL ).pipe(map( res => res));
  }

  deletePersonaje( key$:string ){
    let url = `${this.personaje_URL}/${key$}.json`
    return this.http.delete(url).pipe(map( res => res))
  }
}
