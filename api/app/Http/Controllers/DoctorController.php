<?php

namespace App\Http\Controllers;

use App\Doctor;
use Illuminate\Http\Request;
use App\Http\Requests;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return  Doctor::where('deleted', 0)->get();

    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array $response
     */
    public function store(Request $request)
    {



        $input = $request->all();

        $doctor = new Doctor($input);
        if ($doctor->save()) {
            $response =  ['success'=>true,
                'message' => ' Médico criado por êxito'];
        }

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return
     *     */
    public function show($id)
    {
        return Doctor::with('user')->find($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return array $response
     */
    public function update(Request $request, $id)
    {

        $doctor = Doctor::find($id);
        $doctor->user_id = $request->input('user_id');
        $doctor->name = $request->input('name');
        $doctor->speciality = $request->input('speciality');
        $doctor->office = $request->input('office');



        if ($doctor->save()) {
            $response =  ['success'=>true,
                'message' => 'Médico atualizada por êxito'];
        }
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return array $response
     */
    public function destroy($id)
    {
        $doctor = Doctor::find($id);
        $doctor->deleted = true;
        if ($doctor->save()) {
            $response =  ['success'=>true,
                'message' => 'Médico  deletado  por êxito'];
        }
        return $response;
    }
}
