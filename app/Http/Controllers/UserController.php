<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Model\User;

class UserController extends Controller {
    
    private $userRepository = UserRepository;
    /**
     * Creates a user
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createUser(Request $request) {
        $user = new User(
            $name = $request->name,
            $username = $request->username,
            $password = $request->password,
            $role = $request->role
        );

        return $userRepository->save($user);
    }
}
