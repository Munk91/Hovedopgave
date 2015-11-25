<?php

namespace Tests\Php\Controllers;

use App\Http\Controllers\ElasticController;
use App\Helpers;

class ElasticControllerTest extends \PHPUnit_Framework_TestCase
{
    private function setUpController() {
       return $elasticControllerMock = $this->getMockBuilder('ElasticController')
            ->setMethods(array('get', 'index'))
            ->getMock();
    }

    public function testGet() {
       $returnArray = [];
       $controllerMock = $this->setUpController(); 
       $controllerMock->expects($this->any())
           ->method('get')
           ->with('index', 'type')
           ->will($this->returnValue($returnArray));
       $this->assertEquals(0, count($returnArray));
    }
}
