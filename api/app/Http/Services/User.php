<?php

namespace App\Http\Services;
class User {
    private $name;
    protected $email="I LOVE YOU";
    public $phone='3223232';
    public function showText () {
        return 'Hallo from user';
    }

}
