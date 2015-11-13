<?php

namespace App\Http\Controllers;

require_once('../vendor/autoload.php');

class LayoutController extends Controller {

    public function index() {
        $loader = new \Twig_Loader_Filesystem('../resources/views/');

        $twig = new \Twig_Environment($loader);

        return $twig->render('layout.php');
    }
}
