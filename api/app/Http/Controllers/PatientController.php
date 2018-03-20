<?php

namespace App\Http\Controllers;

use App\Patient;
use Illuminate\Http\Request;
use App\Http\Requests;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $patients =  Patient::where('deleted', 0)
            ->with('user')
            ->get()->toArray();

        foreach ($patients as $index => $patient){
            $patients[$index]['fullname'] = $patient['first_name'] . ' '. $patient['last_name'];
            $patients[$index]['age'] = floor((time() - strtotime($patient['birthday'])) / 31556926);
        }

        return $patients;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array $response
     */
    public function store(Request $request)
    {


        $validatedData = $request->validate([
            'bloodType'       => 'max:2',
            'observacao' => 'max:500',

        ]);

        $input = $request->all();

        $patient = new Patient($input);
        if ($patient->save()) {
            $response =  ['success'=>true,
                'message' => ' Paciente criado por êxito'];
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
        return Patient::with('user')->find($id);
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

        $patient = Patient::find($id);
        $patient->user_id = $request->input('user_id');
        $patient->birthday = $request->input('birthday');
        $patient->birthplace = $request->input('birthplace');
        $patient->gender = $request->input('gender');
        $patient->bloodType = $request->input('bloodType');
        $patient->first_name = $request->input('first_name');
        $patient->last_name = $request->input('last_name');
        $patient->cpf = $request->input('cpf');
        $patient->rg = $request->input('rg');
        $patient->tel = $request->input('tel');
        $patient->address = $request->input('address');
        $patient->observation = $request->input('observation');


        if ($patient->save()) {
            $response =  ['success'=>true,
                'message' => 'Paciente atualizada por êxito'];
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
        $patient = Patient::find($id);
        $patient->deleted = true;
        if ($patient->save()) {
            $response =  ['success'=>true,
                'message' => 'Paciente  deletado  por êxito'];
        }
        return $response;
    }
}
