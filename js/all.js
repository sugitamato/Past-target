$(function(){
/*==============================================

　ページ共通要素

===============================================*/
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

  /*-- TOPに戻る --*/
  var topBtn = $('#top_back_fix');
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $(topBtn).addClass('top_back_op');
    }else{
      $(topBtn).removeClass('top_back_op');
    }
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




/*==============================================

　TOP / nav / Update

===============================================*/
  /*-- TOP画像スライド --*/
  setTimeout(function(){
    $('#img_slide').vegas({
      slides: [
        {src: 'images/top_img2.jpg'},
        {src: 'images/top_img.jpg'}
      ],
      delay: 6000,
      timer: false,
      transitionDuration: 1000,
      transition: 'blur',
    });
  },800);

  /*-- navサイズ変更 --*/
  var $win = $(window),
    $header = $('nav'),
    animationClass = 'is-animation';
    $win.on('load scroll', function(){
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });

  /*-- スクロールバースタイル --*/
  $('#info_box').mCustomScrollbar({
    theme:'rounded-dots-dark',
    setLeft: '5px',
  });




/*==============================================

　Music List

===============================================*/
  /*-- モーダルウィンドウ設定 --*/
  $('.inline').colorbox({
    inline: true,
    maxWidth: "94%",
    maxHeight: "80%",
    returnFocus: false,
    opacity: 1,
  });

  /*-- モーダルウィンドウ_背景画像 --*/
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
  $(window).on('load resize', function(){
    adjust();
  });

  /*-- モーダルウィンドウ_背景軽量化表示 --*/
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

  /*-- flexbox最後尾左寄せ --*/
  //Vocaloid Original
  var $grid_m = $('.music_frame'),
  emptyCells_m = [],i;
  for (i = 0; i < $grid_m.find('.music_frame_item').length; i++){
    emptyCells_m.push($('<div>', {class: 'music_frame_item is-empty'}));
  }
  $grid_m.append(emptyCells_m);
  //nstrumental Original（6作品以上になったら）
  /*
  var $grid_m2 = $('.music_frame_in'),
  emptyCells_m2 = [],i;
  for (i = 0; i < $grid_m2.find('.music_frame_item_in').length; i++){
    emptyCells_m2.push($('<div>', {class: 'music_frame_item_in is-empty'}));
  }
  $grid_m2.append(emptyCells_m2);
  */




/*==============================================

　Discography

===============================================*/
  /*-- flexbox最後尾左寄せ --*/
  var $grid_d = $('.disc_flame'),
  emptyCells_d = [],i;
  for (i = 0; i < $grid_d.find('.disc_item').length; i++){
    emptyCells_d.push($('<li>', {class: 'disc_item is-empty'}));
  }
  $grid_d.append(emptyCells_d);




/*==============================================

　footer

===============================================*/
  /*-- モーダルウィンドウ設定 --*/
  $('.iframe').modaal({
    type:'iframe',
    width: 700,
    height:600,
    background: '#fff',
    overlay_opacity: '0.8',
    overlay_close: false,
  });




/*==============================================

　cookie

===============================================*/
  /*-- 保存 --*/
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




/*==============================================

　WaveSurfer（音楽再生プレーヤー）関連

===============================================*/
/*-- 基本設定 --*/
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  height: '22',
  waveColor: '#aaa',
  progressColor: '#53c6d6',
  barWidth: '1',
});

/*-- WaveSurfer --*/
document.addEventListener('DOMContentLoaded', function(){

  wavesurfer.load('https://dl.dropboxusercontent.com/s/sl80felytnydlxo/%E6%9E%B6%E7%A9%BA.mp3');//初期曲

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