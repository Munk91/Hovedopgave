<?php

namespace App;

class Helpers {
    public static function printConsole($input) {
        fwrite(STDERR, print_r($input, TRUE));
    }
}
