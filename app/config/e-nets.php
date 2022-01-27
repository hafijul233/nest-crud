<?php
/**
 * Created by PhpStorm.
 * User: MD ARIFUL HAQUE
 * Date: 7/10/2020
 * Time: 1:00 AM
 */


return [
    'mode'  => env('E_NETS_API_MODE','TEST'),
    'TEST' => [
        'service_id'    => env('E_NETS_SERVICE_ID', 'UMID_877772003'),
        'key_id'        => env('E_NETS_KEY_ID', '154eb31c-0f72-45bb-9249-84a1036fd1ca'),
        'secret_key'    => env('E_NETS_SECRET_KEY', '38a4b473-0295-439d-92e1-ad26a8c60279'),
        'b2s_url'       => env('E_NETS_B2S_URL', 'https://sit2.enets.sg/MerchantApp/rest/s2sTxnEnd'),
        's2s_url'       => env('E_NETS_S2S_URL', 'https://sit2.enets.sg/MerchantApp/rest/s2sTxnEnd'),
        'ipAddress'     => env('E_NETS_IP_ADDRESS', '172.18.20.161'),
    ],
    'LIVE' => [
        'service_id'    => env('E_NETS_SERVICE_ID', 'UMID_847450000'),
        'key_id'        => env('E_NETS_KEY_ID', 'bc522adb-f1fa-429f-a641-02625d8f5d19'),
        'secret_key'    => env('E_NETS_SECRET_KEY', 'b953aeb7-7ef2-46cc-b2b0-fad26d621785'),
        'b2s_url'       => env('E_NETS_B2S_URL', 'https://sit2.enets.sg/MerchantApp/rest/s2sTxnEnd'),
        's2s_url'       => env('E_NETS_S2S_URL', 'https://sit2.enets.sg/MerchantApp/rest/s2sTxnEnd'),
        'ipAddress'     => env('E_NETS_IP_ADDRESS', '172.18.20.161'),
    ],
];
