
/*左右tab栏切换*/

EventDeal.addEvent(window,"load",function(){
    var la=document.getElementById("la");
    var ra=document.getElementById("ra");
    var showLi=document.getElementById("li-show");
    var oldLi=document.getElementById("old-li");
    EventDeal.addEvent(la,"click",function(){
        showLi.style.display="block";
        oldLi.style.display="none";
        la.className="a-cw";
        ra.className="";
    });
    EventDeal.addEvent(ra,"click",function(){
        showLi.style.display="none";
        oldLi.style.display="block";
        la.className="";
        ra.className="a-cw"
    });
    var text1=$("text1");
    var text2=$("text2");
    searchChange(text1,"");
    searchChange(text2,"");
    function labchange(iput,label,className){
        EventDeal.addEvent(iput,"focus",function(){
            addClass(label,className);
        });
        EventDeal.addEvent(iput,"blur",function(){
            removeClass(label,className);
        });
    }
    labchange(text1,$("lab1"),"cursor-p1");
    labchange(text2,$("lab2"),"cursor-p2");
})
