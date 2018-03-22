<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/***
 * PATIENTS ROUTE
 */
Route::resource('patient', 'PatientController');


/***
 * DOCTOR ROUTE
 */
Route::resource('doctor', 'DoctorController');


/***
 * AGENDA ROUTE
 */
Route::resource('agenda', 'AgendaController');



/***
 * USER ROUTE
 */
Route::resource('user', 'UserController');



