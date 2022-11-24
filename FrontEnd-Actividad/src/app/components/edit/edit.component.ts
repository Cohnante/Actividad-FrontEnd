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

  constructor( private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar()
  }
  
  Editar(){
    let IdCliente:any = localStorage.getItem("IdCliente");
    this.service.getClienteId(+IdCliente)
    .subscribe(data=>{
      this.Cliente = data
      console.log(this.Cliente);
    })
  }

  Actualizar(cliente:Cliente){
    this.service.UpdateCliente(cliente)
    .subscribe(data=>{
      this.Cliente=data;
      console.log(this.Cliente);
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
