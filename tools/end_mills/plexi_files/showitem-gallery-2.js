(function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=true,o=0,u=0;t=e.event.fix(n);t.type="mousewheel";if(n.wheelDelta){i=n.wheelDelta/120}if(n.detail){i=-n.detail/3}u=i;if(n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS){u=0;o=-1*i}if(n.wheelDeltaY!==undefined){u=n.wheelDeltaY/120}if(n.wheelDeltaX!==undefined){o=-1*n.wheelDeltaX/120}r.unshift(t,i,o,u);return(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"],n;if(e.event.fixHooks){for(n=t.length;n;){e.event.fixHooks[t[--n]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=t.length;e;){this.addEventListener(t[--e],r,false)}}else{this.onmousewheel=r}},teardown:function(){if(this.removeEventListener){for(var e=t.length;e;){this.removeEventListener(t[--e],r,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);jQuery(function(e){e.fn.maximize=function(t){if(!this.length){return this}var n=e.extend({},e.fn.maximize.defaults,t);return this.each(function(){var t=e(this).find("img"),r=e(this),i=r.find("div"),s=i.outerHeight(true)-i.height(),o=t.outerWidth(true)-t.width(),u=t.outerHeight(true)-t.height(),a={},f={},l,c;a[n.align]=0;f[n.align]=0;e(this).css(e.extend({position:"fixed",top:0,width:"100%",height:"100%",overflow:"hidden"},a));t.hide().css(e.extend({position:"absolute",top:0,left:0,visibility:"hidden"},f));c=function(){var a=window.innerHeight||e(window).height(),f=e(window).width(),l,c,h,p=r.data("img_size")||{width:t.width(),height:t.height(),ratio:t.width()/t.height()},d=e("#imageWrapper");if(i.length){i.height(a-s)}a=i.height();f=i.width();l=f/a;r.trigger("maximizerResize.maximize",[f,a]);if(n.resize==="crop"){if(l>p.ratio){c=f;h=f/p.ratio}else{c=a*p.ratio;h=a}}else{if(l<p.ratio){c=f-o;if(n.zoomInLimit>0&&c>p.width*n.zoomInLimit){c=p.width*n.zoomInLimit}if(n.maxWidth>0&&c>n.maxWidth){c=n.maxWidth}h=c/p.ratio-u;if(n.maxHeight>0&&h>n.maxHeight){h=n.maxHeight;c=h*p.ratio}}else{h=a-u;if(n.zoomInLimit>0&&h>p.height*n.zoomInLimit){h=p.height*n.zoomInLimit}if(n.maxHeight>0&&h>n.maxHeight){h=n.maxHeight}c=h*p.ratio-o;if(n.maxWidth>0&&c>n.maxWidth){c=n.maxWidth;h=c/p.ratio}}}t.width(c).height(h);if(e.inArray(n.center,["both","horizontal"])!==-1){t.css({left:(f-c)/2})}if(e.inArray(n.center,["both","vertical"])!==-1){t.css({top:(a-h)/2})}d.find("span.closeGallery").css({left:parseInt(d.find("img").css("left"),10)+parseInt(d.find("img").css("width"),10)-30+"px",top:parseInt(d.find("img").css("top"),10)+"px"});d.find("span.productTipLarge").css({left:parseInt(d.find("img").css("left"),10)+parseInt(d.find("img").css("width"),10)-d.find("span.productTipLarge").width()+"px",top:parseInt(d.find("img").css("top"),10)+parseInt(d.find("img").css("height"),10)+5+"px"}).fadeIn(200)};l=setInterval(function(){var i,s,o=e("#imageWrapper");if(t[0].complete){i=t.width();s=t.height();if(s>0&&i>0){r.data("img_size",{width:i,height:s,ratio:i/s});c();if(n.effect==="fade"){r.trigger("beforeShow");e("#imageWrapper").find("span.closeGallery").fadeIn(500);t.css({visibility:"visible"}).fadeIn(500,function(){r.trigger("afterShow")})}else{r.trigger("imageReady",[t,r])}o.find("span.closeGallery").css({left:Math.ceil(parseFloat(o.find("img").css("left")))+Math.ceil(parseFloat(o.find("img").css("width")))-30+"px",top:parseInt(o.find("img").css("top"),10)+"px"});o.find("span.productTipLarge").css({left:parseInt(o.find("img").css("left"),10)+parseInt(o.find("img").css("width"),10)-o.find("span.productTipLarge").width()+"px",top:parseInt(o.find("img").css("top"),10)+parseInt(o.find("img").css("height"),10)+5+"px"}).fadeIn(200);clearInterval(l)}}},50);e(window).bind("resize",function(){c()})})};e.fn.maximize.defaults={center:"both",align:"left",resize:"crop",zoomInLimit:0,maxWidth:0,maxHeight:0,effect:"fade"}});(function(e){e.fn.vCenter=function(t){var n={sTop:function(){return window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop},wHeight:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body.clientHeight}};return this.each(function(t){if(parseInt(t,10)===0){var r=e(this),i=r.height(),s=n.sTop()+n.wHeight()/2-i/2;r.css({position:"absolute",marginTop:"0",top:s})}})}})(jQuery);(function(e){e.fn.newGallery=function(t,n){e.fn.newGallery.defaults={altText:"Allegro.pl",sessId:1};var r=e.extend(e.fn.newGallery.defaults,t),i=false;return this.each(function(){var t=e(this),n="",s=0,o,u,a,f={init:function(){if(r.productOnly&&e("#product_desc").data("photos").length===1){this.showSingleProduct()}else if(r.photos.small.length===1&&!r.productOnly){this.showSinglePhoto()}else{this.construct()}},showSingleProduct:function(){t.html('<div style="text-align:center;margin:50px 0 0 0;"><img src="'+e("#product_desc").data("photos")[0][2]+'" alt="" width="800" height="600" /></div>')},showSinglePhoto:function(){t.html('<div class="gallery"><div class="galleryContainer"><div class="img" style="background:url('+r.photos.medium[0]+') no-repeat center;"></div></div><div class="clear"></div></div>');o=t.find("div.galleryThumbs");u=t.find("div.galleryContainer");a=t.find("div.img");this.populate()},construct:function(){t.html('<div class="gallery"><div class="galleryContainer"></div><div class="galleryThumbs">'+'<div class="clear"></div><ul></ul></div><div class="clear"></div></div>');o=t.find("div.galleryThumbs");u=t.find("div.galleryContainer");this.populate()},populate:function(){var s,f;if(r.productOnly){for(s=0;s<e("#product_desc").data("photos").length;s++){n+='<li><a href="#"><img src="'+e("#product_desc").data("photos")[s][0]+'" width="80" height="60" alt=""></a></li>'}}else{for(s=0;s<r.photos.small.length;s++){if(r.external[s]===1){n+='<li class="productPhoto">'}else{n+="<li>"}n+='<a href="#"><img src="'+r.photos.small[s]+'" width="64" height="48" alt=""></a></li>'}if(r.photos.small.length<5&&i){for(s=r.photos.small.length;s<5;s++){n+='<li class="productPhotoEmpty"><div></div></li>'}}}e(o).find("ul").html(n);if(r.productOnly){e(u).html('<img src="'+e("#product_desc").data("photos")[0][1]+'" alt="" /><a class="nextPhoto" href="#"><span></span></a><a class="prevPhoto" href="#"><span></span></a>'+'<a class="galleryTrigger" href="#"><span>'+r.zoomMsg+'</span></a><span class="photoFromProductCatalogueDesc">'+r.photoFromProductCatalogueMsg+'<a class="sIHelpIcon" style="margin:0 5px -2px;" href="#" data-helptip-body="'+r.productPhotoTip+'"></a></span>')}else if(r.photoLabels!==undefined){e(u).html('<div class="img" style="background:url('+r.photos.medium[0]+') no-repeat center;">'+'</div><a class="nextPhoto" href="#"><span></span></a><a class="prevPhoto" href="#"><span></span></a>'+'<a class="galleryTrigger galleryLabel" href="#"><span>'+r.photoLabels[0]+"</span></a></span>");if(r.photoLabels[0]===undefined||r.photoLabels[0]===""){e(u).find(".galleryTrigger").hide()}}else{e(u).html('<div class="img" style="background:url('+r.photos.medium[0]+') no-repeat center;">'+'</div><a class="nextPhoto" href="#"><span></span></a><a class="prevPhoto" href="#"><span></span></a>'+'<a class="galleryTrigger" href="#"><span>'+r.zoomMsg+'</span></a><span class="photoFromProductCatalogueDesc">'+r.photoFromProductCatalogueMsg+'<a class="sIHelpIcon" style="margin:0 5px -2px;" href="#" data-helptip-body="'+r.productPhotoTip+'"></a></span>')}e(o).find("ul li:first-child").addClass("active");e(u).find("a.prevPhoto").addClass("disabled");if(r.photos.small.length===1){e(u).find("a.nextPhoto").addClass("disabled")}if(!r.productOnly){a=t.find("div.img")}e(u).find("a.nextPhoto span, a.prevPhoto span").hide();e(u).find("a.galleryTrigger").addClass("unavailable");e(u).find("a.prevPhoto").hover(function(){e(u).find("a.prevPhoto span").show()},function(){e(u).find("a.prevPhoto span").hide()});e(u).find("a.nextPhoto").hover(function(){e(u).find("a.nextPhoto span").show()},function(){e(u).find("a.nextPhoto span").hide()});e(u).hover(function(){e(u).find("a.galleryTrigger").removeClass("unavailable")},function(){e(u).find("a.galleryTrigger").addClass("unavailable")});f=false;if(e(o).find("li.active").hasClass("productPhoto")){e(u).find("span.photoFromProductCatalogueDesc").show()}else{e(u).find("span.photoFromProductCatalogueDesc").hide();f=true}if(r.external[0]===1&&r.photos.small.length===1){e(u).find("span.photoFromProductCatalogueDesc").show();f=false}if(r.zoomMsg===""&&f){e(u).find(".galleryTrigger").hide()}else{e(u).find(".galleryTrigger").show()}this.addEvents()},addEvents:function(){e(o).find("ul a").click(function(){s=e(o).find("ul li").index(e(this).parents("li"));if(!e(this).parent().hasClass("active")){var t=false;if(e(this).parent().hasClass("productPhoto")){e(u).find("span.photoFromProductCatalogueDesc").show()}else{e(u).find("span.photoFromProductCatalogueDesc").hide();t=true}if(r.zoomMsg===""&&t){e(u).find(".galleryTrigger").hide()}else{e(u).find(".galleryTrigger").show()}if(r.photoLabels!==undefined){if(r.photoLabels[e(this).parent().index()]!==undefined&&r.photoLabels[e(this).parent().index()]!==""){e(u).find(".galleryTrigger span").html(r.photoLabels[e(this).parent().index()]);e(u).find(".galleryTrigger").show()}else{e(u).find(".galleryTrigger").hide()}}e(this).parent().addClass("active").siblings().removeClass("active");if(r.productOnly){e(u).find("img").fadeOut(100,function(){e(this).attr("src",e("#product_desc").data("photos")[s][1]).unbind("load").load(function(){e(this).fadeIn(100)})})}else{e(u).find("div.img").fadeOut(100,function(){e(u).addClass("spinner");var t=new Image;e(t).load(function(){e(a).append(this);e(a).css("background-image","url("+r.photos.medium[s]+")");e(u).removeClass("spinner");e(a).fadeIn(100)}).attr("src",r.photos.medium[s]).hide();e("div.img img").remove()})}if(r.productOnly){if(s===0){e(u).find("a.nextPhoto").removeClass("disabled").siblings().addClass("disabled")}else if(s===e("#product_desc").data("photos").length-1){e(u).find("a.nextPhoto").addClass("disabled").siblings().removeClass("disabled")}else if(s===7){e(u).find("a.nextPhoto").addClass("disabled").siblings().removeClass("disabled")}else{e(u).find("a").removeClass("disabled")}}else{if(s===0){e(u).find("a.nextPhoto").removeClass("disabled").siblings().addClass("disabled")}else if(s===r.photos.small.length-1){e(u).find("a.nextPhoto").addClass("disabled").siblings().removeClass("disabled")}else{e(u).find("a").removeClass("disabled")}}}return false});e(u).delegate("a.prevPhoto","click",function(){var t=e(o).find("ul li.active").prev();if(t.length){t.find("a").click()}return false});e(u).delegate("a.nextPhoto","click",function(){var t=e(o).find("ul li.active").next();if(t.length){t.find("a").click()}return false});e(document).keyup(function(t){var n=t.which?t.which:t.keyCode;switch(n){case 37:e(u).find("a.prevPhoto").click();break;case 39:e(u).find("a.nextPhoto").click();break}});e("div.galleryContainer img, div.galleryContainer div.img, a.galleryTrigger").click(function(){f.showLarge();return false})},showLarge:function(){var t=e(document).height(),n,i,u,a,f,l,c,h,p="",d="",v=0,m=0,g,y=0,b=0,w=function(e){if(e!==0){l.css({opacity:1,cursor:"pointer"})}else{l.css({opacity:.5,cursor:"default"})}if(e!==y+r.photos.large.length-1){f.css({opacity:1,cursor:"pointer"})}else{f.css({opacity:.5,cursor:"default"})}};if(!e("#galContainer").length){e("body").append('<div id="overlay"></div><span class="prevPhoto"></span><span class="nextPhoto"></span><div id="thumbsWrap"><div id="thumbsContent"><ul></ul><div id="contentSlider"><div id="track"></div></div></div></div><div id="galContainer"><div id="imageWrapper"></div></div>');if(r.photos.small.length===1){e("body").find("span.nextPhoto").css({opacity:.5,cursor:"default"})}n=e("#thumbsWrap");i=e("#thumbsContent");u=e("#imageWrapper");a=e("#galContainer");c=e("#overlay");h=e("#contentSlider");f=e("span.nextPhoto");l=e("span.prevPhoto");if(r.photos.small.length>0){for(b=0;b<r.photos.small.length;b++){if(r.external[b]===1){p+='<li class="productPhoto">'}else{p+="<li>"}p+='<a href="#"><span class="thumbBg"><img src="'+r.photos.small[b]+'" width="100" height="75" alt=""></span></a></li>'}}i.find("ul").html(p).find(".thumbBg img").css("opacity",.5);if(r.photos.large.length>0){u.html('<span class="closeGallery"></span><img src="'+r.photos.large[s]+'" alt="" />')}else{u.html('<span class="closeGallery"></span><img src="'+e("#product_desc").data("photos")[0][2]+'" alt="" />')}n.find("ul li").eq(s).addClass("active").siblings().removeClass("active");n.find("ul li.active").find(".thumbBg img").css("opacity",1);l.css({top:e(window).scrollTop()+"px",opacity:.5,cursor:"default"});f.css({top:e(window).scrollTop()+"px"});if(i.find("li.active").hasClass("productPhoto")){u.append('<span class="productTipLarge">'+r.photoFromProductCatalogueMsg+' <a href="#" style="margin:0 0 -2px;" class="sIHelpIcon" data-helptip-body="'+r.productPhotoTip+'"></a></span>');e("#imageWrapper a.sIHelpIcon").helptip({event:"hover",pos:"t"});e("#imageWrapper a.sIHelpIcon").click(function(){return false})}else if(r.photoLabels!==undefined&&r.photoLabels[i.find("li.active").index()]){u.append('<span class="productTipLarge">'+r.photoLabels[i.find("li.active").index()]+"</span>")}if(r.photos.small.length<=8){i.find("#contentSlider").hide();i.css("width",i.find("ul li").size()*110+16)}else{i.css({width:"893px",height:"110px"});i.find("ul").css("width",r.photos.small.length*110+14);u.css({marginTop:"119px"});h.show().find("#track").slider({min:0,max:parseInt(i.find("ul").css("width"),10)-parseInt(i.css("width"),10),slide:function(e,t){i.find("ul").css("marginLeft","-"+t.value+"px")},change:function(e,t){i.find("ul").css("marginLeft","-"+t.value+"px")}})}c.css("height",t).css({opacity:"0.2"}).css({display:"block"}).animate({opacity:.9},300);n.fadeIn(300).css({top:e(window).scrollTop()+2+"px"});a.fadeIn(300).maximize({resize:"fill",zoomInLimit:1}).vCenter();i.find("a").live("click",function(){v=n.find("ul li").index(e(this).parents("li"));if(!e(this).parent().hasClass("active")){e(this).parent().addClass("active").siblings().removeClass("active");e(this).parents("ul").find(".thumbBg img").css("opacity",.6);e(this).parent().find(".thumbBg img").css("opacity",1);a.remove();e("body").append('<div id="galContainer"><div id="imageWrapper"></div></div>');u=e("#imageWrapper");a=e("#galContainer");if(e(this).parent().hasClass("productThumb")){u.html('<span class="closeGallery"></span><img src="'+g.search_results[0].photo[m][2]+'" alt="" />')}else{u.html('<span class="closeGallery"></span><img src="'+r.photos.large[v]+'" alt="" />')}if(e(this).parent().hasClass("productPhoto")){u.append('<span class="productTipLarge">'+r.photoFromProductCatalogueMsg+' <a href="#" style="margin:0 0 -2px;" class="sIHelpIcon" data-helptip-body="'+r.productPhotoTip+'"></a></span>');e("#imageWrapper a.sIHelpIcon").helptip({event:"hover",pos:"t"});e("#imageWrapper a.sIHelpIcon").click(function(){return false})}else if(r.photoLabels!==undefined&&r.photoLabels[i.find("li.active").index()]){u.append('<span class="productTipLarge">'+r.photoLabels[i.find("li.active").index()]+"</span>")}if(i.find("ul li").size()>8){u.css({marginTop:"119px"});var t=e("#track").slider("option","value"),s=i.find("ul li").size(),o=v*110;if(o<t){e("#track").slider("value",o)}else if(o+110>893+t){e("#track").slider("value",t+110)}}a.maximize({resize:"fill",zoomInLimit:1}).vCenter()}w(v);return false});w(s);n.find("div#thumbsContent").bind("mousewheel",function(e,t){if(t<0){f.click()}else{l.click()}return false});u.live("click",function(){a.hide();c.hide();n.hide();l.hide();f.hide();e(document).unbind("keyup");return false});l.click(function(){var t=n.find("ul li.active").prev();if(e(t).length){e(t).find("a").click()}if(v===0){e(this).css({opacity:.5,cursor:"default"})}return false});f.click(function(){var t=n.find("ul li.active").next();if(e(t).length){e(t).find("a").click()}if(v===r.photos.large.length-1){e(this).css({opacity:.5,cursor:"default"})}return false});e(document).bind("keyup",function(t){var r=t.which?t.which:t.keyCode;switch(r){case 37:l.click();break;case 39:f.click();break;case 27:a.hide();c.hide();n.hide();l.hide();f.hide();e(document).unbind("keyup");break}});e(window).scroll(function(){l.css({top:e(window).scrollTop()+"px"});f.css({top:e(window).scrollTop()+"px"});a.css({top:e(window).scrollTop()+"px"});n.css({top:e(window).scrollTop()+2+"px"})})}else{s=e(o).find("li.active").index();if(r.photos.large.length>0){e("#thumbsContent a").eq(s).click()}n=e("#thumbsWrap");c=e("#overlay");f=e("span.nextPhoto");l=e("span.prevPhoto");e("#galContainer").fadeIn(300);c.css("height",t).css({opacity:"0.2"}).css({display:"block"}).animate({opacity:.9},300);n.fadeIn(300);f.fadeIn(300);l.fadeIn(300);e(document).bind("keyup",function(t){var r=t.which?t.which:t.keyCode;switch(r){case 37:l.click();break;case 39:f.click();break;case 27:e("#galContainer").hide();c.hide();n.hide();l.hide();f.hide();e(document).unbind("keyup");break}})}}};f.init();this.newGallery=f;e("span.photoFromProductCatalogueDesc a.sIHelpIcon").helptip({event:"hover",pos:"r"});e("span.photoFromProductCatalogueDesc a.sIHelpIcon").click(function(){return false});e(".siGallery .galleryContainer").each(function(){var t=e(this).parents(".siGallery"),n=e(".galleryThumbs",t),r=n.find("li").length,i=n.find("li").css("width"),s=n.find("ul"),o,u,a=5;n.find("li a:last").css("margin-right","0");s.css("width",r*parseFloat(i)+"px");if(r>5){e(".galleryContainer",t).delegate("a.prevPhoto","click",function(){var e=n.find("li.active").index();if(e<a-5){n.parent().find("span.leftControl").click()}});e(".galleryContainer",t).delegate("a.nextPhoto","click",function(){var e=n.find("li.active").index()+1;if(e>a){n.parent().find("span.rightControl").click()}});n.parent().append('<span class="control leftControl lockArrow"></span><span class="control rightControl"></span>');o=n.parent().find("span.rightControl");u=n.parent().find("span.leftControl");n.parent().delegate("span.rightControl","click",function(){if(a+5<=r){s.animate({marginLeft:"-="+parseFloat(i)*5+"px"});a+=5;if(a===r){o.hide()}}else{s.animate({marginLeft:"-="+parseFloat(i)*(r-a)+"px"});a+=r-a;o.hide()}u.show()});n.parent().delegate("span.leftControl","click",function(){if(a-5>=5){s.animate({marginLeft:"+="+parseFloat(i)*5+"px"});a-=5;if(a===5){u.hide()}}else{s.animate({marginLeft:"0px"});a=5;u.hide()}o.show()});e("div.galleryContainer").delegate("a.nextPhoto","click",function(){if(n.find("li.active").index()<a-5){s.animate({marginLeft:"-="+parseFloat(i)*(n.find("li.active").index()-a+5)+"px"});a+=n.find("li.active").index()-a+5;if(a>=5){u.show()}else{u.hide()}if(a<r){o.show()}else{o.hide()}}});e("div.galleryContainer").delegate("a.prevPhoto","click",function(){if(n.find("li.active").index()>a-1){s.animate({marginLeft:"-="+parseFloat(i)*(n.find("li.active").index()-a+1)+"px"});a+=n.find("li.active").index()-a+1;if(a>=5){u.show()}else{u.hide()}if(a<r){o.show()}else{o.hide()}}});e("a.productPhoto").live("click",function(){var e=Math.ceil((n.find("li.productPhoto:first").index()+1)/5)-1,t=n.find("li.productPhoto:first").index()+1;if(t>a&&t<a+5){if(a+5<=r){s.animate({marginLeft:"-="+parseFloat(i)*5*e+"px"});a+=5*e;if(a===r){o.hide()}}else{s.animate({marginLeft:"-="+parseFloat(i)*(r-a)+"px"});a+=r-a;o.hide()}u.show()}else if(a-5>t){if(a-5>=5){s.animate({marginLeft:"+="+parseFloat(i)*5*e+"px"});a-=5*e;if(a===5){u.hide()}}else{s.animate({marginLeft:"0px"});a=5;u.hide()}o.show()}})}})})}})(jQuery)