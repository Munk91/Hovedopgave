<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller {
    
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * Constructor
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    /**
     * Extracts user data from request and sends it to the repository 
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createUser(Request $request) {
        
        return $this->userRepository->save(
            $request->input('name'),
            $request->input('username'),
            $request->input('password'),
            $request->input('role') 
        );
    }
}
