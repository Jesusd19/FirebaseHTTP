import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './components/personajes/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personaje/:id', component: PersonajeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'personajes' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
