;(function(w){
    var Tools={

        id$:function(id){
            return document.getElementById(id);
        },
        getRandom:function(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        /* refx:function(arr1,arr2,before,after,num){
            for(var i=0;i<arr1.length;i++){
                for(var j=0;j<arr1[i].length;j++){
                    if(arr1[i][j].x==before){
                        arr1[i][after]=num;
                    }
                }
            }
            for(var i=0;i<arr2.length;i++){
                for(var j=0;j<arr2[i].length;j++){
                    if(arr2[j][i].x==before){
                        arr2[after][i]=num;
                    }
                }
            }
        }, */
        ani:function(ele,k,target,fn){
            fn=fn||function(){};
            clearInterval(timer);
            var step=5;
            switch(k){
                case 37:
                    var timer=setInterval(function(){
                        if(Math.abs(target-ele.offsetLeft)<=step){
                            ele.style.left=target+"px";
                            clearInterval(timer);
                            fn();
                            return;
                        }
                        ele.style.left=ele.offsetLeft-step+"px";
                    },5);
                    break;
                case 38:
                    var timer=setInterval(function(){
                        if(Math.abs(target-ele.offsetTop)<=step){
                            ele.style.top=target+"px";
                            clearInterval(timer);
                            fn();
                            return;
                        }
                        ele.style.top=ele.offsetTop-step+"px";
                    },5);
                    break;
                case 39:
                    var timer=setInterval(function(){
                        if(Math.abs(target-ele.offsetLeft)<=step){
                            ele.style.left=target+"px";
                            clearInterval(timer);
                            fn();
                            return;
                        }
                        ele.style.left=ele.offsetLeft+step+"px";
                    },5);
                    break;
                case 40:
                    var timer=setInterval(function(){
                        if(Math.abs(target-ele.offsetTop)<=step){
                            ele.style.top=target+"px";
                            clearInterval(timer);
                            fn();
                            return;
                        }
                        ele.style.top=ele.offsetTop+step+"px";
                    },5);
                    break;
            }
            
        },
        // 判断数组中是否有某个元素
        find:function(x,y){
            
            var flag=false;
            for(var i=0;i<arr.length;i++){
                if(arr[i].x==x&&arr[i].y==y){
                    flag=arr[i];
                    return flag;
                }
            }
            return flag;
        }
    
    }
    w.Tools=Tools;
})(window,undefined)