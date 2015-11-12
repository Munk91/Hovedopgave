<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$app->get('/', 'FrontpageController@index');

$app->group(['prefix' => 'users', 'namespace' => 'App\Http\Controllers'], function ($app) {
    $app->post('create', ['uses' => 'UserController@createUser', 'as' => 'create_user']);
    $app->get('get', ['uses' => 'UserController@getUsers', 'as' => 'get_users']);
});
