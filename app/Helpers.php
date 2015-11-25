<?php

namespace App;

class Helpers {
    public static function printConsole($input) {
        file_put_contents('app_log.txt', $input);
    }
}
