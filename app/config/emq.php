<?php

/**
 * EMQ Api Configuration
 */
return [
    'mode' => 'sandbox', //sandbox , live
    'live' => [
        'endpoint' => 'https://sandbox-partner.emq.com/v1',
        'username' => 'mycash',
        'password' => 'Q2jd6d7fLB7H9Fj7',
        'default' => [
            'source_country' => 'SGP',
        ],
    ],

    'sandbox' => [
        'endpoint' => 'https://sandbox-partner.emq.com/v1',
        'username' => 'mycash',
        'password' => 'Q2jd6d7fLB7H9Fj7',
        'default' => [
            'source_country' => 'SGP',
        ],
    ],

    /**
     * eWallet enabled countries
     *
     * @var string[]
     */
    'ewallet_allow_country' => [
        "BEN", "CMR", "COG", "GHA", "MDG", "MOZ",
        "MWI", "NER", "NGA", "RWA", "SEN", "TGO",
        "UGA", "ZMB", "CHN", "NPL", "PHL",
    ],

    /**
     * spea enabled countries
     *
     * @var string[]
     */
    'spea_allow_country' => [],

    /**
     * EMQ enabled partners
     *
     * @var string[]
     */
    'partners' => [
        "BEN" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "CMR" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "COG" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "GHA" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "MDG" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "MOZ" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "MWI" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "NER" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "NGA" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "RWA" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "SEN" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "TGO" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "UGA" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "ZMB" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "CHN" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => ["emq_partner_alipay"]
        ],
        "NPL" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => ["emq_partner_esewa"]
        ],
        "PHL" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => ["emq_partner_gcash", "emq_partner_paymaya", "emq_partner_coinsph", "emq_partner_grabpay"]
        ],
        "GBR" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
        "SGP" => [
            'cash_pickup' => [],
            'cash_delivery' => [],
            'ewallet' => []
        ],
    ],
];
