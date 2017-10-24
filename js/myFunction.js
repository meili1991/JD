/**
 * Created by Administrator on 2017/9/5.
 */

//得到元素节点是父亲内部的第几个（忽略掉空白和文本节点）
function serialNumber(obj){
    var mg=obj;
    for(var i=0;i<mg.parentNode.children.length;i++) {
        var obj2 = mg.parentNode.children[i];
        if (mg == obj2) {
            return i + 1;
        }
    }
}
//id对象获取函数
function $(id){
    return document.getElementById(id);
}
//搜索框，清空及初始化value的函数
function searchChange(input_obj,start_value){
    EventDeal.addEvent(input_obj,"focus",function(evt){
        if(EventDeal.getTarget(evt).value==start_value){
            EventDeal.getTarget(evt).value="";
        }
        EventDeal.getTarget(evt).style.color="#333";
    });
    EventDeal.addEvent(input_obj,"blur",function(evt){
        if(EventDeal.getTarget(evt).value==""){
            EventDeal.getTarget(evt).value=start_value;
        }
        EventDeal.getTarget(evt).style.color="#ccc";
    })
}
//className添加和删除函数
//在添加className的时候，我们想给一个元素添加多个class是没有办法的，后面一个必将覆盖掉前面一个，所以必须来写个函数：

//判断是否存在这个class
function hasClass(element, className) {
    if(className!=""){
        return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
    }else {
        return true;
    }
}
//添加一个或多个class，如果不存在的话，（多个class以空格隔开）
function addClass(element, className) {
    var classArray=className.split(" ");//分割className，并且屏蔽掉className=空格或者多个空格的情况
    for(var i=0;i<classArray.length;i++){
        if (!hasClass(element, classArray[i])) {
            if(/\s$/.test(element.className)||element.className==""){
                element.className +=classArray[i];
            }else {
                element.className +=" "+classArray[i];
            }
        }
    }
}
//删除一个或多个class，如果存在的话（多个class以空格隔开）
function removeClass(element, className) {
    var classArray=className.split(" ");
    for(var i=0;i<classArray.length;i++){
        if (hasClass(element, classArray[i])) {
            element.className = element.className.replace(
                new RegExp('(\\s|^)'+classArray[i]+'(\\s|$)')," ");
        }
    }
}

//获取字符串实际长度，区分中英文。(把双字节的替换成两个单字节的然后再获得长度 )
function getStrlen(str){
    if (str == null) return 0;
    if (typeof str != "string"){
        str += "";
    }
    return str.replace(/[^\x00-\xff]/g,"01").length;
}
//获取字符串实际长度，方法二
function getStringLength(str){
    if (str == null) return 0;
    if (typeof str != "string"){
        str += "";
    }
    var len=0;
    for(var i=0;i<str.length;i++){
        str.charCodeAt(i)>127 ? len+=2 : len++;
    }
    return len;
}
//获取 m 到 n 之间的随机整数
function getRandom(m,n){
    return Math.floor(Math.random()*(n-m+1)+m);
}
//通过className获取文档对象集合（自定义getElementsByClassName)
function getByClassName(obj,className){
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
}
//Ajax封装
// var options={
//     type: "GET",
//     url: "mei.php",
//     sendData: {name:"meili",age:26},
//     backDataType: "json",
//     success: function(Text,XML){},
//     fail:function(status){}
// };
function ajax(options){
    var xhr=null;
    if(window.XMLHttpRequest){//标准浏览器
        xhr=new XMLHttpRequest();
    }else{//IE浏览器
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var type=options.type.toUpperCase();
    var params=params(options.sendData);
    if(type=="GET"){
        url=options.url+"?"+params+"&t="+new Date().getTime();
        xhr.open(type,url,true);
        xhr.send(null);
    }else if(type=="POST"){
        url=options.url;
        xhr.open(type,url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status>=200 && xhr.status<300){
                options.success && options.success(xhr.responseText,xhr.responseXML)
            }else{
                options.fail && options.fail(xhr.status);
            }
        }
    };
    function params(data){
        var arr=[];
        for(var name in data){
            arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data.name));
        }
        return arr.join("&");
    }
}

