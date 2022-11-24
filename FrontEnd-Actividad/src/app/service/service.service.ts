import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url='http://www.appmotosasp.somee.com/api/cliente/';

  getCliente(){
    return this.http.get<Cliente[]>(this.Url);
  }
  getClienteId(IdCliente:number){
    return this.http.get<Cliente>(this.Url+IdCliente)
  }

  createCliente(Cliente:Cliente){
    return this.http.post<Cliente>(this.Url,Cliente);
  }

  
  UpdateCliente(Cliente:Cliente){
    return this.http.put<Cliente>(this.Url+Cliente.IdCliente,Cliente)
  }
}
