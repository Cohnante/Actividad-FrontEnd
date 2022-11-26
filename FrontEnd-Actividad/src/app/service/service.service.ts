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
  getClienteId(ID_Usuario:number){
    return this.http.get<Cliente>(this.Url+ID_Usuario)
  }

  createCliente(Cliente:Cliente){
    return this.http.post<Cliente>(this.Url,Cliente);
  }

  UpdateCliente(Cliente:Cliente){
    return this.http.put<Cliente>(this.Url+Cliente.IdCliente,Cliente)
  }

  deletePersona(Cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+Cliente.IdCliente);
  }
}
