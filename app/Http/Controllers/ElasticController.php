<?php

namespace App\Http\Controllers;

use App\Repositories\ElasticRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ElasticController extends Controller {

    /*
     * Index a json schema in Elasticsearch
     *
     * @param Request $request
     *
     * @return json
     */
    public function index(Request $request) {
        return ElasticRepository::index($request->all());
    }

    /*
     * Gets a json schema from Elasticsearch
     *
     * @param string $index
     * @param string $type
     * 
     * @return json
     */
    public function search($index, $type) {
        return response()->json(ElasticRepository::search($index, $type));
    }
}
