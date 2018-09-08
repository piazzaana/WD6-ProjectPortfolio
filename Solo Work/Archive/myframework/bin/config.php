<?php

$config = array(
    'defaultController' => 'welcome',
    'dbname' => 'students',
    'dbpass' => 'root',
    'dbuser' => 'root',
    'baseurl' => 'http://127.0.0.1'
);

$str=$config['baseurl'].'/'.$_SERVER['REQUEST_URI'];

$urlPathParts = explode('/', ltrim(parse_url($str, PHP_URL_PATH), '/'));

include './router.php';

$route = new Router($urlPathParts, $config);