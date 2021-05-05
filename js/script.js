$(document).ready(function(){
  $("nav .container .lang ul li:nth-of-type(1)").click(function(){
    $(this).parent().parent().parent().parent().find(".register_p1").fadeIn();
  });
  $("nav .container .lang ul li:nth-of-type(2)").click(function(){
    $(this).parent().parent().parent().parent().find(".register_p2").fadeIn();
  });
  $("nav .register_p1").click(function(){
    $(this).fadeOut();
  });
  $("nav .register_p2").click(function(){
    $(this).fadeOut();
  });
  $("nav .register_p1 .sign_up").click(function(e){
    e.stopPropagation();
  });
  $("nav .register_p2 .log_in").click(function(b){
    b.stopPropagation();
  });
  /***********scroll top***********/
  $(window).scroll(function(){
    if($(this).scrollTop()> 700){
      $(".top").fadeIn();
    }else{
      $(".top").fadeOut();
    }
  });
  $(".top").click(function(){
    $('html,body').animate({
      scrollTop: 0
    })
  });
  /*************menu*************/
  $(".menu").click(function(){
    $("nav .list").slideToggle();
    $("nav .lang").slideToggle();
  });














});