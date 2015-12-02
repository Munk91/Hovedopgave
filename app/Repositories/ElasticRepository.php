<?php

namespace App\Repositories;

use Elasticsearch\ClientBuilder;
use Illuminate\Http\Request;

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

        $client->index($params); 
    }

    /*
     * Gets an index from Elasticsearch
     *
     * @params string $index
     * @params string $type
     * @return json 
    */
    public static function search($index, $type) {
        $client = ClientBuilder::create()->build();
        $params = [
            'index' => $index,
            'type' => $type,
            'body' => [
                'query' => [
                    'match_all' => []
                ]
            ]
        ];

        return $client->search($params);
    }
}
