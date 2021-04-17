import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators'
import { Usuario } from '../models/usuario';


const url = 'http://localhost:3000/usuarios/'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor(private http: HttpClient) {}

private _refreshUsuario$ = new Subject<void>();

get refreshUsuario$ () {
  return this._refreshUsuario$;
}

listar(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(url);
} 

salvar(usuario: Usuario): Observable<Usuario> {
  
    return this.http.post<Usuario>(url, usuario).pipe(
      tap(() => { 
        this._refreshUsuario$.next();
      })
    );
  }

visualizar(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(url + id);
}

editar(usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(url + usuario.id,usuario).pipe(
     tap(() => {
       this._refreshUsuario$.next();
     })
  )
}

excluir (id: number) : Observable<void> {
  return this.http.delete<void>(url + id)
}


}



