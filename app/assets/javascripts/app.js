console.log('Welcome to Ensign!');

function removeZero(){
	$('.bar').addClass('zero');
	$('.current .bar').removeClass('zero');
}

$(document).ready(function(){
	removeZero();
	
	$('body').on('click', '.no', function(){
		setTimeout(function(){
			removeZero();
			return false;
		}, 500);
		$('.current').removeClass('current').addClass('gone');
		$('.next').removeClass('next').addClass('current');
	});
});