<?php

namespace App\Repositories;

use Elasticsearch\ClientBuilder;
use App\Helpers;

class ElasticRepository {
    /*
     * index a json scheme in Elasticsearch
     * @params json $jsonSchema
     * @return json
    */
    public static function index($jsonSchema) {
        $client = ClientBuilder::create()->build();
        $params = [
            'index' => $jsonSchema['index'],
            'type' => $jsonSchema['type'], 
            'body' => $jsonSchema['body']
        ];
        error_log(print_r($params, true));
        return $client->index($params); 
    }

    /*
     * Gets an index from Elasticsearch
     *
     * @params string $index
     * @params string $type
     * @return json
    */
    public static function get($index, $type) {
        $client = ClientBuilder::create()->build();
        $params = [
            'index' => $index,
            'type' => $type,
        ];

        return $client->get($params);
    }
}
