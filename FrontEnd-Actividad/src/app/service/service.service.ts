import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Usuario } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlUsuario='http://appusersasp.somee.com/api/usuario/';
  UrlCliente='http://www.appmotosasp.somee.com/api/cliente/';

  getCliente(){
    return this.http.get<Cliente[]>(this.UrlCliente);
  }
  getUsuario(){
    return this.http.get<Usuario[]>(this.UrlUsuario);
  }
  getUsuarioID(ID_Usuario:number){
    return this.http.get<Usuario>(this.UrlUsuario + ID_Usuario);
  }
  getClienteId(IdCliente:number){
    return this.http.get<Cliente>(this.UrlCliente+IdCliente)
  }
  createUsuario(Usuario:Usuario){
    return this.http.post<Usuario>(this.UrlUsuario,Usuario);
  }
  createCliente(Cliente:Cliente){
    return this.http.post<Cliente>(this.UrlCliente,Cliente);
  }
  UpdateUsuario(Usuario:Usuario){
    return this.http.put<Usuario>(this.UrlUsuario+Usuario.ID_Usuario, Usuario);
  }
  UpdateCliente(Cliente:Cliente){
    return this.http.put<Cliente>(this.UrlCliente+Cliente.IdCliente,Cliente)
  }
  deleteUsuario(Usuario:Usuario){
    return this.http.delete<Usuario>(this.UrlUsuario+Usuario.ID_Usuario);
  }
  deletePersona(Cliente:Cliente){
    return this.http.delete<Cliente>(this.UrlCliente+Cliente.IdCliente);
  }
}
