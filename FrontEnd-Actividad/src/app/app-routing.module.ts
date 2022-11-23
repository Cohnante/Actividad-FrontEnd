import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditComponent } from './components/edit/edit.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path: 'agregar', component:AgregarComponent},
  {path: 'edit', component:EditComponent},
  {path: '**' , component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
