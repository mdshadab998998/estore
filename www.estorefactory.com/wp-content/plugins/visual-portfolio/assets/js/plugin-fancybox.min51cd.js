!function(){const o=window.jQuery,{VPData:e,VPPopupAPI:t}=window,{__:n,settingsPopupGallery:s}=e,c=o(document),a=o(window);if(void 0!==o.fancybox&&t){let e;t.vendor="fancybox",t.open=function(c,a,h){const i=[];c.forEach((o=>{"embed"===o.type&&o.src?i.push({type:"iframe",src:o.src,opts:{width:o.width,height:o.height}}):"embed"===o.type&&o.embed?i.push({type:"html",src:o.embed,opts:{width:o.width,height:o.height}}):i.push({type:"image",src:o.src,el:o.el,opts:{width:o.width,height:o.height,srcset:o.srcset,caption:o.caption,thumb:o.srcSmall}})}));const r=[];s.show_zoom_button&&r.push("zoom"),s.show_fullscreen_button&&r.push("fullScreen"),s.show_slideshow&&r.push("slideShow"),s.show_thumbs&&r.push("thumbs"),s.show_share_button&&r.push("share"),s.show_download_button&&r.push("download"),s.show_close_button&&r.push("close");const b={closeExisting:!0,loop:!0,arrows:s.show_arrows,infobar:s.show_counter,smallBtn:!1,toolbar:"auto",buttons:r,baseClass:"vp-fancybox",hideScrollbar:!0,wheel:!1,clickContent:o=>!("image"!==o.type||!s.click_to_zoom)&&"zoom",lang:"wordpress",i18n:{wordpress:{CLOSE:n.fancybox_close,NEXT:n.fancybox_next,PREV:n.fancybox_prev,ERROR:n.fancybox_error,PLAY_START:n.fancybox_play_start,PLAY_STOP:n.fancybox_play_stop,FULL_SCREEN:n.fancybox_full_screen,THUMBS:n.fancybox_thumbs,DOWNLOAD:n.fancybox_download,SHARE:n.fancybox_share,ZOOM:n.fancybox_zoom}},beforeClose(){const o=c[e.currIndex];o&&t.maybeFocusGalleryItem(o),h&&h.emitEvent("beforeCloseFancybox",[b,c,e]),e=!1},beforeShow(o,e){h&&h.emitEvent("beforeShowFancybox",[o,e])}};h&&h.emitEvent("beforeInitFancybox",[b,i,a]),1===c.length&&(b.loop=!1),e=o.fancybox.open(i,b,a),h&&h.emitEvent("initFancybox",[b,i,a,e])},t.close=function(){e&&(e.close(),e=!1)},c.on("transitionend",".fancybox-content",(function(){const e=o(this).find(".fancybox-image[sizes]"),t="".concat(Math.round(e.width()/a.width()*100),"vw");e.attr("sizes",t)}))}}();