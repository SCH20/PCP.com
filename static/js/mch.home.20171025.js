window['MCH.home.time'] && window['MCH.home.time'].push(new Date());
function $addToken(url,type,skey){var token=$getToken(skey);if(url==""||(url.indexOf("://")<0?location.href:url).indexOf("http")!=0){return url;}
if(url.indexOf("#")!=-1){var f1=url.match(/\?.+\#/);if(f1){var t=f1[0].split("#"),newPara=[t[0],"&g_tk=",token,"&g_ty=",type,"#",t[1]].join("");return url.replace(f1[0],newPara);}else{var t=url.split("#");return[t[0],"?g_tk=",token,"&g_ty=",type,"#",t[1]].join("");}}
return token==""?(url+(url.indexOf("?")!=-1?"&":"?")+"g_ty="+type):(url+(url.indexOf("?")!=-1?"&":"?")+"g_tk="+token+"&g_ty="+type);};var $ajax=(function(window,undefined){var oXHRCallbacks,xhrCounter=0;var fXHRAbortOnUnload=window.ActiveXObject?function(){for(var key in oXHRCallbacks){oXHRCallbacks[key](0,1);}}:false;return function(opt){var o={url:'',method:'GET',data:null,type:"text",async:true,cache:false,timeout:0,autoToken:true,username:'',password:'',beforeSend:$empty(),onSuccess:$empty(),onError:$empty(),onComplete:$empty()};for(var key in opt){o[key]=opt[key]}
var callback,timeoutTimer,xhrCallbackHandle,ajaxLocation,ajaxLocParts;try{ajaxLocation=location.href;}
catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/.exec(ajaxLocation.toLowerCase())||[];o.isLocal=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ajaxLocParts[1]);o.method=(typeof(o.method)!="string"||o.method.toUpperCase()!="POST")?"GET":"POST";o.data=(typeof o.data=="string")?o.data:$makeUrl(o.data);if(o.method=='GET'&&o.data){o.url+=(o.url.indexOf("?")<0?"?":"&")+o.data;}
if(o.autoToken){o.url=$addToken(o.url,"ajax");}
o.xhr=$xhrMaker();if(o.xhr===null){return false;}
try{if(o.username){o.xhr.open(o.method,o.url,o.async,o.username,o.password);}
else{o.xhr.open(o.method,o.url,o.async);}}
catch(e){o.onError(-2,e);return false;}
if(o.method=='POST'){o.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
if(!o.cache){o.xhr.setRequestHeader('If-Modified-Since','Thu, 1 Jan 1970 00:00:00 GMT');o.xhr.setRequestHeader('Cache-Control','no-cache');}
o.beforeSend(o.xhr);if(o.async&&o.timeout>0){if(o.xhr.timeout===undefined){timeoutTimer=setTimeout(function(){if(o.xhr&&callback){callback(0,1);}
o.onError(0,null,'timeout');},o.timeout);}
else{o.xhr.timeout=o.timeout;o.xhr.ontimeout=function(){if(o.xhr&&callback){callback(0,1);}
o.onError(0,null,'timeout');};}}
o.xhr.send(o.method=='POST'?o.data:null);callback=function(e,isAbort){if(timeoutTimer){clearTimeout(timeoutTimer);timeoutTimer=undefined;}
if(callback&&(isAbort||o.xhr.readyState===4)){callback=undefined;if(xhrCallbackHandle){o.xhr.onreadystatechange=$empty();if(fXHRAbortOnUnload){try{delete oXHRCallbacks[xhrCallbackHandle];}
catch(e){}}}
if(isAbort){if(o.xhr.readyState!==4){o.xhr.abort();}}
else{var status,statusText,responses;responses={headers:o.xhr.getAllResponseHeaders()};status=o.xhr.status;try{statusText=o.xhr.statusText;}
catch(e){statusText="";}
try{responses.text=o.xhr.responseText;}
catch(e){responses.text="";}
if(!status&&o.isLocal){status=responses.text?200:404;}
else if(status===1223){status=204;}
if(status>=200&&status<300){responses.text=responses.text.replace(/<!--\[if !IE\]>[\w\|]+<!\[endif\]-->/g,'');switch(o.type){case'text':o.onSuccess(responses.text);break;case"json":var json;try{json=(new Function("return ("+responses.text+")"))();}
catch(e){o.onError(status,e,responses.text);}
if(json){o.onSuccess(json);}
break;case"xml":o.onSuccess(o.xhr.responseXML);break;}}
else{if(status===0&&o.timeout>0){o.onError(status,null,'timeout');}
else{o.onError(status,null,statusText);}}
o.onComplete(status,statusText,responses);}
delete o.xhr;}};if(!o.async){callback();}
else if(o.xhr.readyState===4){setTimeout(callback,0);}
else{xhrCallbackHandle=++xhrCounter;if(fXHRAbortOnUnload){if(!oXHRCallbacks){oXHRCallbacks={};if(window.attachEvent){window.attachEvent("onunload",fXHRAbortOnUnload);}
else{window["onunload"]=fXHRAbortOnUnload;}}
oXHRCallbacks[xhrCallbackHandle]=callback;}
o.xhr.onreadystatechange=callback;}};})(window,undefined);function $empty(){return function(){return true;}};function $getCookie(name){var reg=new RegExp("(^| )"+name+"(?:=([^;]*))?(;|$)"),val=document.cookie.match(reg);return val?(val[2]?unescape(val[2]):""):null;};function $getToken(skey){var skey=skey?skey:$getCookie("skey");return skey?$time33(skey):"";};function $makeUrl(data){var arr=[];for(var k in data){arr.push(k+"="+data[k]);};return arr.join("&");};function $namespace(name){for(var arr=name.split(','),r=0,len=arr.length;r<len;r++){for(var i=0,k,name=arr[r].split('.'),parent={};k=name[i];i++){i===0?eval('(typeof '+k+')==="undefined"?('+k+'={}):"";parent='+k):(parent=parent[k]=parent[k]||{});}}};function $setCookie(name,value,expires,path,domain,secure){var exp=new Date(),expires=arguments[2]||null,path=arguments[3]||"/",domain=arguments[4]||null,secure=arguments[5]||false;expires?exp.setMinutes(exp.getMinutes()+parseInt(expires)):"";document.cookie=name+'='+escape(value)+(expires?';expires='+exp.toGMTString():'')+(path?';path='+path:'')+(domain?';domain='+domain:'')+(secure?';secure':'');};function $strTrim(str,code){var argus=code||"\\s";var temp=new RegExp("(^"+argus+"*)|("+argus+"*$)","g");return str.replace(temp,"");};function $time33(str){for(var i=0,len=str.length,hash=5381;i<len;++i){hash+=(hash<<5)+str.charAt(i).charCodeAt();};return hash&0x7fffffff;};function $xhrMaker(){var xhr;try{xhr=new XMLHttpRequest();}catch(e){try{xhr=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xhr=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xhr=null;}}};return xhr;};$namespace("MCH.home");MCH.home={tenpayEdit:''};MCH.home.init=function(){homeThat=this;homeThat.tenpayEdit=new MCH.mmpayEdit({bindObjId:"mmpayPwdEdit",width:258,height:44},{isShowFunc:MCH.home.isShowFunc,returnCallBack:MCH.home.editShowReturn},this);this.bind();Common.exdAttrBrowser();};MCH.home.isShowFunc=function(){var username=$strTrim($(".login-form").find("input[name=username]").val());if(Common.isTenpayMchByName(username)){return true;}else{return false;}};MCH.home.editShowReturn=function(editRet){var browserFunc=function(){var sys=Common.getBrowserVersion();if(sys.osType=="mac"&&sys.browserName=="Safari"){$("#IDBrowserSafariTips").removeClass("hide");}else if(sys.osType=="mac"&&sys.browserName=="Chrome"&&sys.browserVersion>="47"){$("#IDBrowserMacChromeTips").removeClass("hide");}else if(sys.osType=="windows"&&sys.browserName!="IE"){$("#IDBrowserMacChromeTips").removeClass("hide");}};try{var version=editRet.editObj.ctrl.Version.toString();if(version&&(version>1206)){return true;}else{browserFunc();}}catch(e){browserFunc();}};MCH.home.focus_fuc=function(){$(".login-form").removeClass("login-account-on");$(".login-form").addClass("login-password-on");};MCH.home.blur_fuc=function(){$(".login-form").removeClass("login-password-on");};MCH.home.enter_fuc=function(){return null;};MCH.home.ossAttrIncAPI=function(id,key){var postData='id='+id+'&key='+key;$ajax({url:'/webreport/ossattrapi',data:postData,method:'post',type:'json',async:true,onSuccess:function(data){},onError:function(msg){}});};MCH.home.userNameBlur=function(){var username=$(".login-form").find("input[name=username]").val();var length=username.length;switch(length){case 0:MCH.home.ossAttrIncAPI(63769,18);break;case 1:MCH.home.ossAttrIncAPI(63769,19);break;case 2:MCH.home.ossAttrIncAPI(63769,20);break;case 3:MCH.home.ossAttrIncAPI(63769,21);break;case 4:MCH.home.ossAttrIncAPI(63769,22);break;case 5:MCH.home.ossAttrIncAPI(63769,23);break;case 6:MCH.home.ossAttrIncAPI(63769,24);break;case 7:MCH.home.ossAttrIncAPI(63769,25);break;case 8:MCH.home.ossAttrIncAPI(63769,26);break;case 9:MCH.home.ossAttrIncAPI(63769,27);break;case 10:MCH.home.ossAttrIncAPI(63769,28);break;default:MCH.home.ossAttrIncAPI(63769,29);break;}
var ua=navigator.userAgent.toLowerCase();var reg=/[Aa]ndroid/;if(reg.test(ua)){MCH.home.ossAttrIncAPI(63769,31);}else{MCH.home.ossAttrIncAPI(63769,32);}};MCH.home.bind=function(){if($getCookie("username")){MCH.home.ossAttrIncAPI(63769,30);$("input[name=username]").val($getCookie("username"));$("#memory_username").addClass('cbx-on');}
$("input[name=username]").on('focus',function(){MCH.home.ossAttrIncAPI(63769,17);$(".login-form").removeClass("login-password-on");$(".login-form").addClass("login-account-on");});$("input[name=password]").on('focus',function(){$(".login-form").removeClass("login-account-on");$(".login-form").addClass("login-password-on");homeThat.tenpayEdit.show();});$("#memory_username_label").on('click',function(){if($('#memory_username').hasClass('cbx-on')){$('#memory_username').removeClass('cbx-on');}else{$('#memory_username').addClass('cbx-on');}});$("#do_login").on('click',function(){$("#errmsg").text("").addClass('hide');var temp_usrname=$(".login-form").find("input[name=username]").val();$(".login-form").find("input[name=username]").val($strTrim(temp_usrname));if($("#memory_username").hasClass('cbx-on')){$setCookie('username',$("input[name=username]").val(),'3600');}else{$setCookie('username',$("input[name=username]").val());}
var username=$(".login-form").find("input[name=username]").val();var password=$(".login-form").find("input[name=password]").val();password=homeThat.tenpayEdit.getPwd();if(username&&password){password=Common.encryptPassword(password);if($(".login-verify").html()){if($("input[name=checkword_in]").val()){if($("input[name=checkword_in]").val().length!=4){$("#errmsg").text('请检查验证码').removeClass('hide');}else{$(".login-form").find("input[name=password]").val(password);$(".login-form").submit();}}
else{$("#errmsg").text('请输入验证码').removeClass('hide');}}else{$(".login-form").find("input[name=password]").val(password);$(".login-form").submit();}}else{if(username.length==0&&password===false){$("#errmsg").text('请输入帐号和密码').removeClass('hide');}else if(username.length==0){$("#errmsg").text('请输入登录帐号').removeClass('hide');}else{$("#errmsg").text(homeThat.tenpayEdit.errmsg).removeClass('hide');}}});$(".forget-password").on('click',function(){$("#IDForgetPwdDialog").removeClass("hide");});$("#IDCloseErrorDialog").on('click',function(){$("#IDForgetPwdDialog").addClass("hide");});};MCH.home.init();
window['MCH.home']='22134:20171025:20171025111311';
window['MCH.home.time'] && window['MCH.home.time'].push(new Date());/*  |xGv00|081917a66a23ff465831257ae6059c4c */