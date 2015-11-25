<?php

namespace App\Http\Controllers;

use App\Repository\ElasticRepository;

class ElasticController extends Controller {

    public function index($jsonSchema) {
        return ElasticRepository::index($jsonSchema);
    }
    public function get($index, $type) {
        return ElasticRepository::get($index, $type);
    }
}
