$(function(){
	//Featured Slide
	var initIndex=1;
	var featuredSwiper = $('.featured').swiper({
		slidesPerView:'auto',
		centeredSlides: true,
		/* mode:'vertical', */
		initialSlide :0,
		loop:true,		
		tdFlow: {
			rotate : 30,
			stretch :10,
			depth: 150,
			
		},
		onInit: function(swiper){
			//console.log(swiper.activeIndex,"init");
			 initIndex=1;
		$("#activeIndex").text(initIndex);
		$("#allPage").text(swiper.imagesLoaded-2)
      //alert(swiper.activeIndex);//提示Swiper的当前索引
    },
		onSlideChangeEnd:function(swiper){
			//console.log(swiper.activeIndex,"active")
			var index=swiper.activeIndex;
			if(index==0){
				index=swiper.imagesLoaded-2;
			}else if(index==swiper.imagesLoaded-1){
				index=1;
			}
			$("#activeIndex").text(index)
			//console.log(swiper.imagesLoaded)
		   // alert(swiper);
		   // swiper.activeIndex 这个就是索引， 从 0 开始！ 可看一共有多少元素！
		}
		
	})
	featuredSwiper.addCallback('SlideChangeStart', function(swiper){
		//console.log(swiper.activeIndex,"activeStart")
	})  
	//Thumbs
	$('.thumbs-cotnainer').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:25,
			offsetPxAfter:10,
			calculateHeight: true
		})
	})

	//Banners
	$('.banners-container').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:25,
			offsetPxAfter:10
		})	
	})
})
