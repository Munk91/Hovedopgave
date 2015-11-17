<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Hash;

final class User extends Model {

    public function setPasswordAttribute($value) {
        $this->attributes['password'] = Hash::make($value);
    }
    
}
