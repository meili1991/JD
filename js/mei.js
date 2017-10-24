/**
 * Created by Administrator on 2017/9/28.
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
var Mei={
    //通过className获取文档对象集合（自定义getElementsByClassName)
    getByClassName:function (obj,className) {
        if(obj.getElementsByClassName){
            return obj.getElementsByClassName(className);
        }
        var arr=[];
        var doms=obj.getElementsByTagName("*");
        for(var i=0;i<doms.length;i++){
            if(new RegExp('(\\s|^)'+className+'(\\s|$)').test(doms[i].className)){
                arr.push(doms[i]);
            }
        }
        return arr
    },
    //仿jquery选择器
    $:function(str){
        var s=str.charAt(0);
        var ss=str.substring(1);
        switch(s)
        {
            case "#":
                return document.getElementById(ss);
            case ".":
                return Mei.getByClassName(document,ss);
            default:
                return document.getElementsByTagName(str);
        }
    },
    //得到元素节点是父亲内部的index（忽略掉空白和文本节点）
    serialNumber:function(obj){
        var mg=obj;
        for(var i=0;i<mg.parentNode.children.length;i++) {
            var obj2 = mg.parentNode.children[i];
            if (mg == obj2) {
                return i;
            }
        }
    },
    //判断是否存在这个class
    hasClass:function(element, className){
        if(className!=""){
            return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
        }else {
            return true;
        }
    },
    //添加一个或多个class，如果不存在的话，（多个class以空格隔开）
    addClass:function(element, className){
        var classArray=className.split(" ");//分割className，并且屏蔽掉className=空格或者多个空格的情况
        for(var i=0;i<classArray.length;i++){
            if (!Mei.hasClass(element, classArray[i])) {
                if(/\s$/.test(element.className)||element.className==""){
                    element.className +=classArray[i];
                }else {
                    element.className +=" "+classArray[i];
                }
            }
        }
    },
    //删除一个或多个class，如果存在的话（多个class以空格隔开）
    removeClass: function(element, className){
        var classArray=className.split(" ");
        for(var i=0;i<classArray.length;i++){
            if (Mei.hasClass(element, classArray[i])) {
                element.className = element.className.replace(
                    new RegExp('(\\s|^)'+classArray[i]+'(\\s|$)')," ");
            }
        }
    },
    //获取字符串实际长度，区分中英文。(把双字节的替换成两个单字节的然后再获得长度 )
    getStrlen:function(str){
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g,"01").length;
    },
    //获取字符串实际长度，方法二
    getStringLength:function(str){
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        var len=0;
        for(var i=0;i<str.length;i++){
            str.charCodeAt(i)>127 ? len+=2 : len++;
        }
        return len;
    },
    //获取 m 到 n 之间的随机整数
    getRandom:function(m,n){
        return Math.floor(Math.random()*(n-m+1)+m);
    }
};