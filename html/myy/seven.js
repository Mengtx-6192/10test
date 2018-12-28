window.onload=function(){
    var btn1=document.querySelector(".btn1");
    var btn2=document.querySelector(".btn2");
    var btn3=document.querySelector(".btn3");
    var btn4=document.querySelector(".btn4");
    var emailIpt=document.querySelector("#email");
    var timeIpt=document.querySelector("#time");
    btn1.onclick=function(){
        var flag=confirm("请问你是女孩吗");
        if(flag){
            alert("太好了～");
        }else {
            alert("没劲");
        }
    }
    btn2.onclick=function(){
        var rColor=getRandom(0,255);
        var gColor=getRandom(0,255);
        var bColor=getRandom(0,255);
        document.body.style.backgroundColor="rgb("+rColor+","+gColor+","+bColor+")";
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() *(max - min+1))+min;
    }
    btn3.onclick=function(){
        var iptValue=emailIpt.value;
        var reg=/^\w+@\w+(\.\w+)+$/;
        var flag=reg.test(iptValue);
        if(!flag){
            alert("请输入正确的邮箱格式");
            emailIpt.value="";
            return false;
        }else {
            alert("邮箱验证成功");
        }
    }
    btn4.onclick=function(){
      var date=new Date();
      timeIpt.value=date;
    }
}
