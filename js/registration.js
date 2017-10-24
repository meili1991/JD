
/* 原生JS实现用户名验证*/

EventDeal.addEvent(window,"load",function(){
    EventDeal.addEvent($("input1"),"focus",function(evt){
        if(EventDeal.getTarget(evt).value==""){
            EventDeal.getTarget(evt).style.color="#3e3e3e";
            $("remind1").childNodes[1].nodeValue='支持中文、字母、数字、"-" "_" 的组合4-20个字符 ';
            $("remind1").style.color="#ccc";
            removeClass($("remind1").getElementsByTagName("i")[0],"i-error");
            addClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
        }
    });
    EventDeal.addEvent($("input1"),"blur",function(evt){
        if(EventDeal.getTarget(evt).value==""){
            EventDeal.getTarget(evt).style.color="#ccc";
            $("remind1").childNodes[1].nodeValue='';
            $("remind1").style.color="#ccc";
            removeClass($("remind1").getElementsByTagName("i")[0],"i-error");
            removeClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
        }else if(getStrlen(EventDeal.getTarget(evt).value)<4||getStrlen(EventDeal.getTarget(evt).value)>20){
            addClass($("box1"),"box-error");
            $("remind1").childNodes[1].nodeValue="长度只能在4-20个子符之间";
            $("remind1").style.color="#e31726";
            removeClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
            addClass($("remind1").getElementsByTagName("i")[0],"i-error")
        }
        if(/^\d+$/.test(EventDeal.getTarget(evt).value)){
            addClass($("box1"),"box-error");
            $("remind1").childNodes[1].nodeValue="用户名不能是纯数字，请重新输入！";
            $("remind1").style.color="#e31726";
            removeClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
            addClass($("remind1").getElementsByTagName("i")[0],"i-error")
        }
    });
    EventDeal.addEvent($("input1"),"keyup",function(evt){
        removeClass($("box1"),"box-error");
        EventDeal.getTarget(evt).style.color="#3e3e3e";
        $("remind1").childNodes[1].nodeValue='支持中文、字母、数字、"-" "_" 的组合4-20个字符 ';
        $("remind1").style.color="#ccc";
        removeClass($("remind1").getElementsByTagName("i")[0],"i-error");
        addClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
    });
    EventDeal.addEvent($("input1"),"keyup",function(evt){
        if(/[^\u4e00-\u9fa5_a-zA-Z0-9-]/.test(EventDeal.getTarget(evt).value)){
            addClass($("box1"),"box-error");
            $("remind1").childNodes[1].nodeValue="格式错误，仅支持汉字、字母、数字、“-”“_”的组合";
            $("remind1").style.color="#e31726";
            removeClass($("remind1").getElementsByTagName("i")[0],"i-nomal");
            addClass($("remind1").getElementsByTagName("i")[0],"i-error")
        }
    });
})
