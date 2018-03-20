import {Injectable} from '@angular/core';
import {Patient} from '../interface/patient.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class PatientService  {

  constructor(protected http: HttpClient) {
  }

  patients: Array<Patient> = [];

  /**
   * CHECK CPF
   * @return {Array}
   */
  // Function to check if CPF is taken
  checkCPF(cpf) {
    return this.http.post(`${API_BASE}/identity/checkcpf`, cpf);
  }


  add(patient: Patient): Observable<Patient> {
  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  return this.http.post<Patient>(`${API_BASE}/patient`, patient, {headers});
  }


  getAll(): Observable<Array<Patient>> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Array<Patient>>(`${API_BASE}/patient`, { headers});
  }

  load(): void {
    this.getAll().subscribe(
      result => {
        this.patients = result;
      },
      err => {
        console.error('error loading', err);
      },
    )
  }


  // Função para retornar um patient
  getOne(id: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Patient>(`${API_BASE}/patient/` + id , { headers});
  }

  // Função para editar/atualisar a patient
  edit(patient) {
    const data = JSON.stringify(patient);
    return this.http.put(`${API_BASE}/patient/` + patient.id , data);
  }

  // Função para deletar o patient  pelo seu id
  delete(id) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Patient>(`${API_BASE}/patient/` + id, {headers});
  }

}
