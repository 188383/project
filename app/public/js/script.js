
/**
	This is the way the data is supposed to be sent to the server
*/
/*
var obj = {
	'id': 12345,
	'name':'pawel',
	'surname':'otrebski'
};
var t = document.getElementById("button");
t.addEventListener('click',function(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/login');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Type', 'file');
	xhr.send(JSON.stringify(obj));
});

*/
/*
	Select the elements for dates
*/
$(function(){
	$("#dateFrom,#dateTo").datepicker();
});

/**
	Add the navigation for the menu 
**/


/**
	submit button, make a verification 
**/




$(function(){
	var nav = $('#nav-bar');
	var crossicon = $('#menu-close');
	var baricon = $('#menu-icon');
	baricon.click(function(){
		if(baricon.hasClass('w3-show')){
			baricon.addClass('w3-animate-opacity');
			baricon.addClass('w3-hide');
			baricon.removeClass('w3-show');
			nav.removeClass('w3-hide');
			nav.addClass('w3-show');
		}
	});
	
	crossicon.click(function(){
		if(nav.hasClass('w3-show')){
			nav.removeClass('w3-show');
			nav.addClass('w3-hide');
			baricon.removeClass('w3-hide');
			baricon.addClass('w3-show');
		
		}
	});
});


