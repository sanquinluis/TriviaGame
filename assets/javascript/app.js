$(document).ready(function(){
var correct = 0;
var incorrect = 0;
var unanswered = 8;
var theCount = 60;
var startTimer;

	$('.hideit').hide();
	$('.done').hide();
	$('.hidethis').hide();
		$('.start').on ("click", function(){
			$('.hideit').show();
			$('.start').hide();
			$('.done').show();
		startTimer = setInterval(decrement, 1000);
		function decrement(){	
  			theCount--;
  			// console.log(theCount);
  			$('.timeLeft').html("Time remaining: " + theCount + " seconds");
  			if (theCount === 0){
  				$('.hideit').hide();
  				$('.hidethis').show();
  				$('.done').hide();
  				clearInterval(startTimer);
  				$('.correct').html("Correct answers: "+correct);
				$('.incorrect').html("Incorrect answers: "+incorrect);
				$('.unanswered').html("Unanswered: "+unanswered);
				startTimer = setInterval (function(){
				clearInterval(startTimer);
					correct = 0;
					incorrect = 0;
					unanswered = 8;
					theCount = 60;
					$('.hideit').hide();
					$('.done').hide();
					$('.hidethis').hide();
					$('.start').show();
			},3000);

  			}
	};			
		
		$('.correctop').click(function() {
   		if($('.correctop').is(':checked')) { 
   			function theCorrect(){
   			console.log("correct");
   			correct++;
   			unanswered--;
   			// $("#correct").html("Correct answers: " + correct);
   			console.log(correct); 
   		}
   		 theCorrect();
   	};
   		
		});
		$('.wrongop').click(function(){
	   		 if($('.wrongop').is(':checked')) { 
	   			console.log("incorrect");
	   			incorrect++;
	   			unanswered--;
	   			console.log(incorrect); 
	   			}
});
		$('.done').on ("click",function(){
			$('.hideit').hide();
			$('.hidethis').show();
			$('.done').hide();
			$('.correct').html("Correct answers: "+correct);
			$('.incorrect').html("Incorrect answers: "+incorrect);
			$('.unanswered').html("Unanswered: "+unanswered);
			startTimer = setInterval (function(){
				clearInterval(startTimer);
					correct = 0;
					incorrect = 0;
					unanswered = 8;
					theCount = 60;
					$('.hideit').hide();
					$('.done').hide();
					$('.hidethis').hide();
					$('.start').show();



			},3000);

		
		});
		
	});		
			
});
		
	


