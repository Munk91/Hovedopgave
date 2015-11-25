<?php

namespace App\Repository;

use Elasticsearch\ClientBuilder;

class ElasticRepository {
    
    private $client;

    function __construct() {
        $client = ClientBuilder::create()->build();
    }

    /*
     * index a json scheme in Elasticsearch
     * @params json $jsonSchema
     * @return json
    */
    public static function index($jsonSchema) {
        $params = [
            'index' => $jsonSchema['index'],
            'type' => $jsonSchema['type'], 
            'body' => [$jsonSchema['body']]
        ];
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
        $params = [
            'index' => $index,
            'type' => $type,
        ];

        return $client->get($params);
    }
}
