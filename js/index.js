EventDeal.addEvent(window,"load",function(){

    /*顶部广告关闭事件*/
    var topbanner=document.getElementById("tb");//className，IE不支持，可以写一个兼容函数解决
    var closeBanner=document.getElementById("xx");
    //关闭topbanner事件
    EventDeal.addEvent(closeBanner,"click",function(){
        topbanner.parentNode.removeChild(topbanner);
    });

    /*登录弹窗事件*/

    var jdEnter=document.getElementById("jd-enter");
    var mask=document.getElementById("mask");
    EventDeal.addEvent(jdEnter,"click",function(){
        mask.style.display="block";
    });
    var closeX=document.getElementById("closeX");
    EventDeal.addEvent(closeX,"click",function(){
        mask.style.display="none";
    });

    /*轮播图圆圈导航的各种方法尝试*/

    var mainImage=document.getElementById("main-image");
    var roll=document.getElementById("roll")
/*               for(var i=1;i<=roll.children.length;i++) {
                   EventDeal.addEvent(roll.children[i - 1], "mouseover", function (evt) {
                       mainImage.src = "images/slider" + serialNumber(EventDeal.getTarget(evt)) + ".jpg";
                       for(var j=0;j<roll.children.length;j++){
                           if(serialNumber(roll.children[j])==serialNumber(EventDeal.getTarget(evt))){
                               roll.children[j].style.backgroundColor = "#C81633";
                           }else{
                               roll.children[j].style.backgroundColor = "#3E3E3E";
                           }
                       }
                   });
           }*/

    //（！！！）不用serialNumber函数，自定义一个index属性的方法

    for(var i=0;i<roll.children.length;i++) {
        roll.children[i].index=i;//自定义一个index属性，就知道他的位置
        EventDeal.addEvent(roll.children[i], "mouseover", function (evt) {
            mainImage.src = "images/slider" +(EventDeal.getTarget(evt).index+1)+ ".jpg";
            for(var j=0;j<roll.children.length;j++){
                if(j==EventDeal.getTarget(evt).index){
                    roll.children[j].style.backgroundColor = "#C81633";
                }else{
                    roll.children[j].style.backgroundColor = "#3E3E3E";
                }
            }
        });
    }

    //把相同的部分封装到函数里面，不同的部分通过参数传递,优点是更清晰简洁

    /*
               var mainImage=document.getElementById("main-image");
               var roll=document.getElementById("roll");
               var imagesArray=["slider1.jpg","slider2.jpg","slider3.jpg","slider4.jpg","slider5.jpg"];//双引号就近原则配对
               for(var i=0;i<roll.children.length;i++){
                   fn(roll.children[i],imagesArray[i]);
               }
               function fn(objLi,imageName){
                   EventDeal.addEvent(objLi,"mouseover",function(evt){
                           mainImage.src="images/"+imageName;
                           for(var j=0;j<roll.children.length;j++){
//                                var obj=EventDeal.getTarget(evt);
//                                var obc=roll.children[j];
//                                if(obj==obc){
//                                    obc.style.backgroundColor = "#C81633";
//                                }else{
//                                    obc.style.backgroundColor = "#3E3E3E";
//                                }
                               roll.children[j].style.backgroundColor = "#3E3E3E";
                           }//排它思想的运用
                       EventDeal.getTarget(evt).style.backgroundColor = "#C81633";
                       })
               }
               */
    /*
     var pattern=/(\d).jpg$/;
     var leftArrow=document.getElementById("al");
     var rightArrow=document.getElementById("ar");
     //                var mainImage=document.getElementById("main-image");
     //                var roll=document.getElementById("roll");
     EventDeal.addEvent(leftArrow,"click",function(){
     var imageNum=parseInt(mainImage.src.match(pattern)[1]);
     if(imageNum-1){
     mainImage.src= "images/slider" + (imageNum-1)+ ".jpg"
     }else{
     mainImage.src= "images/slider" + roll.children.length+ ".jpg"
     }
     for(var j=0;j<roll.children.length;j++){
     if(roll.children[j].innerHTML==mainImage.src.match(pattern)[1]){
     roll.children[j].style.backgroundColor = "#C81633";
     }else{
     roll.children[j].style.backgroundColor = "#3E3E3E";
     }
     }
     });
     EventDeal.addEvent(rightArrow,"click",function(){
     var imageNum=parseInt(mainImage.src.match(pattern)[1]);
     if(imageNum+1<=roll.children.length){
     mainImage.src= "images/slider" + (imageNum+1)+ ".jpg";
     }else{
     mainImage.src= "images/slider1.jpg";
     }
     for(var j=0;j<roll.children.length;j++){
     if(serialNumber(roll.children[j])==parseInt(mainImage.src.match(pattern)[1])){
     roll.children[j].style.backgroundColor = "#C81633";
     }else{
     roll.children[j].style.backgroundColor = "#3E3E3E";
     }
     }
     })
     */

    /*左右箭头的事件*/
    var imagesArray=["slider1.jpg","slider2.jpg","slider3.jpg","slider4.jpg","slider5.jpg"];//双引号就近原则配对
    var leftArrow=document.getElementById("al");
    var rightArrow=document.getElementById("ar");
    EventDeal.addEvent(leftArrow,"click",function(){
        for(var i=0;i<imagesArray.length;i++){
            if(mainImage.src.indexOf(imagesArray[i])!=-1){
                break;
            }
        }
        if(i==0){
            mainImage.src="images/"+imagesArray[imagesArray.length-1];
        }else {
            mainImage.src="images/"+imagesArray[i-1];
        }
        for(var j=0;j<roll.children.length;j++){
            roll.children[j].style.backgroundColor = "#3E3E3E";
        }//排它思想的运用
        if(i==0){
            roll.children[roll.children.length-1].style.backgroundColor = "#C81633";
        }else {
            roll.children[i-1].style.backgroundColor = "#C81633";
        }
    })

    /*服务栏 背景图一次性注入*/

    var serviceLi=document.getElementById("service-id").getElementsByTagName("li");
    for(var i=0;i<serviceLi.length;i++){
        serviceLi[i].getElementsByTagName("i")[0].style.backgroundPosition="-26px "+i*(-25)+"px";
    }
});
