<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Repositories\ApiRepository;

class ApiController extends Controller {

    /**
     * Extracts api data from request and sends it to the repository
     *
     * @param Request $request
     *
     * @return Response
     */
    public function saveRemoteApi(Request $request) {
        return ApiRepository::save(
            $request->input('index'),
            $request->input('type'),
            $request->input('url')
        );
    }

    /**
     * Test a remote API, by calling it and then return the result
     *
     * @param string $apiUrl
     *
     * @return Response
     */
    public function testRemoteApi($apiUrl) {
        return $this->callRemoteApi($apiUrl);
    }

    /**
     * Return test data with date represented as a year
     *
     * @return Response
     */
    public function testYear() {
        $yearTestData = ['date' => '2011', 'user_searches' => 100];

        return response()->json($yearTestData);
    }

    /**
     * Return test data with date represented as a month
     *
     * @return Response
     */
    public function testMonth() {
        $monthTestData = ['date' => '2011-07', 'user_searches' => 15];

        return response()->json($monthTestData);
    }

    /**
     * Return test data with date represented as a day
     *
     * @return Response
     */
    public function testDay() {
        $dayTestData = ['date' => '2011-07-01', 'user_searches' => 2];

        return response()->json($dayTestData);
    }

    /**
     * Fetch data from remote api
     *
     * @param string $url
     *
     * @throws Exception
     *
     * @return Response
     */
    private function callRemoteApi($url) {
        $decodedUrl = urldecode($url);
        $client = new Client();

        try {
            $response = $client->get($decodedUrl, ['timeout' => 5, 'exceptions' => false]);
        } catch (Exception $e) {
            return response()->json([
                'error' => $decodeUrl
                . ' kunne ikke kontaktes. Prøv igen, eller tjek om det er den korrekte API URL der er angivet.'
            ]);
        }

        $responseHeader = $response->getHeader('content-type')[0];

        if ($response->getStatusCode() == 200) {
            if ($responseHeader == 'application/json') {
                return response()->json(json_decode($response->getBody()));
            } else {
                return response()->json([
                    'error' => 'Det er ikke muligt at hente data fra API URL: '
                    . $decodedUrl
                    . ' tjek eventuelt om formatet er korrekt (JSON)']);
            }
        } else {
            return response()->json(['error' => 'Noget gik galt, prøv igen.']);
        }

    }
}
