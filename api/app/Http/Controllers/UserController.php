<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return User::where('deleted', 0)
            ->get();

    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return
     *     */
    public function show($id)
    {
        return User::find($id);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return array $response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->deleted = true;
        if ($user->save()) {
            $response =  ['success'=>true,
                'message' => 'Usuário  deletado  por êxito'];
        }
        return $response;
    }
}
