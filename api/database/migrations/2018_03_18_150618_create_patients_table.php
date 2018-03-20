<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('birthday')->nullable()->nullable();
            $table->string('birthplace')->nullable();
            $table->boolean('gender')->default('0')->nullable(); # 0:male 1:female
            $table->string('bloodType')->nullable();
            $table->string('first_name', 100)->nullable();
            $table->string('last_name')->nullable();
            $table->string('cpf')->nullable();
            $table->string('rg')->nullable();
            $table->string('tel')->nullable();
            $table->string('address')->nullable();
            $table->string('observation', 500)->nullable();
            $table->boolean('deleted')->default('0');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
