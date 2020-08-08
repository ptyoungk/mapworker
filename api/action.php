<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db mapworker_db
		require('./resource/mapworker_db/custom/UserCustom.php');
		require('./resource/mapworker_db/User.php');
		require('./resource/mapworker_db/custom/map_dteailCustom.php');
		require('./resource/mapworker_db/map_dteail.php');
		require('./resource/mapworker_db/custom/mapinfoCustom.php');
		require('./resource/mapworker_db/mapinfo.php');
	

$app->run();


?>
