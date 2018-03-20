import {Injectable} from '@angular/core';
import {Agendamento} from '../interface/agendamento.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class AgendamentoService  {

  constructor(protected http: HttpClient) {
  }

  agendamentos: Array<Agendamento> = [];

  /**
   * CHECK CPF
   * @return {Array}
   */
  // Function to check if CPF is taken
  checkCPF(cpf) {
    return this.http.post(`${API_BASE}/identity/checkcpf`, cpf);
  }


  add(agendamento: Agendamento): Observable<Agendamento> {
  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  return this.http.post<Agendamento>(`${API_BASE}/agendamento`, agendamento, {headers});
  }


  getAll(): Observable<Array<Agendamento>> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Array<Agendamento>>(`${API_BASE}/agendamento`, { headers});
  }

  load(): void {
    this.getAll().subscribe(
      result => {
        this.agendamentos = result;
      },
      err => {
        console.error('error loading', err);
      },
    )
  }


  // Função para retornar um agendamento
  getOne(id: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Agendamento>(`${API_BASE}/agendamento/` + id , { headers});
  }

  // Função para editar/atualisar a agendamento
  edit(agendamento) {
    const data = JSON.stringify(agendamento);
    return this.http.put(`${API_BASE}/agendamento/` + agendamento.id , data);
  }

  // Função para deletar o agendamento  pelo seu id
  delete(id) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Agendamento>(`${API_BASE}/agendamento/` + id, {headers});
  }

}
