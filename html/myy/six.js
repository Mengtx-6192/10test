window.onload = function () {
    /**
     * 监听键盘按下的事件
     */
    function keyPressVoid() {
        window.onkeypress = function (e) {
            var key = e.key;
            var keycode = e.keyCode;
            alert("您刚才按下的键为" + key + "键编码为" + keycode);
        }

    }
    keyPressVoid();
    function forbidRightMouse() {
        document.onmousedown = function (e) {
            var which = e.which;
            if (which == 3) {
                alert("右键被禁用了");
                return false;
            }
        }
    }
    forbidRightMouse();

    //禁止页面内容被选中
    document.onselectstart = function (e) {
        alert("禁止选取");
        e.returnValue = false;//兼容ie
    }
    document.onselectstart = function (e) {
        alert("禁止选取");
        return false;
    }
    //禁止复制
    document.oncopy=function(e){
        alert("禁止复制");
        e.returnValue=false;
    }
    document.oncopy=function(e){
        alert("禁止复制");
        return false;
    }
    var textDom=document.getElementById("text");
    textDom.onmouseover=function(){
        textDom.style.backgroundColor="#CC66CC";
        console.log("我来了");
    }
}