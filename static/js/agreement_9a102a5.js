!function(e){function n(t){if(i[t])return i[t].exports;var s=i[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var i={};return n.m=e,n.c=i,n.p="//res.wx.qq.com/t/wx_fed/weixin_portal/res",n(0)}({0:function(e,n,i){e.exports=i(31)+i(33)},22:function(e,n){},29:function(e,n){},31:function(e,n){},33:function(e,n){!function(){function e(e){var n=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}function n(e){var n=document.getElementById(e+"_src")?document.getElementById(e+"_src").getAttribute("href"):void 0,i=document.getElementById(e+"_dist");n?i.setAttribute("href",n+"&head=true"):i.style.display="none"}function i(){var i=document.getElementById("lang_dist"),t=document.getElementById("lang_src");if(t&&i){n("zh_CN"),n("zh_HK"),n("zh_TW"),n("en_US");var s=e("lang")||"zh_CN";document.getElementById(s+"_dist").className+=" current",i.style.display="flex"}}function t(){function e(e){c=e;for(var n=document.getElementsByClassName("catalog-link"),i=0;i<n.length;i++)n[i].className=n[i].className.replace(/\bcurrent\b/g,"");n[e].className.indexOf("current")===-1&&(n[e].className+=" current"),p.style.top=n[e].offsetTop+"px"}var n=document.getElementById("js_content");if(n){var i=n.getElementsByTagName("h2"),t=n.getBoundingClientRect();if(!i.length)return;var s=document.createElement("div"),a=document.createElement("div");a.style="max-width: "+(t.left-96)+"px";var p=document.createElement("div");p.className="catalog-index",s.appendChild(a),a.className="catalog",s.className="catalog-wrp";for(var l=!1,r=null,c=0,d=0;d<i.length;d++){var o=i[d],g=document.createElement("div");g.className="catalog-item";var b=document.createElement("a");b.className="catalog-link",b.setAttribute("data-index",d),0===d&&(b.className+=" current"),b.innerText=o.innerText,b.href="#"+o.id;window.location.hash=="#"+o.id;g.appendChild(b),a.appendChild(g),b.addEventListener("click",function(){l=!0,null!==r&&clearTimeout(r),r=setTimeout(function(){l=!1,r=null},1500),e(this.getAttribute("data-index"))})}document.addEventListener("scroll",function(n){if(!l){for(var t={val:100,index:null},s=0;s<i.length;s++){var a=i[s],p=a.getBoundingClientRect();Math.abs(p.top)<t.val&&(t.val=p.top,t.index=s)}null!==t.index&&t.index!==c&&e(t.index)}}),a.appendChild(p),n.appendChild(s)}}t(),i(),setTimeout(function(){var e=document.querySelector(".iframe");e&&(e.className+=" show")},200);var s=navigator.userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1;if(s){var a=document.getElementById("upgrade_notice");a&&(a.style.display="block")}var p=e("text_adjust");p&&(document.body.style="-webkit-text-size-adjust:"+p+"%;")}()}});