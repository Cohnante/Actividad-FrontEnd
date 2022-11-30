import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/cliente';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  Usuario:Usuario=new Usuario();

  id:number=0;
  nombres:string='';
  telefono:string='';
  correo:string='';
  ciudad:string='';
  fechaIngreso:string='';

  constructor( private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }


  Editar(){
    let ID_Usuario: any | string = localStorage.getItem("ID_Usuario");
    let Nombres: any | string = localStorage.getItem("Nombres");
    let Telefono: any | string = localStorage.getItem("Telefono");
    let Ciudad: any | string = localStorage.getItem("Ciudad");
    let Correo: any | string = localStorage.getItem("Correo");
    let FechaIngreso: any | string = localStorage.getItem("FechaIngreso");
    this.service.getUsuarioID(+ID_Usuario)
    .subscribe(data=>{
      this.id=ID_Usuario;
      this.nombres=Nombres;
      this.telefono=Telefono;
      this.correo=Correo;
      this.ciudad=Ciudad;
      this.fechaIngreso=FechaIngreso;
      this.Usuario = data;
      console.log(Nombres,Ciudad,Telefono,Correo,FechaIngreso);
      
      console.log(this.Usuario);
    })
  }

  Actualizar(Usuario:Usuario){
    let Id = Usuario.ID_Usuario;
    let Nombre= Usuario.Nombres;
    let Telefono= Usuario.Telefono;
    let Correo= Usuario.Correo;
    let Ciudad= Usuario.Ciudad;
    let fechaIngreso= Usuario.FechaIngreso;

    console.log(Id,Nombre,Telefono,Correo,Ciudad,fechaIngreso);
    
    Usuario={
      ID_Usuario:Id,
      Nombres:Nombre,
      Telefono:Telefono,
      Correo:Correo,
      Ciudad:Ciudad,
      FechaIngreso:fechaIngreso
    }
    this.service.UpdateUsuario(Usuario)
    .subscribe(data=>{
      this.Usuario=data;
      console.log(this.Usuario);
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Usuario/listar"]);
    })
  }
}
