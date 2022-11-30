import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/cliente';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  Usuario!: Usuario[];
  constructor(private Service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.Service.getUsuario().subscribe(data=>{
      this.Usuario = data;
      console.log(data);
    })
  }

  EditarUsuario(Usuario:Usuario):void{
    localStorage.setItem("ID_Usuario",Usuario.ID_Usuario.toString());
    localStorage.setItem("Nombres",Usuario.Nombres.toString());
    localStorage.setItem("Correo",Usuario.Correo.toString());
    localStorage.setItem("Ciudad",Usuario.Ciudad.toString());
    localStorage.setItem("Telefono",Usuario.Telefono.toString());
    localStorage.setItem("FechaIngreso",Usuario.FechaIngreso.toString());
    this.router.navigate(["Usuario/Editar"]);
  }


  Delete(Usuario:Usuario){
    this.Service.deleteUsuario(Usuario)
    .subscribe(data=>{
      this.Usuario=this.Usuario.filter(p=>p!==Usuario);
      alert("Usuario eliminado...");
    })
  }
}
