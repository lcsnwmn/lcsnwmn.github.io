var palette = ["#FFA464","#FFD564","#FFFB64","#A8ED5D","#49B8A9","#5D67C4","#9253C0","#E65B8E"];
var linkClasses = ["name", "about", "resume", "github", "contact", "back"]
var pageClasses = ["mainPage", "aboutPage","resumePage"]
var lastUsed = [];
var colorOffset = 2;
var startDate = new Date("01/05/2009");

function replaceSVGs()
{
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}

function newGradient()
{
	var colors = getAvailableColors();
	$("#stop1").attr("stop-color", palette[colors[0]]);
	$("#stop2").attr("stop-color", palette[colors[1]]);
	lastUsed = colors;
}

function getAvailableColors()
{
	var color1, color2;
	
	do
	{
		color1 = Math.floor(Math.random()*palette.length);
		color2 = (color1 + 2) % palette.length;
	} while ($.inArray(lastUsed, color1) >= 0 || $.inArray(lastUsed, color2) >= 0);
			 
	return (Math.Random - 0.5 < 0) ? [color1,color2] : [color2,color1];
}

function showPage(pageClass)
{
	$.each(pageClasses, function (index, value) 
	{
		$("." + value).hide(200)
	});
	
	$("." + pageClass).show(200);
	
	resize();
}

function resize()
{
	var height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

	var menuItemHeight = (150 / 910) * $("#nameLi").outerWidth(true);
	$(".menuLi").height(menuItemHeight);	
	$("#resumeContainer").height(height - menuItemHeight - 70);

}