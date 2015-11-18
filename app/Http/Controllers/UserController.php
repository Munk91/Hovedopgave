<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller {
    
    /**
     * Extracts user data from request and sends it to the repository 
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createUser(Request $request) {
        
        return UserRepository::save(
            $request->input('name'),
            $request->input('username'),
            $request->input('password'),
            $request->input('role') 
        );
    }

    /**
     * Get all users
     * @return json
     */
    public function getUsers() {
        return response()->json(UserRepository::getUsers());
    }

    /**
     * Extracts a user id from the request and send deletion handling to repository
     *
     * @param Request $request
     *
     * @return Response
     */
    public function deleteUser(Request $request) {
        return UserRepository::deleteUser(
            $request->input('id') 
        ); 
    }
}
