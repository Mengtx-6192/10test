
/****
 * 
 * 2048
 *      版本：v2.1
 *      author：李鹏
 *      build：2018-12-23
 * 
 * 
 */

/*********数组********** */
var stage=Tools.id$("stage");
var result=Tools.id$("result");
var sum=document.querySelector("#result span");
var money=document.querySelector("#money");
var flag=false;//控制元素是否生成，和判断游戏是否结束
var arr=[];
var moneyTimer;
money.onmouseover=function(){
    moneyTimer=setInterval(function(){
        var r=Tools.getRandom(0,255);
        var g=Tools.getRandom(0,255);
        var b=Tools.getRandom(0,255);
        money.style.backgroundColor="rgb("+r+","+g+","+b+")";
    },30);
}
money.onmouseout=function(){
    clearInterval(moneyTimer);
    money.style.backgroundColor="rgb(221,221,221)";
}
money.onclick=function(){
    for(var i=0;i<arr.length;i++){
        arr[i].div.onclick=function(){
            this.remove();
        }.bind(arr[i]);
    }
}
/*********数字对象**********
 *  属性：
 *      位置：
 *          x：
 *          y：
 *      color：
 *      数字：
 *          num
 *      div盒子
 * 
 * 
 * 方法：
 *      渲染：render（随机工具生成位置x，y），完成后将对象存入数组
 *      移动：move（动画工具）
 *      自杀：remove（清除页面div和数组中的对象）
 *      翻倍：double（数字翻倍）
 * 
 */

var that=null;
var count=0;
;(function(w){
    function Num(options){
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.num = options.num || 2;
        this.color = options.color || "white";
        this.div = document.createElement("div");
        that=this;
        // this.div.onclick=function(){this.remove();}.bind(that);
    }
    //渲染
    Num.prototype.render = function () {
        this.x = Tools.getRandom(0, 3);
        this.y = Tools.getRandom(0, 3);
        this.num = Tools.getRandom(1, 2);/////////
        //判断是否与之前的对象重复
        for(var i=0;i<arr.length;i++){
            if(this.x==arr[i].x&&this.y==arr[i].y){
                this.render();
                return;
            }
            // console.log(this.left==numArr[i].left&&this.top==numArr[i].top);

        }
        $(this.div).css({ "left": (this.x * 110+10), "top": (this.y * 110+10) }).appendTo(stage).addClass("num").text(this.num * 2);
        this.div.dataset["count"]=count++;
        arr.push(this);
    }
    Num.prototype.remove=function(){
        this.div.remove();
        for(var i=0;i<arr.length;i++){
            if(arr[i]==this){
                arr.splice(i,1);
            }
        }
    }
   
    Num.prototype.move=function(k){
        var ele=null;
        var that=this;
        switch(k){
            case 37:
                if(this.x==0){
                    return ;
                }
                if(ele=Tools.find(this.x-1,this.y)){
                    if(ele.num==this.num){
                        Tools.ani(this.div,37,((this.x-1)*110+10),function(){
                            sum.innerText=parseInt(sum.innerText)+ele.num*2;
                            ele.remove();
                            this.num*=2;
                            $(this.div).text(this.num*2);
                            this.changeColor();
                            this.div.style.backgroundColor=this.color;
                        }.bind(that));
                        this.x-=1;
                            flag=true;
                        
                    }else{
                        return ;
                    }
                }else{
                    Tools.ani(this.div,37,((this.x-1)*110+10));
                    this.x-=1;
                    this.move(37);
                    flag=true;
                }
                break;
                
            case 38:
                if(this.y==0){
                    return ;
                }
                if(ele=Tools.find(this.x,this.y-1)){
                    
                    if(ele.num==this.num){
                        Tools.ani(this.div,38,((this.y-1)*110+10),function(){
                            sum.innerText=parseInt(sum.innerText)+ele.num*2;
                            ele.remove();
                            this.num*=2;
                            $(this.div).text(this.num*2);
                            this.changeColor();
                            this.div.style.backgroundColor=this.color;
                        }.bind(that));
                        this.y-=1;
                        flag=true;
                        
                    }else{
                        return ;
                    }
                }else{
                    Tools.ani(this.div,38,((this.y-1)*110+10));
                    this.y-=1;
                    this.move(38);
                    flag=true;
                }
                break;
            
            case 39:
                if(this.x==3){
                    return ;
                }
                if(ele=Tools.find(this.x+1,this.y)){
                    if(ele.num==this.num){
                        Tools.ani(this.div,39,((this.x+1)*110+10),function(){
                            sum.innerText=parseInt(sum.innerText)+ele.num*2;
                            ele.remove();
                            this.num*=2;
                            $(this.div).text(this.num*2);
                            this.changeColor();
                            this.div.style.backgroundColor=this.color;
                        }.bind(that));
                        this.x+=1;
                        flag=true;
                        
                    }else{
                        return ;
                    }
                }else{
                    Tools.ani(this.div,39,((this.x+1)*110+10));
                    this.x+=1;
                    this.move(39);
                    flag=true;
                }
                break;

            case 40:
                if(this.y==3){
                    return ;
                }
                if(ele=Tools.find(this.x,this.y+1)){
                    if(ele.num==this.num){
                        Tools.ani(this.div,40,((this.y+1)*110+10),function(){
                            sum.innerText=parseInt(sum.innerText)+ele.num*2;
                            ele.remove();
                            this.num*=2;
                            $(this.div).text(this.num*2);
                            this.changeColor();
                            this.div.style.backgroundColor=this.color;
                        }.bind(that));
                        this.y+=1;
                        flag=true;
                        
                    }else{
                        return ;
                    }
                }else{
                    Tools.ani(this.div,40,((this.y+1)*110+10));
                    this.y+=1;
                    this.move(40);
                    flag=true;
                }
                break;
        }
    }
    Num.prototype.changeColor=function(){
        switch(this.num){
            //颜色
            case 4:
                this.color="rgb(146,172,209)";
                break;
            case 8:
                this.color="rgb(54,229,21)";
                break;
            case 16:
                this.color="rgb(170,170,222)";
                break;
            case 32:
                this.color="rgb(64,229,247)";
                break;
            case 64:
                this.color="rgb(250,100,41)";
                break;
            case 128:
                this.color="rgb(245,62,62)";
                break;
            case 256:
                this.color="rgb(95,49,160)";
                break;
            case 512:
                this.color="rgb(142,82,62)";
                break;
            case 1024:
                this.color="178,54,106";
                break;
            default:
                this.color="white";
        }
    }
    w.Num=Num;
})(window,undefined)

/***********游戏对象********** */
;(function(w){
    function Game(){
        var n=new Num();
        n.render();
        var n=new Num();
        n.render();
    }
    
    function move(e){
        /* for(var i=0;i<arr.length;i++){
            if(arr[i].num==1024){
                alert("厉害呀！！！");
                return;
            }
        }
        if(arr.length>=17){
            alert("你输了");
            return;
        } */
        switch(e.keyCode){
            case 37:
                for(var i=0;i<4;i++){
                    for(var j=0;j<arr.length;j++){
                        if(arr[j].x==i){
                            arr[j].move(37);
                            // arr[j].changeColor();
                        }
                    }
                }
                /* var n=new Num();
                n.render(); */
                break;
            case 38:
            
                for(var i=0;i<4;i++){
                    for(var j=0;j<arr.length;j++){
                        if(arr[j].y==i){
                            arr[j].move(38);
                            // arr[j].changeColor();
                        }
                    }
                }
                /* var n=new Num();
                n.render(); */
                break;
            case 39:
            
                for(var i=3;i>=0;i--){
                    for(var j=0;j<arr.length;j++){
                        if(arr[j].x==i){
                            arr[j].move(39);
                            // arr[j].changeColor();
                        }
                    }
                }
                /* var n=new Num();
                n.render(); */
                break;
            case 40:
                for(var i=3;i>=0;i--){
                    for(var j=0;j<arr.length;j++){
                        if(arr[j].y==i){
                            arr[j].move(40);
                            // arr[j].changeColor();
                        }
                    }
                }
                /* var n=new Num();
                n.render(); */
                break;
        }
        if(flag){
            setTimeout(function(){
                var n=new Num();
                n.render();
            },200)
            flag=false;
        }else{
            for(var i=0;i<arr.length;i++){
                if(arr[i].num==1024){
                    alert("厉害呀！！！");
                    return;
                }
            }
            if(arr.length>=16){
                if(!canplay()){
                    alert("你输了");
                }
                
                return;
            }
        }
    }
    function canplay(){
        var flag=false;
        for(var i=0;i<arr.length;i++){
            ele=arr[i];
            for(var j=0;j<arr.length;j++){
                if(ele.x-1==arr[j].x&&ele.y==arr[j].y&&ele.num==arr[j].num){
                    flag=true;
                }
                if(ele.x==arr[j].x&&ele.y-1==arr[j].y&&ele.num==arr[j].num){
                    flag=true;
                }
                if(ele.x+1==arr[j].x&&ele.y==arr[j].y&&ele.num==arr[j].num){
                    flag=true;
                }
                if(ele.x==arr[j].x&&ele.y+1==arr[j].y&&ele.num==arr[j].num){
                    flag=true;
                }
            }
        }
        return flag;
    }
    Game.prototype.start=function(){
        document.onkeydown=move;
    }
    w.Game=Game;
})(window,undefined)



/********************* */
;(function(w){
    var g=new Game();
    g.start();
})(window,undefined)



