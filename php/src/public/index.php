<?php

include_once '../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable('../../');
$dotenv->load();

if (!isset($_ENV['ACCESS_TOKEN'])) {
    throw new \Exception('Please specify ACCESS_TOKEN in .env');
}

try {
    include __DIR__.'/../actions/contactList.php';
} catch (Throwable $t) {
    $message = $t->getMessage();

    include __DIR__.'/../views/error.php';

    exit();
}
