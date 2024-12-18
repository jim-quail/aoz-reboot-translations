/* UA setting */
var d = window.document;
if(navigator.userAgent.indexOf('iPhone') > -1)
d.write('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">');
else if(navigator.userAgent.indexOf('iPad') > -1)
d.write('<meta name="viewport" content="width=1280" />');
else
d.write('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">');

/* image switcher */
jQuery(function(){
	var $setElem = jQuery('.switch'),
	pcName = '-pc',
	spName = '-sp',
	replaceWidth = 768;

	$setElem.each(function(){
		var $this = jQuery(this);
		function imgSize(){
			if(typeof $this.attr('src')==='undefined'||$this.attr('src')===false)
				return false;
			var windowWidth = parseInt(jQuery(window).width());
			if(windowWidth >= replaceWidth) {
				$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
			} else if(windowWidth < replaceWidth) {
				$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
			}
		}
		jQuery(window).resize(function(){imgSize();});
		imgSize();
	});
});


/* scroll */
jQuery(function(){
	jQuery("div.pagetop a").click(function(){
		var Hash = jQuery(this.hash);
		var HashOffset = jQuery(Hash).offset().top;
		jQuery("html,body").animate({
			scrollTop: HashOffset
		}, 500);
		return false;
	});
});

