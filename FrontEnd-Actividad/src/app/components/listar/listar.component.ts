import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  Cliente!: Cliente[];
  constructor(private Service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.Service.getCliente().subscribe(data=>{
      this.Cliente = data;
      console.log(data);
    })
  }

  Editar(cliente:Cliente):void{
    localStorage.setItem("IdCliente",cliente.IdCliente.toString());
    localStorage.setItem("NombreCliente",cliente.NombreCliente.toString());
    this.router.navigate(["edit"]);
  }


  Delete(Cliente:Cliente){
    this.Service.deletePersona(Cliente)
    .subscribe(data=>{
      this.Cliente=this.Cliente.filter(p=>p!==Cliente);
      alert("Usuario eliminado...");
    })
  }

}
