<?php

namespace App\Http\Services;
use App\Http\Services\Factory;

class Car extends Factory {
    use Masagge;
    public $model;
    private $color = "yellow";
    public function __construct() {
        $this->widht = 'banan';
    }

}


