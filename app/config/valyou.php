<?php
/**
 * Created by PhpStorm.
 * User: MD ARIFUL HAQUE
 * Date: 7/10/2020
 * Time: 1:00 AM
 */


return [
    'mode'  => env('VAL_YOU_API_MODE','live'),
    'sandbox' => [
        'username'              => env( 'VAL_YOU_API_USERNAME', 'MCAPI'),
        'password'              => env( 'VAL_YOU_API_PASSWORD', 'MCONLINEAPI'),
        'agent_code'            => env('VAL_YOU_AGENT_CODE', 'MCSGP'),
        'agent_session_id'      => env('VAL_YOU_AGENT_SESSION_ID', '123454'),
        'app_host'              => env('VAL_YOU_API_HOST', 'www.prabhucashsystem.com'),
    ],
    'live' => [
        'username'              => env( 'VAL_YOU_API_USERNAME', 'MCAPI'),
        'password'              => env( 'VAL_YOU_API_PASSWORD', 'EDZP*p8#'),
        'agent_code'            => env('VAL_YOU_AGENT_CODE', 'MCSGP'),
        'agent_session_id'      => env('VAL_YOU_AGENT_SESSION_ID', '123454'),
        'app_host'              => env('VAL_YOU_API_HOST', 'www.prabhucashsystem.com'),
    ],
];
