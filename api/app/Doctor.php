<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'speciality', 'office',
    ];

    /**
     * The attributes that are  not mass assignable.
     *
     * @var array
     */
    protected $guarded = ['deleted',];


}
