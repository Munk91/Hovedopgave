<?php

namespace App\Repository;

use Elasticsearch\ClientBuilder;

class ElasticRepository {
    
    private $client;

    function __construct() {
        $client = ClientBuilder::create()->build();
    }

    public function index($jsonSchema) {
        $params = [
            'index' => $jsonSchema['index'],
            'type' => $jsonSchema['type'], 
            'body' => [$jsonSchema['body']]
        ];
        return $client->index($params); 
    }

    public function get($index, $type) {
        $params = [
            'index' => $index,
            'type' => $type,
        ];

        return $client->get($params);
    }
}
