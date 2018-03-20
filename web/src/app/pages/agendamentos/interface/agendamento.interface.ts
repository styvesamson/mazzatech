import {Patient} from '../../patients/interface/patient.interface';
import {Doctor} from '../../doctors/interface/doctor.interface';


export interface Agendamento {
  id?: any;
  birthday: string;
  birthplace: string;
  gender: string;
  bloodType: string;
  user_id?: string;
  first_name: string;
  last_name: string;
  cpf: string;
  rg: string;
  tel: string;
  address: string;
  observation: string;
  edition?: boolean;

}
