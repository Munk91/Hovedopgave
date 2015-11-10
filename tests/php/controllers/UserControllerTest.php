<?php

namespace tests\php\controllers;

use App\Http\Controllers\UserController;

class UserControllerTest extends \PHPUnit_Framework_TestCase {

    public function testCreateUser() {
        $name = 'navn';
        $username = 'mbk';
        $password = 'secret';
        $role = 'boss'; 

        $userControllerMock = $this->getMockBuilder('UserController')
            ->setMethods(array('createUser'))
            ->getMock();

        $userControllerMock->expects($this->once())
            ->method('createUser')
            ->with($name, $username, $password, $role)
            ->willReturn(true);

        $this->assertTrue($userControllerMock->createUser($name, $username, $password, $role));

        // gets some data
        // creates user object
        // calls userRepo->save(user object)
        // returns true
    }
}
