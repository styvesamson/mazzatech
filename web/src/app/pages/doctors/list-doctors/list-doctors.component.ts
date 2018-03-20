import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DoctorService} from '../service/doctor.service';
import {LocalDataSource } from 'ng2-smart-table';
import {Doctor} from '../interface/doctor.interface';


@Component({
  selector: 'ngx-list-doctor',
  templateUrl: './list-doctors.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
      overflow-x: scroll;
    }
  `],
})
export class ListDoctorsComponent implements OnInit {

  doctor;
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
      name: {
        title: 'Nome completo',
        type: 'string',
        width: '25%',
      },
      speciality: {
        title: 'Especialização',
        type: 'string',
      },
      office: {
        title: 'Escritorio',
        type: 'string',
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private service: DoctorService) {
  }
  // Function to get all doctor from database
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
          this.getAll(); // Carregar todas as doctor
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
      this.router.navigate(['/pages/doctors/add-doctor/', id, {action: 'view'}]);
    } else {
      event.confirm.reject();
    }
  }
  onSelect(event) {
    this.onViewConfirm(event);
  }

  onCreate() {
    this.router.navigate(['/pages/doctors/add-doctor']); // Redirect to add view
  }
  onDelete(event) {
    this.onDeleteConfirm(event);
  }
  onEdit(event) {
    const id = event.data.id;
    this.router.navigate(['/pages/doctors/add-doctor/', id]); // Redirect to edit view
  }
  ngOnInit() {
   this.getAll(); // Carregar todos os pacientes
  }
}
