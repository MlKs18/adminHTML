<?php

namespace App\Http\Services;
class Employee {
    private $name;
    //public $age;
    public $salary;

   public function __construct($name, $salary) {
			$this->name=$name;
            $this->salary=$salary;

	}
    public function getName(){
        return $this->name;
    }

    public function setName($name) {
        $this->name=$name;
        return $this;
    }
}
