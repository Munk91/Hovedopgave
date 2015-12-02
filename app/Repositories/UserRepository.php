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

    /**
     * Get all users in database or return error.
     *
     * @return string
     */
    public static function getUsers() {
        return User::all();
    }

    /**
     * Finds a user and soft deletes it
     *
     * @param int $userId
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     *
     * @return null
     */
    public static function deleteUser($userId) {
        $user = User::findOrFail($userId);

        if($user) {
            $user->delete();
        } else {
            throw \Illuminate\Database\Eloquent\ModelNotFoundException;
        }
    }
}
