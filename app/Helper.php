<?php

namespace App;

class Helpers {
    public function printConsole($input) {
        fwrite(STDERR, print_r($input, TRUE));
    }
}
