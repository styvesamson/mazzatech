import {Injectable} from '@angular/core';
import {User} from '../interface/user.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class UserService  {

  constructor(protected http: HttpClient) {
  }

  users: Array<User> = [];


/*
  add(user: User): Observable<User> {
  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  return this.http.post<User>(`${API_BASE}/user`, user, {headers});
  }*/


  getAll(): Observable<Array<User>> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Array<User>>(`${API_BASE}/user`, { headers});
  }

  load(): void {
    this.getAll().subscribe(
      result => {
        this.users = result;
      },
      err => {
        console.error('error loading', err);
      },
    )
  }


  // Função para retornar um user
  getOne(id: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<User>(`${API_BASE}/user/` + id , { headers});
  }

  // Função para editar/atualisar a user
  edit(user) {
    const data = JSON.stringify(user);
    return this.http.put(`${API_BASE}/user/` + user.id , data);
  }

  // Função para deletar o user  pelo seu id
  delete(id) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<User>(`${API_BASE}/user/` + id, {headers});
  }

}
