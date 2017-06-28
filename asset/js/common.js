/**
 * Created by Administrator on 2017/6/14 0014.
 * Author L
 * QQ 1164898318
 * 公共函数
 */
function addHandler(){

}
/*简单轮播图 --start*/
function carousel(){
    var carousel = document.getElementById("carousel").getElementsByTagName("li");
    var i=0;
    setInterval(function(){
        if(i>=carousel.length){
            carousel[i-1].style.zIndex="0";
            i=0;
        }
        var pre = i-1>0?i-1:0;
        carousel[pre].style.zIndex="0";
        carousel[i].style.zIndex="99";
        i++;
    },2000)
}
/*简单轮播图 --end*/
/*ajax-start*/
function createXml(){
    if(typeof XMLHttpRequest !="undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject !="undefined"){
        if(typeof arguments.callee.activeXString!="String"){
            var version = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,leg;
            for(i=0,leg=version.length;i<leg;i++){
                try{
                    new ActiveXObject(version[i]);
                    arguments.callee.activeXString=version[i];
                    break;
                }catch(e){}
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    }else{
        throw new Error("No XML object available");
    }
}
function request(){
    var xhr = createXml();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            alert(xhr.responseText);
        }else{
            console.log("request fail,"+xhr.status)
        }
    };
    xhr.open("get","xml.txt",true);
    xhr.send(null);
}
/*ajax-end*/