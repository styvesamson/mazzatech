import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AgendamentoService} from '../service/agendamento.service';
import {LocalDataSource } from 'ng2-smart-table';
import {Agendamento} from '../interface/agendamento.interface';


@Component({
  selector: 'ngx-list-agendamento',
  templateUrl: './list-agendamentos.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
      overflow-x: scroll;
    }
  `],
})
export class ListAgendamentosComponent implements OnInit {

  viewDate: Date = new Date();
  events = [];
  agendamento;
  username;
  message;
  messageClass;
  processing = false;

  settings = {
    noDataMessage: 'Carregando dados...',
    actions: {
      columnTitle : 'Ação',
    },
    mode: 'external', // inline|external|click-to-edit
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '5%',
      },
      fullname: {
        title: 'Nome completo',
        type: 'string',
        width: '25%',
      },
      age: {
        title: 'Idade',
        type: 'string',
      },
      birthplace: {
        title: 'Cidade Nasc',
        type: 'string',
      },
      bloodType: {
        title: 'Grupo sanguíneo',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private service: AgendamentoService) {
  }
  // Function to get all agendamento from database
  getAll(): void {
    this.service.getAll().subscribe(data => {
      this.source.load(data);
    });
  }

 onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza de que deseja excluir?')) {
      const id = event.data.id;
      let response: any;
      this.service.delete(id).subscribe(data => {
        response = data;
        // Resposta do API
        if (!response.success) {
          this.messageClass = 'alert alert-danger'; // Set error bootstrap class
          this.message = response.message; // Set error message
          this.processing = false; // Unlock form fields
        } else {
          this.messageClass = 'alert alert-success'; // Set success bootstrap class
          this.message = response.message; // Set success message
          this.getAll(); // Carregar todas as agendamento
          // After two seconds, navigate back to blog page
          setTimeout(() => {
          }, 2000);
        }
      });
    } else {
      event.confirm.reject();
    }
  }

  onViewConfirm(event): void {
    if (window.confirm('Quer visualizar detalhes deste registro  ?')) {
      const id = event.data.id;
      this.router.navigate(['/pages/agendamentos/add-agendamento/', id, {action: 'view'}]);
    } else {
      event.confirm.reject();
    }
  }
  onSelect(event) {
    this.onViewConfirm(event);
  }

  onCreate() {
    this.router.navigate(['/pages/agendamentos/add-agendamento']); // Redirect to add view
  }
  onDelete(event) {
    this.onDeleteConfirm(event);
  }
  onEdit(event) {
    const id = event.data.id;
    this.router.navigate(['/pages/agendamentos/add-agendamento/', id]); // Redirect to edit view
  }
  ngOnInit() {
   this.getAll(); // Carregar todos os pacientes
  }
}
