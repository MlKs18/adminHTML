<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\Employee;

class TestController extends Controller
{
    public function index () {

        $employee= new Employee('Sasa', "1000");
        dd($employee->setName("Masha")->getName());
        return 321;

    }
}


