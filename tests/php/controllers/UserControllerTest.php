<?php

namespace tests\php\controllers;

use App\Http\Controllers\User;

class UserControllerTest extends \PHPUnit_Framework_TestCase {

    public function testCreateUser() {
        $

        $userMock->expects($this->once())
                ->method('createUser')
                ->with($this->equalTo('newUser'));
    }
}
