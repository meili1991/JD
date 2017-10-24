/**
 * Created by Administrator on 2017/8/19.
 */
var EventDeal={
    //1.获取event对象
    getEvent:function(evt){
        return evt||window.event;
    },
    //2.获取事件目标
    getTarget:function(evt){
        if(evt&&evt.target){
            return evt.target
        }else{
            return window.event.srcElement;
        }
    },
    //3.阻止默认事件
    removeDefault:function(evt){
        if(evt&&evt.preventDefault){
            evt.preventDefault();
        }else{
            window.event.returnValue=false;
        }
    },
    //4.阻止冒泡
    stopBubble:function(evt){
        if(evt&&evt.stopPropagation){
            evt.stopPropagation();
        }else{
            window.event.cancelBubble=true;
        }
    },
    //5.添加一个事件（冒泡阶段触发）
    addEvent:function(element,type,fn){
        if(element.addEventListener){
            element.addEventListener(type,fn,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,fn);
        }
    },
    //6.移除一个事件
    removeEvent:function (element,type,fn){
        if (element.removeEventListener) {
            element.removeEventListener(type,fn,false);
        } else if (obj.detachEvent) {
            element.detachEvent('on'+type,fn);
        }
    },
    //7.获取charcode
    getCharCode:function(evt){
        var e=evt||window.event;
        if(typeof e.charCode=="number"){
            return e.charCode;
        }else return e.keyCode;
    }
};