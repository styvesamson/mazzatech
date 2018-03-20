<?php

use Faker\Generator as Faker;


$factory->define(App\Agenda::class, function (Faker $faker) {
    return [
        'date_time' => $faker->dateTime,
        'doctor_id' => $faker->numberBetween($min = 1, $max = 25),
        'patient_id' =>$faker->numberBetween($min = 1, $max = 50),
        'room' =>  $faker->randomLetter . $faker->numberBetween($min = 1, $max = 50),
        'observation' => $faker->text(300),
    ];
});
