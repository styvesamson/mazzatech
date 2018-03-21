
# Aplicativo de Atendimento Medico baseado no Laravel 5.6 &  Angular 5+, Bootstrap 4


## Sobre o  API:  Construido com Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.


## Sobre o Front-end 

- Angular 5+ & Typescript
- Bootstrap 4+ & SCSS
- Responsive layout
- High resolution
- Flexibly configurable themes with **hot-reload** (2 themes included)
- Authentication module with multiple providers


### Demo

<a target="_blank" href="http://35.192.74.184/">Live Demo</a>


### Instalação do api 

- Clonar o projeto : 
- ->  git clone https://github.com/styvesamson/mazzatech.git
- Entrar na pasta API  
- Em seguida, precisamos instalar as dependências do projeto usando composer
- -> composer install
- Configurar o arquivo .env
- rodar os migration e seeds
- -> php artisan migrate:refresh --seed  
- rodar artisan serve 
- -> php artisan serve


### Instalação do front-end
- Entrar na pasta web do projeto clonado  
- Em seguida, precisamos instalar as dependências do projeto usando npm
- -> npm install
- Rodar o aplicativo angular 
- -> npm start 