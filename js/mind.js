/*document.getElementsByClassName("btn").addEventListener("click", function(){
	alert("Hello");
	document.getElementsByClassName("btn")[0].style.backgroundColor="yellow";
    
}); */

/*$("#update").click(function()
{
    $("#counter")++;
}*/
$('.btn').on('click',function(){
	//getter
	var count=0;
	count++;
	var currentColor=$(this).css('background-color');
	console.info(currentColor);
	var whiteColor=$('.color-white').css('background-color');
	//$(this).css('background-color','black');
	if(currentColor==whiteColor)
		$(this).css('background-color','black');
	else
		$(this).css('background-color','white');
	var input = $('#TextBox');
    input.val(parseInt(input.val()) + 1); 
});



