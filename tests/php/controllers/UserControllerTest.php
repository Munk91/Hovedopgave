<?php

namespace tests\php\controllers;

use App\Http\Controllers\UserController;
use App\Models\User;

class UserControllerTest extends \PHPUnit_Framework_TestCase {

    public function testCreateUser() {
        $userMock = $this->getMockBuilder('User')
            ->getMock();

        $userControllerMock = $this->getMockBuilder('UserController')
            ->setMethods(array('createUser'))
            ->getMock();

        $userControllerMock->expects($this->once())
            ->method('createUser')
            ->with($userMock)
            ->willReturn(true);

        $this->assertTrue($userControllerMock->createUser($userMock));
    }

    public function testGetUsers() {
        $userMock = $this->getMockBuilder('User')
            ->getMock();
        file_put_contents('php://stderr', print_r($userMock, TRUE));
    }
}
