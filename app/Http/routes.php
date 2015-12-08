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
$app->get('/', 'LayoutController@index');

$app->group(['prefix' => 'api', 'namespace' => 'App\Http\Controllers'], function ($app) {
    $app->post('create', 'UserController@createUser');
    $app->get('showAllUsers', 'UserController@getUsers');
    $app->delete('deleteUser', 'UserController@deleteUser');
    $app->post('elasticIndex', 'ElasticController@index');
    $app->get('elasticGet/{index}/{type}', 'ElasticController@search');
    $app->get('testRemoteApi/{apiUrl}', 'ApiController@testRemoteApi');
    $app->post('saveRemoteApi', 'ApiController@saveRemoteApi');

    // API's for test purposes (returns json results)
    $app->get('test/year', 'ApiController@testYear');
    $app->get('test/month', 'ApiController@testMonth');
    $app->get('test/day', 'ApiController@testDay');
});

