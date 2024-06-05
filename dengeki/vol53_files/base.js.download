$(function () {
  /**
    ヘッダをスクロールによって消したり出したり
    **/
  var startPos = 0,
    winScrollTop = 0;
  var header = $("#header");
  var wrapper = $("#wrapper");

  $(window).on('load scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop > 240 && wrapper.hasClass('is-fixed') == false) { // 200px以上スクロールしたら

      //headの高さ分上に
      header.css({
        "top": '-55px'
      });
      //位置を0にしてアニメーション
      //header.animate({ "top": 0 }, 300, 'swing');			
      header.addClass("is-fixed");
      wrapper.addClass("is-fixed");
    } else if (winScrollTop < 240 && wrapper.hasClass('is-fixed') == true) {
      header.removeClass("is-fixed");
      wrapper.removeClass("is-fixed");
    }
    if (winScrollTop >= startPos) {
      if (winScrollTop >= 240) {
        //header.css({ "top": '-55px' });
        header.animate({
          "top": -55
        }, 55);
      }
    } else {
      //header.css({ "top": '0px' });
      header.animate({
        "top": 0
      }, 80, 'swing');
    }
    startPos = winScrollTop;
  });

  //18禁モーダル処理
  $("body").prepend('<div id="modalwindowmask"></div>');
  $.openModalWindow = function (w = 680, h = 300) {
      //cookieセットしてあればモーダル 非表示
      if($.checkCookie() == true) {return;}
      
    var widthRate = w / $(window).width(); // 画像サイズと画像表示領域のサイズの比率 (幅)
    var heightRate = h / $(window).height(); // 画像サイズと画像表示領域のサイズの比率 (高さ)

    if (widthRate >= 1 && heightRate >= 1) {
      // 画像のwidth、height共に画面に収まらない場合
      if (widthRate > heightRate) {
        // 画像のwidthの比率の方が大きい場合
        // widthに合わせてリサイズ
        w = $(window).width() * 0.9;
        h = Math.floor(h / widthRate);
      } else {
        // 画像のheightの比率の方が大きい場合
        // heightに合わせてリサイズ
        w = Math.floor(w / heightRate);
        h = $(window).height() * 0.9;
      }
    } else if (widthRate >= 1 && heightRate < 1) {
      // 画像のwidthのみ画面に収まらない場合
      w = $(window).width() * 0.9;
      h = Math.floor(h / widthRate);
    } else if (widthRate < 1 && heightRate >= 1) {
      // 画像のheightのみ画面に収まらない場合
      w = Math.floor(w / heightRate);
      h = $(window).height() * 0.9;
    } else {
      // 画像のwidht、heightともに画面に収まる場合
      // 必要であれば処理を記述
    }

    var pos_x = -(w / 2);
    var pos_y = -(h / 2);
    var mw = $('<div id="modalwindow"><div><p>電撃ホビーウェブをご覧いただきありがとうございます。<br>こちらの記事は18歳未満の読者の方の閲覧はご遠慮いただいております。</p><p class="link"><a href="javascript:$.setCookie();">＜18歳以上＞<a href="https://hobby.dengeki.com/">＜18歳未満＞</a></p></div></div>').css({
      'margin-top': pos_y,
      'margin-left': pos_x,
      'width': w + 'px',
      'height': h + 'px'
    });
    $("#modalwindowmask").empty().append(mw).show();
    $('#modalwindow').click(function (e) {
      e.stopPropagation();
    });
  }
$.closeModalWindow = function () {
      $("#modalwindowmask").fadeOut('slow');
    }

$.checkCookie = function() {
    var arr = new Array();
    if(document.cookie != ''){
        var tmp = document.cookie.split('; ');
        for(var i=0;i<tmp.length;i++){
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }    
    if( arr['r18'] == 1){ // 取り出したいkeyと合致したら
        return true;
    }else{
        return false;
    }
}

$.setCookie = function() {
        var date1,date2;  //日付データを格納する変数
        var kigen = 1;   //cookieの期限
        //現在の日付データを取得
        date1 = new Date();
        //1日後の日付データを作成
        date1.setTime(date1.getTime() + kigen*24*60*60*1000);
        //GMT形式に変換して変数date2に格納する
        date2 = date1.toGMTString();
        document.cookie="r18=1;expires=" + date2 +";path=/";
    $.closeModalWindow();
}

//photoswipe
$('a.swipe').photoSwipe();

});






