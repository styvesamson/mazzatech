export interface User {
  id?: number;
  name: string;
  email: string;
}


export interface Patient {
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
