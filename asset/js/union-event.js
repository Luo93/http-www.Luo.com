//事件兼容
var EventUnion={
    addHandler:function(ele,type,handler){
       if(ele.addEventListener){
           ele.addEventListener(type,handler,false);
       }else if(ele.attachEvent){
           ele.addEventListener("on"+type,handler);
       }else{
           ele["on"+type]=handler;
       }
    },
    removeHandler:function(ele,type,handler){
        if(ele.removeEventListener){
            ele.removeEventListener(type,handler,false);
        }else if(ele.detachEvent){
            ele.detachEvent("on"+type,handler);
        }else{
            ele["on"+type]=null;
        }
    }
};
//e.g
var btn = document.getElementById("eg");
var handler = function(){
    alert("Hello world!");
};
EventUnion.addHandler(btn,"click",handler);

