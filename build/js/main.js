function showCases(){$("section.cases > div").hide(),$("section.cases > div.all").show()}function listsEvent(){$("nav.categories li").click(function(){var i=$(this).data("category");$(this).siblings().removeClass("active"),$(this).addClass("active"),$("section.cases > div").hide(),$("section.cases > div."+i).fadeIn(600)})}function sliderImages(){$(".slider .next-arrow").click(function(){var i,s,a=$(this).parent().parent().siblings("img[data-slide]").length,e=$(this).parent().parent().siblings("img[data-slide].current-slide"),t=$(this).parent().siblings("div.paragraph").children("a[data-slide].current-slide"),n=e.data("slide");n++==a?(i=$(this).parent().parent().siblings('img[data-slide="1"]'),s=$(this).parent().siblings("div.paragraph").children('a[data-slide="1"]')):(i=e.next("img[data-slide]"),s=t.next("a[data-slide]")),e.hide().removeClass("current-slide"),t.hide().removeClass("current-slide"),i.show().addClass("current-slide"),s.show().addClass("current-slide")})}window.onload=function(){var s=$("div.case"),a=1e3;for(i=0;i<s.length;i++){var e=$(s[i]).children("img").height();e<a&&(a=e)}18<(a=(a/=18).toFixed(2))?a=Math.floor(7*Math.random())+12:a<12&&(a=12),$("section.cases div.case").css("height",a+"em")},showCases(),listsEvent(),heightCases(),$(".case > .fas").click(function(){var i;i=$(this).siblings(".heading").children(".paragraph").children("a").attr("data-slide")?$(this).siblings(".heading").children(".paragraph").children("a.current-slide").attr("href"):$(this).siblings(".heading").children(".paragraph").children("a").attr("href"),document.location=i}),sliderImages();