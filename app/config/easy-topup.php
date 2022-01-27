<?php
/**
 * Easy Top Up Api Configuration
 */
return [
    'mode' => 'sandbox', //sandbox , live
    'live' => [
        'password_url' => 'http://www.topupcard.sg/api20/topup.asmx/GetEncryptPassword',
        'topup_request_url' => 'http://www.topupcard.sg/api20/topup.asmx/SendEasyTopup',
        'check_status_url' => 'http://www.topupcard.sg/api20/topup.asmx/CheckStatus',
        'check_balance_url' => 'http://www.topupcard.sg/api20/topup.asmx/GetBalance',
        'username' => 'MYCASHONLINE',
        'password' => 'yenyen33',
        'circle_code' => 'SG',
        'payment_method' => '9',
        'request_from' => 'Website',
    ],

    'sandbox' => [
        'password_url' => 'http://www.topupcard.sg/api20/topup.asmx/GetEncryptPassword',
        'topup_request_url' => 'http://www.topupcard.sg/api20/topup.asmx/SendEasyTopup',
        'check_status_url' => 'http://www.topupcard.sg/api20/topup.asmx/CheckStatus',
        'check_balance_url' => 'http://www.topupcard.sg/api20/topup.asmx/GetBalance',
        'username' => 'MYCASHONLINE',
        'password' => 'yenyen33',
        'circle_code' => 'SG',
        'payment_method' => '9',
        'request_from' => 'Website'
    ],
];
