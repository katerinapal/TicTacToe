<?php
// set request params
$apikey = 'd3c46603c9ae986e1787d7111a9c6010';
$url = 'https://www.pushbullet.com/api/pushes';
$data = array(
	'type' => 'note',
	'title' => $_REQUEST['title'],
	'body' => $_REQUEST['body'],
	'device_id' => '50381',
);
 
// Init curl request
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_USERPWD, $apikey.":");
curl_setopt($ch,CURLOPT_POST, count($data));
curl_setopt($ch,CURLOPT_POSTFIELDS, http_build_query($data));
 
// output response
$result = curl_exec($ch);
var_dump($result);
?>