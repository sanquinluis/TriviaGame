$(document).ready(function(){
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var theCount = 60;
	$('.hideit').hide();
	$('.done').hide();
	$('.hidethis').hide();
		$('.start').on ("click", function(){
			$('.hideit').show();
			$('.start').hide();
			$('.done').show();
		var startTimer = setInterval(decrement, 1000);
		function decrement(){	
  			theCount--;
  			// console.log(theCount);
  			$('.timeLeft').html("Time remaining: " + theCount + " seconds");
  			if (theCount === 1){
  				$('.hideit').hide();
  				$('.hidethis').show();
  				$('.done').hide();
  				clearInterval(theCount);
  			}
  			
  			(theCount);
	};			
	});
		$('input').on ("click", function(){

		function radioSe(){
			if ($('#correctop').attr("checked", "checked"));
			correct++;
			if ($('#wrongop').attr("checked","checked"));
			incorrect++;
	};
			radioSe(correct);
			console.log(incorrect);
			console.log(correct);
});
		$('.done').on ("click",function(){
			$('.hideit').hide();
			$('.hidethis').show();
			$('.done').hide();
		
	})
	


});