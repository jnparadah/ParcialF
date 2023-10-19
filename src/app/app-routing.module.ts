import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './Components/Comida/comida.component';
import { DueniosComponent } from './Components/Duenios/duenios.component';
import { MascotasComponent } from './Components/Mascotas/mascotas.component';

const routes: Routes = [
  {path:"Comida", component:ComidaComponent},
  {path:"Dueños", component:DueniosComponent},
  {path:"Mascotas", component:MascotasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
