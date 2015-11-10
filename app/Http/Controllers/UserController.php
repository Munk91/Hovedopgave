<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Model\User;

class UserController extends Controller {
    
    private $userRepository = UserRepository;
    /**
     * Creates the user
     *
     * @return bool
     */
    public function createUser($user) {
        $u = new User();
        $u->name = $user->name;
        $u->username = $user->username;
        $u->password = $user->password;
        $u->role = $user->role;

        return $userRepository->save($u);
    }
}
