<?php

namespace App;

class Helpers {
    public static function printConsole($input) {
        file_put_contents('php://stderr', print_r($input, TRUE));
    }
}
