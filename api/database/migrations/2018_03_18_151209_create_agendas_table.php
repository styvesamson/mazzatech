<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('doctor_id')->unsigned();
            $table->foreign('doctor_id')->references('id')->on('doctors');
            $table->integer('patient_id')->unsigned();
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->timestamp('date_time');
            $table->string('room')->nullable();
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
        Schema::dropIfExists('agendas');
    }
}
