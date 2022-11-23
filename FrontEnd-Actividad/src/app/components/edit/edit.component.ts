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

 
  cliente:Cliente=new Cliente();
  constructor( private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar()
  }
  
  Editar(){
    let IdCliente = localStorage.getItem("IdCliente");
    this.service.GetClienteId('IdCliente')
    .subscribe(data=>{
      this.cliente=data;
    })
  }

  Actualizar(){
    this.service.UpdateCliente(this.cliente).subscribe(data=>{
      this.cliente=data;
      console.log(this.cliente);
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
