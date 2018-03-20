import {Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../service/doctor.service';
import {Doctor} from '../interface/doctor.interface';


@Component({
  selector: 'ngx-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {

  message;
  messageClass;
  messageTitle;
  messageTitleClass;
  processing = false;
  loading = true;
  form: FormGroup;
  currentUrl;
  edition = false;
  formTitle;
  visualization = false;


  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private doctorService: DoctorService,
  ) {
  }

  // Funçao para criar nova doctor
  createForm(doctor: Doctor) {
    this.form = this.formBuilder.group({
      id: [{value: doctor.id, disabled: doctor.edition}],
      name:  doctor.name,
      speciality:  doctor.speciality,
      office:  doctor.office,
    });
  }

  onSubmit() {
    this.processing = true;  //  notificar HTML que o formulário está em processamento,para que ele possa ser desativado
   this.form.disable(); // Disable the form
    const doctor: Doctor = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      speciality: this.form.get('speciality').value,
      office: this.form.get('office').value,
    };
    let response: any;
    if (this.edition) {
      this.doctorService.edit(doctor).subscribe(data => {
        // Resposta do API
        response = data;
        if (!response.success) {
          this.processing = false; // Reativar o btn enviar do formulario para outro envio
          this.form.enable(); // Re-ativar os campos do formulario
          this.setError(response.message);
        } else {
          this.setSuccess(response.message);
          // After 3 second timeout, navigate to the login page
          setTimeout(() => {
            this.goBack(); // Redirect to login view
          }, 2000);
        }
      });
    }else {
      delete doctor.id;

      this.doctorService.add(doctor).subscribe(data => {
        // Resposta do API
        response = data;
        if (!response.success) {
          this.processing = false; // Reativar o btn enviar do formulario para outro envio
          this.form.enable(); // Re-ativar os campos do formulario
          this.setError(response.message);
        } else {
          this.setSuccess(response.message);
          // After 3 second timeout, navigate to the list page
          setTimeout(() => {
            this.goBack(); // Redirect to login view
          }, 2000);
        }
      });
    }

  }


  // Function to go back to previous page
  goBack() {
    this.location.back();
  }

  // Setting succes message variables
  setSuccess(message) {
    this.messageClass = 'text-link';
    this.messageTitleClass = 'bg-link';
    this.message = message;
    this.messageTitle = 'Successo';
  }

  // Setting error message variables
  setError(message) {
    this.messageClass = 'text-danger';
    this.messageTitleClass = 'bg-danger';
    this.message = message;
    this.messageTitle = 'Algo deu errado';
  }


  // On Init
  ngOnInit() {

    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    if ( this.currentUrl.id ) {
      this.edition = true;
      this.formTitle = 'ALTERAR PACIENTE';
      // Function to GET current doctor with id in params
      this.doctorService.getOne(this.currentUrl.id).subscribe(data => {
        if (!data) {
          this.setError('Erro');
        } else {
          this.loading = false; // Allow loading of blog form
          this.edition = true;
          this.createForm(data); // Criar novo formulario no carregamento
          if (this.currentUrl.action ) {
            // Consulta simples   -DESATIVAR TODOS OS CAMPOS
           this.form.disable();
            this.edition = false;
            this.visualization = true;
            this.formTitle = 'CONSULTA DE PACIENTE';
          }
        }
      });
    } else {
      this.formTitle = 'INCLUIR PACIENTE';
      this.loading = false; // Allow loading of blog form
      const doctor: any = {
        name: '',
        speciality: '',
        office: '',
        edition: false,
      };
      this.createForm(doctor); // Criar novo formulario no carregamento
    }
  }
}
