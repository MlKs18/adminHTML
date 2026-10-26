<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\Employee;

class TestController extends Controller
{
    public function index () {

        $employee= new Employee;
        $employee->name='john';
        $employee->age=25;
        $employee->salary=2345;
        echo $employee->show();
        dd($employee);
        return 321;

    }
}


