import {Injectable} from '@angular/core';
import {Doctor} from '../interface/doctor.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class DoctorService  {

  constructor(protected http: HttpClient) {
  }

  doctors: Array<Doctor> = [];

  /**
   * CHECK CPF
   * @return {Array}
   */
  // Function to check if CPF is taken
  checkCPF(cpf) {
    return this.http.post(`${API_BASE}/identity/checkcpf`, cpf);
  }


  add(doctor: Doctor): Observable<Doctor> {
  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  return this.http.post<Doctor>(`${API_BASE}/doctor`, doctor, {headers});
  }


  getAll(): Observable<Array<Doctor>> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Array<Doctor>>(`${API_BASE}/doctor`, { headers});
  }

  load(): void {
    this.getAll().subscribe(
      result => {
        this.doctors = result;
      },
      err => {
        console.error('error loading', err);
      },
    )
  }


  // Função para retornar um doctor
  getOne(id: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Doctor>(`${API_BASE}/doctor/` + id , { headers});
  }

  // Função para editar/atualisar a doctor
  edit(doctor) {
    const data = JSON.stringify(doctor);
    return this.http.put(`${API_BASE}/doctor/` + doctor.id , data);
  }

  // Função para deletar o doctor  pelo seu id
  delete(id) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Doctor>(`${API_BASE}/doctor/` + id, {headers});
  }

}
