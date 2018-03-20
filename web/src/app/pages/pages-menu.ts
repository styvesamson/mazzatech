import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Pacientes',
    icon: 'nb-tables',
    children: [
      {
        title: 'Listar Pacientes',
        link: '/pages/patients/list-patients',
      },
    ],
  },
  {
    title: 'Médicos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Listar Médicos',
        link: '/pages/doctors/list-doctors',
      },
    ],
  },
  {
    title: 'Agendamentos.',
    icon: 'nb-title',
    children: [
      {
        title: 'Agendamentos do Dia',
        link: '/pages/agendamentos./list-agendamentos.',
      },
      {
        title: 'Consultas faltas',
        link: '/pages/agendamentos./list-agendamentos-faltas',
      },
    ],
  },
  {
    title: 'ADMINISTRATIVO',
    group: true,
  },
  {
    title: 'Usuários,',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Listar Usuários',
        link: '/pages/users/list-users',
      }, {
        title: 'Mudar senhas',
        link: '/pages/users/list-users',
      },
      {
        title: 'Liberar acesso',
        link: '/pages/users/list-users',
      },
    ],
  },

  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
