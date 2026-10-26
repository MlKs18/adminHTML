<?php

namespace App\Http\Services;
class Employee {
    public $name;
    public $age;
    public $salary;

    public function show() {
        return $this->name.'('.$this->salary.')';

    }
}
