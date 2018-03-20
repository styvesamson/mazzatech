<?php

use Faker\Generator as Faker;

$factory->define(App\Patient::class, function (Faker $faker) {
    return [
        'user_id' =>  $faker->numberBetween($min = 1, $max = 50),
        'birthday' => $faker->dateTimeBetween($startDate = '-25 years', $endDate = 'now'),
        'birthplace' =>$faker->city,
        'gender' =>$faker->boolean,
        'bloodType' => 'B+',
        'first_name' =>$faker->firstName(),
        'last_name' =>$faker->lastName,
        'cpf' => '689.485.769-09',
        'rg' => '689485DF',
        'tel' => $faker->phoneNumber,
        'address' => $faker->address,
        'observation' => $faker->text(300),
    ];
});

