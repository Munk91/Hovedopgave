<?php

namespace App\Repositories;

use App\Model\User;

class UserRepository {
    
    /**
     * Saves a user in the database.
     *
     * @param User $user
     *
     * @return Response 
     */
    public static function save($name, $username, $password, $role) {
        $user = new User;

        $user->name = $name;
        $user->username = $username;
        $user->password = $password;
        $user->role = $role;

        $user->save();
    }
}
