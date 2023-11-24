<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Models\Home\Email;

$email = new Email();
$email->enviar();
