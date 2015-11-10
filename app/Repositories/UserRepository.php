<?php

namespace App\Repositories;

class UserRepository {
    
    /**
     * Saves a user in the database.
     *
     * @param User $user
     *
     * @return Response 
     */
    public function save($user) {
        return $user->save();
    }
}
