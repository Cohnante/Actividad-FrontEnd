import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cliente:Cliente=new Cliente();
  constructor( private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createCliente(this.cliente)
    .subscribe(data=>{
      console.log(data);
      
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
