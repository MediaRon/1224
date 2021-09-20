<?php

$times = array(
	'0305' => array(
		'label' => '3:05 a.m.',
		'match' => '0305',
	),
	'0310' => array(
		'label' => '3:10 a.m.',
		'match' => '0310',
	),
);

// Midnight.
$time = mktime( 0, 0, 0, 1, 1, 2021 );
$time_array = array();

// (60/5)*24
for ( $i = 0; $i < 288; $i++ ) {
	$label = date( 'g:i a', $time );
	$match = date( 'H:i', $time );
	$key = date( 'Hi', $time );

	$time_array[ $key ] = array(
		'label' => $label,
		'match' => $match,
	);
	$time += 5 * 60;
}
// Randomize array.
shuffle( $time_array );

$json = json_encode( $time_array );
echo $json;
exit;

echo '<pre>' . json_encode( print_r( $time_array, true ) ) . '</pre>';
die( '' );
