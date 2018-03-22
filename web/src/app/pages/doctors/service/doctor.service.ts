import {Injectable} from '@angular/core';
import {Doctor} from '../interface/doctor.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class DoctorService  {

  constructor(protected http: HttpClient) {
  }

  doctors: Array<Doctor> = [];



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
    return this.http.put(`${API_BASE}/doctor/` + doctor.id , doctor);
  }

  // Função para deletar o doctor  pelo seu id
  delete(id) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Doctor>(`${API_BASE}/doctor/` + id, {headers});
  }

}
