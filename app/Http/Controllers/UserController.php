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
}
