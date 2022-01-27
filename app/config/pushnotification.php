<?php
/**
 * @see https://github.com/Edujugon/PushNotification
 */

return [
    'gcm' => [
        'priority' => 'normal',
        'dry_run' => false,
        'apiKey' => 'My_ApiKey',
    ],
    'fcm' => [
        'priority' => 'normal',
        'dry_run' => false,
        'apiKey' => 'AAAA1aCUJro:APA91bHYm1YnXKDDgLem1WtAtEnxFqT7VyD4vJeaQ1dmjuQL5Cq9OAXxP4Um2Rx8F9xOAYi-nHUbsZyWsCLWWrFSawLz3oiwwt0lzqhhjhSrBAE8PjElcjPVSv6LatY8YVPr87H8H1XT',
    ],
    'apn' => [
        'certificate' => __DIR__ . '/iosCertificates/apns-dev-cert.pem',
        'passPhrase' => 'secret', //Optional
        'passFile' => __DIR__ . '/iosCertificates/yourKey.pem', //Optional
        'dry_run' => true,
    ],
];
