<?php

namespace App\Http\Controllers;

use App\Repositories\ElasticRepository;
use Illuminate\Http\Request;
use App\Helpers;

class ElasticController extends Controller {

    /*
     * Index a json schema in Elasticsearch
     *
     * @param Request $request
     * @return json
     */
    public function index(Request $request) {
        Helpers::printConsole($request);
        return ElasticRepository::index($request->input('jsonSchema'));
    }

    /*
     * Gets a json schema from Elasticsearch
     *
     * @param string $index
     * @param string $type
     * 
     * @return json
     */
    public function get($index, $type) {
        return ElasticRepository::get($index, $type);
    }
}
