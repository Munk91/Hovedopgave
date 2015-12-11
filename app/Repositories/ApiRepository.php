<?php

namespace App\Repositories;

use App\Model\Api;

class ApiRepository {

    /**
     * Saves an api in the database.
     *
     * @param string $index
     * @param string $type
     * @param string $url
     *
     * @return Response
     */
    public static function save($index, $type, $url) {
        $api = new Api;

        $api->index = $index;
        $api->type = $type;
        $api->url = $url;

        $api->save();
    }
}
