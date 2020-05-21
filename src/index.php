<?php

header("Access-Control-Allow-Origin: *"); // comment this line for prod !!!

$qs = $_SERVER['REQUEST_URI'];

function frontController($qs) {
	
	switch($qs) {
		case '':
			require_once(__DIR__ . './index.html');
			echo '<h1>TEST</h1>';
			break;
		case '/':
			require_once(__DIR__ . './index.html');
			break;
		case '/fruits':
			$out = [
				['id' => 1, 'name' => 'orange'],
				['id' => 2, 'name' => 'apple']
			];
			echo json_encode($out);
			break;
		case '/vegetables':
			$out = [
				['id' => 1, 'name' => 'cucumber'],
				['id' => 2, 'name' => 'tomato']
			];
			echo json_encode($out);
			break;
		case '/flowers':
			$out = [
				['id' => 1, 'name' => 'rose'],
				['id' => 2, 'name' => 'orchidea']
			];
			echo json_encode($out);
			break;
		case '/nuts':
			$out = [
				['id' => 1, 'name' => 'pumpkin seeds'],
				['id' => 2, 'name' => 'sunflower seeds'],
				['id' => 2, 'name' => 'almonds'],
				['id' => 2, 'name' => 'hazelnuts']
			];
			echo json_encode($out);
			break;
		default:
			echo 'Error!';
			break;
	}
	
    
}

frontController($qs);
?>