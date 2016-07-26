$(document).ready(function(){

$('.hideit').hide();
$('.done').hide();
$('.theCount').hide();
	$('.btn').click( function(){
		$('.hideit').show();
			$('.btn').hide();
			$('.done').show();
		var theCount = 60;
		var startTimer = setInterval(time, 1000);
		function time(){
			$('.btn').click(startTimer);
  			theCount --;
  			if (theCount == 0);
  			clearInterval(startTimer);
  			
	};
		console.log(startTimer);
		$('.timeLeft').html("Time remaining: " + theCount + " seconds");

	});
	


});