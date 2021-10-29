
$(document).ready(function() {
  
  // lnb
  $(".control_lnb").click(function() {  
    var winWidth = window.innerWidth;
    var isClass = $(".sec_lnb").hasClass('on');

    if(winWidth < 768) {
      $(".sec_lnb").removeClass('active');
      $(".bg_shadow").css("display", "none");
      $("body").css("overflow", "");
    }else{
      if(!isClass){
        $(".sec_lnb").addClass('on');
      }else{
        $(".sec_lnb").removeClass('on')
      }
    }
  });
  // window resize Lnb 대응
  $(window).resize(function(){
    var winWidth = window.innerWidth;
    var isClass = $(".sec_lnb").hasClass('active');
    
    if(winWidth < 768 && isClass) { // mobile
      $("body").css("overflow", "hidden");
    }else if(winWidth >= 768){ // pc
      $("body").css("overflow", "");
    }
  })

  var gnbBtn = $(".gnb_button");
  
  $(gnbBtn).click(function(){ // mobile 버튼 클릭
    $(".sec_lnb").addClass('active');
    $(".bg_shadow").css("display", "block");
    $("body").css("overflow", "hidden");
  });


  // tab
  $("ul.tab_list li").click(function() {
    $("ul.tab_list li").removeClass("active"); 
    $(this).addClass("active"); 
    $(".tab_panel").removeClass("active");

    var activeTab = $(this).find("a").attr("href"); 
    $(activeTab).addClass("active");
    blogSwipe.update();
    visitorSwipe.update();
    recommSwipe.update();
    return false;
  });

  
  // swiper
  var blogSwipe = new Swiper('.swiper-container.swiper_blog', {
    navigation: {
      nextEl: '.item_blog .swiper-button-next',
      prevEl: '.item_blog .swiper-button-prev',
    },
    slidesPerView : '5',
    spaceBetween: 6,
    loop : true,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween : 0, 
      }
    }
  });

  var visitorSwipe = new Swiper('.swiper-container.swiper_visitor', {
    navigation: {
      nextEl: '.item_visitor .swiper-button-next',
      prevEl: '.item_visitor .swiper-button-prev',
    },
    slidesPerView : '2',
    spaceBetween : 25, 
    loop : true,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween : 0, 
      }
    }
  });

  var recommSwipe = new Swiper('.swiper-container.swiper_recomm', {
    navigation: {
      nextEl: '.con_recomm .swiper-button-next',
      prevEl: '.con_recomm .swiper-button-prev',
    },
    pagination: {
      el: '.con_recomm .swiper-pagination',
    },
    slidesPerView : '1.5',
    centeredSlides: true,
    loop : true,

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween : 0, 
      }
    }
  });
});
