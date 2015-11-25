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
            ->will($this->returnValue(true));

        $this->assertTrue($userControllerMock->createUser($userMock));
    }

    public function testGetUsers() {
        $userMock = $this->getMockBuilder('User')
            ->getMock();
    }

    public function testDeleteUser() {
        $userMock = $this->getMockBuilder('User')
           ->getMock(); 

        $userMock->id = 1;

        $userControllerMock = $this->getMockBuilder('UserController')
            ->setMethods(array('deleteUser'))
            ->getMock();

        $userControllerMock->expects($this->once())
            ->method('deleteUser')
            ->with($userMock->id)
            ->will($this->returnValue(null));

        $userControllerMock->expects($this->once())
            ->method('deleteUser')
            ->with($userMock->id)
            ->will($this->returnValue($userMock->id = 1, $userMock->deleted_at = "2001-11-21 13:37:11"));

        $this->assertEquals(null, $userControllerMock->deleteUser(1));
        $this->assertEquals("2001-11-21 13:37:11", $userMock->deleted_at);
    }
}
