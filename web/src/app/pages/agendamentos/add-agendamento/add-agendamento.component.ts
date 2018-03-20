import {Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AgendamentoService} from '../service/agendamento.service';
import {Agendamento} from '../interface/agendamento.interface';


@Component({
  selector: 'ngx-add-agendamento',
  templateUrl: './add-agendamento.component.html',
  styleUrls: ['./add-agendamento.component.scss'],
})
export class AddAgendamentoComponent implements OnInit {
  msk_cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  msk_dv = [/\d/];
  msk_agencia = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  msk_birthday = [/[1-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];

  msk_telefone = function(rawValue) {
    rawValue = rawValue.replace('_', '').replace('-', '');
    if (rawValue.length <= 13) {
      return  ['(', /[1-9]/, /[1-9]/ , ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, '-',  /\d/, /\d/, /\d/,  /\d/];
    } else {
      return   ['(', /[1-9]/, /[1-9]/ , ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-',  /\d/, /\d/, /\d/,  /\d/];
    }
  };
  message;
  messageClass;
  messageTitle;
  messageTitleClass;
  processing = false;
  loading = true;
  form: FormGroup;
  cpfMessage;
  currentUrl;
  edition = false;
  formTitle;
  visualization = false;


  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private agendamentoService: AgendamentoService,
  ) {
  }


  // Funçao para criar nova agendamento
  createForm(agendamento: Agendamento) {
    this.form = this.formBuilder.group({
      id: [{value: agendamento.id, disabled: agendamento.edition}],
      birthday:  agendamento.birthday,
      birthplace:  agendamento.birthplace,
      gender:  agendamento.gender,
      bloodType:  agendamento.bloodType,
        first_name: agendamento.first_name,
        last_name: agendamento.last_name,
        cpf: {value: agendamento.cpf, disabled: agendamento.edition},
        rg:  agendamento.rg,
        tel: agendamento.tel,
        address: agendamento.address,
      observation: agendamento.observation,
    });
  }

  onSubmit() {
    this.processing = true;  //  notificar HTML que o formulário está em processamento,para que ele possa ser desativado
   this.form.disable(); // Disable the form
    const agendamento: Agendamento = {
      id: this.form.get('id').value,
      birthday: this.form.get('birthday').value,
      birthplace: this.form.get('birthplace').value,
      gender: this.form.get('gender').value,
      bloodType: this.form.get('bloodType').value,
        first_name :  this.form.get('first_name').value,
        last_name :  this.form.get('last_name').value,
        cpf :  this.form.get('cpf').value,
        rg :  this.form.get('rg').value,
        tel :  this.form.get('tel').value,
        address :  this.form.get('address').value,
      observation :  this.form.get('observation').value,
    };
    let response: any;
    if (this.edition) {
      this.agendamentoService.edit(agendamento).subscribe(data => {
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
      delete agendamento.id;

      this.agendamentoService.add(agendamento).subscribe(data => {
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

  // Function to check if CPF  is available
  checkCPF() {
    const cpf = this.form.get('cpf').value;
    if (cpf) {
      let response: any;
      this.agendamentoService.checkCPF(cpf).subscribe(data => {
        // Check if success true or success false was returned from API
        response = data;
        if (!response.success) {
          this.cpfMessage = response.message; // Return error message
        } else {
          this.cpfMessage = false; // Return success message
        }
      });
    }
  }



  // On Init
  ngOnInit() {

    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    if ( this.currentUrl.id ) {
      this.edition = true;
      this.formTitle = 'ALTERAR PACIENTE';
      // Function to GET current agendamento with id in params
      this.agendamentoService.getOne(this.currentUrl.id).subscribe(data => {
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
      const agendamento: any = {
        birthday: '',
        birthplace: '',
        gender: '',
        bloodType: '',
        user_id:  '',
          first_name: '',
          last_name: '',
          cpf: '',
          rg: '',
          tel: '',
          address: '',
          observation: '',
        edition: false,
      };
      this.createForm(agendamento); // Criar novo formulario no carregamento
    }
  }
}
