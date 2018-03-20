<?php

use Faker\Generator as Faker;

$factory->define(App\Doctor::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween($min = 1, $max = 50),
        'name' =>$faker->firstName() . $faker->lastName() ,
        'speciality' =>$faker->jobTitle,
        'office' =>$faker->company,
    ];
});
