<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'birthday', 'birthplace', 'gender', 'bloodType', 'first_name',
        'last_name', 'cpf', 'rg', 'address', 'observation'
    ];

    /**
     * The attributes that are  not mass assignable.
     *
     * @var array
     */
    protected $guarded = ['deleted',];


    /**
     * Get the USer record associated with the patient.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}

