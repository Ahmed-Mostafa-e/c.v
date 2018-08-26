$(document).ready(function(){
	
	$('.pic').fadeIn(1000, function(){$('.talks').animate({left:'0'}, 400, function(){$('.story').animate({left:'0'}, 600, function(){$('.contain').slideDown()})});});
	
})
$('.review').click(function(){
	$('.lay').slideToggle(200);
})

var myText = ' " hello, iam ahmed  iam a student at fucalty of commerce iam very interesting in numbers and functions, in late 2017 i started to learn technology languages by myself "self study", i find endless passion while designing pages and coding. "',
	i = 0;
setTimeout  (function() {
	var typeWriter = setInterval(function(){
		document.getElementById("story").textContent += myText[i];
		i = i + 1;
		if(i > myText.length - 1){
			clearInterval(typeWriter);
		}
	}, 70) 
}, 2000);

