import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditComponent } from './components/edit/edit.component';
import { ListarComponent } from './components/listar/listar.component';
import { EditarUsuarioComponent } from './components/Usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/Usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {path: 'agregar', component:AgregarComponent},
  {path: 'edit', component:EditComponent},
  {path: 'Usuario/listar', component:ListarUsuarioComponent},
  {path: 'Usuario/Editar',component:EditarUsuarioComponent},
  {path: '**' , component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
