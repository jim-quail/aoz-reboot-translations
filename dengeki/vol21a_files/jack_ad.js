// JavaScript Document
$(function() {
	var	scrollHeight = $(document).height();
			$("#jack_ad .leftbanner").css("height",$(window).height()+'px');
			$("#jack_ad .rightbanner").css("height",$(window).height()+'px');
	//スクロール一番下で次読み込み
	$(window).bind("scroll", function() {
		scrollPosition = $(window).height() + $(window).scrollTop();
		scrollTop = $(window).scrollTop();

		//スクロール位置がヘッダより超えたら両サイドのバナーを固定にする
		if (scrollTop > 112) {
			$("#jack_ad").addClass('fixed');
		} else {
			//それ以外のスクロールの位置の場合
			$("#jack_ad").removeClass('fixed');
		}
	});
//リサイズ時には
		$(window).bind("resize", function() {
			/*
			$("#jack_ad .leftbanner").css("height",$(window).height()+'px');
			$("#jack_ad .rightbanner").css("height",$(window).height()+'px');
			*/
		});
});