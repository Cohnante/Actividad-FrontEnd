import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  Cliente:Cliente=new Cliente();
  id:number=0;
  nombre:string='';
  apellido:string='';
  telefono:string='';
  direccion:string='';
  correo:string='';
  ciudad:string='';

  constructor( private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }


  Editar(){
    let IdCliente: any | string = localStorage.getItem("IdCliente");
    let NombreCliente: any | string = localStorage.getItem("NombreCliente");
    let Telefono: any | string = localStorage.getItem("Telefono");
    let ApellidoCliente: any | string = localStorage.getItem("ApellidoCliente");
    let Correo: any | string = localStorage.getItem("Correo");
    let Ciudad: any | string = localStorage.getItem("Ciudad");
    let Direccion: any | string = localStorage.getItem("Direccion");
    this.service.getClienteId(+IdCliente)
    .subscribe(data=>{
      this.id=IdCliente;
      this.nombre=NombreCliente;
      this.apellido=ApellidoCliente;
      this.telefono=Telefono;
      this.correo=Correo;
      this.ciudad=Ciudad;
      this.direccion=Direccion;
      this.Cliente = data
      console.log(this.Cliente);
    })
  }

  Actualizar(cliente:Cliente){
    let Id = cliente.IdCliente;
    let Nombre=cliente.NombreCliente;
    let Apellido=cliente.ApellidoCliente;
    let Telefono=cliente.Telefono;
    let Correo=cliente.Correo;
    let Ciudad=cliente.Ciudad;
    let Direccion=cliente.Direccion;
    console.log(Id,Nombre,Telefono,Correo,Ciudad);

    cliente={
      IdCliente:Id,
      NombreCliente:Nombre,
      ApellidoCliente:Apellido,
      Telefono:Telefono,
      Correo:Correo,
      Ciudad:Ciudad,
      Direccion:Direccion
    }
    this.service.UpdateCliente(cliente)
    .subscribe(data=>{
      this.Cliente=data;
      console.log(this.Cliente);
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
