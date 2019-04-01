$(function(){

  $.when(

   //Discography_中画像
   $('#discography ul li').on('click',function(){
     var disc_ori_in = $('#discography ul li');
     var disc_num_in = (disc_ori_in.length -disc_ori_in.index(this));
     var disc_num_in_comp = 'images/al.cm_thum/al' + disc_num_in + '.jpg';
     $('.al_box_img').attr('src',disc_num_in_comp);
   }),
   //Participation_中画像
   $('#participation ul li').on('click',function(){
     var part_ori_in = $('#participation ul li');
     var part_num_in = (part_ori_in.length -part_ori_in.index(this));
     var part_num_in_comp = 'images/al.cm_thum/cm' + part_num_in + '.jpg';
     $('.al_box_img').attr('src',part_num_in_comp);
   })


   ).done(function() {

  /*-- モーダルウィンドウ --*/
  $('.inline').colorbox({
    inline: true,
    maxWidth: "94%",
    maxHeight: "80%",
    returnFocus: false,
    opacity: 1,
  });

  });



  /*-- モーダルウィンドウ　（コンタクト用） --*/
  $('.iframe').modaal({
    type:'iframe',
    width: 700,
    height: 570,
    background: '#fff',
    overlay_opacity: '0.8',
    overlay_close: false,
  });

  /*-- モーダルウィンドウ　背景画像_各曲 --*/
  var bgImg = $('.modal_img_frame img');
  var bgWidth = 960;
  var bgHeight = 500;
  function adjust(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var imgWidth = winWidth;
    var imgHeight = Math.floor(bgHeight * (winWidth / bgWidth));
    var imgTop = (winHeight - imgHeight) / 2;
    var imgLeft = 0;
    if (imgHeight >= winHeight){
    }else{
      imgHeight = winHeight;
      imgWidth = Math.floor(bgWidth * (winHeight / bgHeight));
      imgTop = 0;
      imgLeft = (winWidth - imgWidth) / 2;
    }
    bgImg.css({
      top: imgTop,
      left: imgLeft,
      width: imgWidth,
      height: imgHeight
    })
  }
  /*-- モーダルウィンドウ　背景画像_アルバム --*/
  var bgImg2 = $('.modal_img_frame2 img');
  var bgWidth2 = 250;
  var bgHeight2 = 250;
  function adjust2(){
    var winWidth2 = $(window).width();
    var winHeight2 = $(window).height();
    var imgWidth2 = winWidth2;
    var imgHeight2 = Math.floor(bgHeight2 * (winWidth2 / bgWidth2));
    var imgTop2 = (winHeight2 - imgHeight2) / 2;
    var imgLeft2 = 0;
    if (imgHeight2 >= winHeight2){
    }else{
      imgHeight2 = winHeight2;
      imgWidth2 = Math.floor(bgWidth2 * (winHeight2 / bgHeight2));
      imgTop2 = 0;
      imgLeft2 = (winWidth2 - imgWidth2) / 2;
    }
    bgImg2.css({
      top: imgTop2,
      left: imgLeft2,
      width: imgWidth2,
      height: imgHeight2
    })
  }
  adjust2();
  $(window).on('load resize', function(){
    adjust();
    adjust2();
  });

  /*-- モーダルウィンドウ_背景 --*/
  if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    //Vocaloid Original
    $('.lyric_guide').on('click',function(){
      var lyric_ori = $('.lyric_guide');
      var lyric_num = (lyric_ori.length -lyric_ori.index(this));
      var lyric_num_comp = 'images/m_bg/bg' + lyric_num + '.jpg';
      $('.modal_img_frame img').attr('src',lyric_num_comp);
    });
    //Vocaloid Arrange
    $('.lyric_guide_ar').on('click',function(){
      var lyric_ori_ar = $('.lyric_guide_ar');
      var lyric_num_ar = (lyric_ori_ar.length -lyric_ori_ar.index(this));
      var lyric_num_comp_ar = 'images/m_bg/bg_ar' + lyric_num_ar + '.jpg';
      $('.modal_img_frame img').attr('src',lyric_num_comp_ar);
    });
    //Discography
    $('#discography ul li').on('click',function(){
      var disc_ori = $('#discography ul li');
      var disc_num = (disc_ori.length -disc_ori.index(this));
      var disc_num_comp = 'images/al.cm_thum/al' + disc_num + '.jpg';
      $('.modal_img_frame2 img').attr('src',disc_num_comp);
    });
    //Participation
    $('#participation ul li').on('click',function(){
      var part_ori = $('#participation ul li');
      var part_num = (part_ori.length -part_ori.index(this));
      var part_num_comp = 'images/al.cm_thum/cm' + part_num + '.jpg';
      $('.modal_img_frame2 img').attr('src',part_num_comp);
    });
  }

  /*-- モーダルウィンドウ_背景固定 --*/
  var current_scrollY;
  $(".inline").on('click',function(){
    current_scrollY = $( window ).scrollTop();
    $('body').css({
      position: 'fixed',
      width: '100%',
      top: -1 * current_scrollY
    });
  });
  $("#cboxOverlay, .cbox_close, .cbox_close_2, .modal_img_frame, .modal_img_frame2").on('click',function(){
    $('body').attr({style: ''});
    $('html, body').prop({scrollTop: current_scrollY});
  });

  /*-- スムーズスクロール --*/
  $(".scroll").on('click',function(event){
    event.preventDefault();
    var url = this.href;
    var parts = url.split("#");
    var target = parts[1];
    var target_offset = $("#"+target).offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 800);
  });
  $("#top_back, #top_back_fix").on('click',function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });

  /*-- カレント表示 --*/
  var scrollMenu = function(){
    var array = {
      'header': 0,
      '#link_1': 0,
      '#link_2': 0,
      '#link_3': 0,
      '#link_4': 0
    };
    var $globalNavi = new Array();
    for (var key in array){
      if ($(key).offset()){
        array[key] = $(key).offset().top - 0;
        $globalNavi[key] = $('nav ul li a[href="' + key + '"]');
      }
    }
    $(window).scroll(function (){
      for (var key in array){
        if ($(window).scrollTop() > array[key] - 80){
          $('nav ul li a').each(function(){
            $(this).removeClass('active');
          });
          $globalNavi[key].addClass('active');
        }
      }
    });
  }
  scrollMenu();

  /*-- TOPに戻る & 画面枠フェード --*/
  var topBtn = $('#top_back_fix');
  var side = $('body');
  var audio_space = $('#audio_space');
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $(topBtn).addClass('top_back_op');//TOPに戻る
      $(side).addClass('side_op');//画面枠_横
      $(audio_space).addClass('audio_space_op');//画面枠_下
    }else{
      $(topBtn).removeClass('top_back_op');
      $(side).removeClass('side_op');
      if(!$('#audio_space_in').hasClass('audio_op')){
        $(audio_space).removeClass('audio_space_op');
      }
    }
  });

  /*-- パララックス --*/
  var target_top = $(".parallax");
  var targetPosOT_top = target_top.offset().top;
  var target1 = $("#discography");
  var targetPosOT1 = target1.offset().top;
  var target2 = $("#participation");
  var targetPosOT2 = target2.offset().top;
  var targetFactor = 0.5;
  var windowH = $(window).height();
  var scrollYStart_top = targetPosOT_top;
  var scrollYStart1 = targetPosOT1 - windowH - '80';
  var scrollYStart2 = targetPosOT2 - windowH - '80';
  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();
    if(scrollY > scrollYStart_top){
      target_top.css('background-position-y', (scrollY - targetPosOT_top) * targetFactor + 'px');
    }else{
      target_top.css('background-position','center top');
    }
    if(scrollY > scrollYStart1){
      target1.css('background-position-y', (scrollY - targetPosOT1 - '-30') * targetFactor + 'px');
    }else{
      target1.css('background-position','center top');
    }
    if(scrollY > scrollYStart2){
      target2.css('background-position-y', (scrollY - targetPosOT2 - '250') * targetFactor + 'px');
    }else{
      target2.css('background-position','center top');
    }
  });

  /*-- info_スクロールバースタイル --*/
  $('#info_box').mCustomScrollbar({
    theme:'rounded-dots-dark',
    setLeft: '5px',
  });

  /*-- cookie保存 --*/
  $('#volume').on('mouseup', function(){
    Cookies.set('volumebar_cookie',vol_input.value,{ expires: 365 });
    Cookies.set('volume_cookie',wavesurfer.getVolume(),{ expires: 365 });
  });
  //音量スライダー
  $('#volume').val(Cookies.get('volumebar_cookie'));
  //音量スライダーアイコン
  var vol_img = vol_input.value;
  var speaker = '#audio_sp img';
  if(vol_img == 0){
    $(speaker).attr('src','images/audio_con/con_sp_0.png');
  }else if(vol_img > 0.51){
    $(speaker).attr('src','images/audio_con/con_sp_100.png');
  }else{
    $(speaker).attr('src','images/audio_con/con_sp_50.png');
  }
  //音量
  if(Cookies.get("volume_cookie") == ''){
    wavesurfer.setVolume(0.5);
  }else{
    wavesurfer.setVolume(Cookies.get('volume_cookie'));
  }
});

/*-- WaveSurfer（プレーヤー設定） --*/
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  height: '22',
  waveColor: '#aaa',
  progressColor: '#53c6d6',
  barWidth: '1',
});

/*-- WaveSurfer --*/
document.addEventListener('DOMContentLoaded', function(){
  wavesurfer.on('ready', function(){
    var volume = "#volume";
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      wavesurfer.setVolume(1);//スマホ初期音量
    }
    var volumeInput = document.querySelector(volume);
    var onChangeVolume = function (e) {
      wavesurfer.setVolume(e.target.value);
    };
    volumeInput.addEventListener('input', onChangeVolume);
    volumeInput.addEventListener('change', onChangeVolume);
    document.getElementById('progress_bar').style.display = 'none';//読み込み中非表示
  });

  //再生ボタン(固定プレーヤー)
  $('#audio_play').on('click', function(){
    wavesurfer.playPause()
    links[currentTrack].classList.add('active');
    $(links[currentTrack]).parent().addClass(m_current);
  });
  wavesurfer.on('audioprocess', function(){
    $('#audio_play img').attr('src','images/audio_con/con_stop.png');
  });
  wavesurfer.on('pause', function(){
    $('#audio_play img').attr('src','images/audio_con/con_play.png');
  });
  //再生ボタン(各曲)
  var m_bt = '.playlist';
  var m_play_bt = 'm_play_bt';
  var m_current = 'm_current';
  $(m_bt).on('click',function(){
    $(m_bt).children('img').removeClass(m_play_bt);
    $(this).children('img').addClass(m_play_bt);
    $(m_bt).parent().removeClass(m_current);
    $(this).parent().addClass(m_current);
    document.getElementById('progress_bar').style.display = 'inherit';//読み込み中表示
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      $('#audio_space').addClass('audio_op_sp');//初回のオーディオ表示_sp
    }else{
      $('#audio_space_in').addClass('audio_op');//初回のオーディオ表示_pc
    }
  });

  //停止ボタン(各曲)
  var m_bt_stop = '.playlist_stop';
  $(m_bt_stop).on('click',function(){
    wavesurfer.playPause();
  });
  wavesurfer.on('audioprocess', function (){
    $(links[currentTrack]).find('img').attr('src','images/audio_con/m_stop.png');
  });
  wavesurfer.on('pause', function (){
    $(links[currentTrack]).find('img').attr('src','images/audio_con/m_play.png');
  });

  //表示時間
  var formatTime = function (time){
    return [
      Math.floor((time % 3600) / 60),
      ('00' + Math.floor(time % 60)).slice(-2)
    ].join(':');
  };
  //再生時間
  wavesurfer.on('audioprocess', function (){
    $('.waveform_counter').text( formatTime(wavesurfer.getCurrentTime()) );
  });
  //ファイルの時間
  wavesurfer.on('ready', function (){
    $('.waveform_duration').text( formatTime(wavesurfer.getDuration()) );
  });

  //プレイリスト化
  var stop_hide = 'stop_hide';
  var links = document.querySelectorAll(m_bt);
  var currentTrack = 0;
  var setCurrentSong = function(index){
    links[currentTrack].classList.remove('active');
    currentTrack = index;

    $(m_bt).children('img').removeClass(m_play_bt);//カレント再生ボタン_リセット
    $(m_bt_stop).removeClass(stop_hide);//カレント停止ボタン_リセット
    $(m_bt).parent().removeClass(m_current);//カレント諸々_リセット
    $('.music_play img').attr('src','images/audio_con/m_play.png');//全再生アイコン_リセット

    links[currentTrack].classList.add('active');
    $(links[currentTrack]).parent().addClass(m_current);
    $(links[currentTrack]).next().addClass(stop_hide);

    wavesurfer.load(links[currentTrack].name);//ここで曲読み込み
    document.getElementById('audio_title').innerText = $(links[currentTrack]).prev().text();//曲名表示
    document.getElementById('progress_bar').style.display = 'inherit';//読み込み中表示
    wavesurfer.on('ready', function () {
      wavesurfer.play();//ここで再生
    });
  };
  Array.prototype.forEach.call(links, function(link, index){
    link.addEventListener('click', function(e){
        e.preventDefault();
        setCurrentSong(index);
    });
  });

  //次の曲へ
  $("#audio_next").on('click',function(){
    setCurrentSong((currentTrack + 1) % links.length);
  });
  //曲の最初へ
  $("#audio_prev").on('click',function(){
    wavesurfer.stop();
    wavesurfer.play();
  });
  //リピート切替
  $("#audio_repeat").on('click',function(){
    $(this).toggleClass("repeat_active");
    wavesurfer.on('finish', function(){
      if($('#audio_repeat').hasClass('repeat_active')){
        wavesurfer.stop();
        wavesurfer.play();
      }
    });
  });
});

/*-- 音量スライダー色 --*/
var timer = null;
var vol_input = document.getElementById("volume");
var prev_val = vol_input.value;
$(window).on("load", function(){
  window.clearInterval(timer);
  timer = window.setInterval(function(){
    var new_val = vol_input.value;
    if(prev_val != new_val){
      var b_v = vol_input.value,
      max = vol_input.max,
      range_x = vol_input.clientWidth;
      var b_r =  (range_x / max);
      b_r = (b_r*b_v);
      var bright_bar = document.getElementById("volume_active");
      bright_bar.style.width = b_r+"px";
    }
  }, 1);
});

//アイコン変化
$('#volume').on('input change', function(){
  var vol_img = vol_input.value;
  var speaker = "#audio_sp img";
  if(vol_img == 0){
    $(speaker).attr('src','images/audio_con/con_sp_0.png');
  }else if(vol_img > 0.51){
    $(speaker).attr('src','images/audio_con/con_sp_100.png');
  }else{
    $(speaker).attr('src','images/audio_con/con_sp_50.png');
  }
});

/*-- タイトル　アニメ --*/
$(window).on('load', function(){
  $(".title_border").addClass("active_border");
  $(".title_border").delay(1900).queue(function(){
     $(this).addClass("active_border_op");
     $("h1").addClass("h1_op");
  });
});

/*-- パララックス --*/
$(window).enllax();