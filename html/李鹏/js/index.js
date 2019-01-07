
; (function (w) {
    var Tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        id$: function (id) {
            return document.getElementById(id);
        }
    };
    w.Tools = Tools;
})(window);

// var now=new Date();
// if(now.getHours())

$(function () {

    /**********************存储用户信息***************** */
    if (!localStorage.getItem("guest")) {
        do {
            //let作用域在此花括号，，while无法访问；
            var guest = prompt("请输入您的姓名：");
            var reg = new RegExp("^[\u4e00-\u9fa5]{2,3}$");
            if (reg.test(guest)) {
                localStorage.setItem("guest", guest);
            }
        } while (!reg.test(guest));

        do {

            var need = null;
            need = prompt("can I help you?\n1.I want to play game\n2.I want to study\n3.look around");
            switch (need) {
                case "1":
                    alert("这里不是玩游戏的地方，请回吧");
                    window.close();
                    break;
                case "2":
                    let study = prompt("1.学习资料1\n2.学习资料2")
                    location.href = study === "1" ? "http://localhost:8080/%E4%BB%93%E5%BA%93/html/%E6%9D%8E%E9%B9%8F/%E6%89%AB%E9%9B%B7/saolei.html" : "http://localhost:8080/%E4%BB%93%E5%BA%93/html/%E6%9D%8E%E9%B9%8F/2048/2048.html";
                    break;
                case "3":
                    if (localStorage.getItem("guest") === "李鹏") {
                        alert("welcome back master");
                    } else {
                        alert("welcome to my humble abode!!!");
                    }

                    break;
            }

        } while (!(need === "1" || need === "2" || need === "3"));
    }

    /*************************弹幕******************* */
    $("#btn-dm").click(function () {
        var str = $("#txt").val();
        if (str === "") {
            return;
        }
        $("<p>" + str + "</p>").appendTo($(document.body)).css({
            "position": "absolute",
            "left": document.documentElement.clientWidth,
            "top": Tools.getRandom(0, document.documentElement.clientHeight - this.offsetHeight) + "px",
            "padding": "5px",
            "font-size": Tools.getRandom(12, 24) + "px",
            "background-color": "rgba(" + Tools.getRandom(0, 255) + "," + Tools.getRandom(0, 255) + "," + Tools.getRandom(0, 255) + ",.5)",
        }).animate({
            "left": "-" + $(this).width() + "px",
            "transform": "translateX(-100%)",
        }, 10000, "linear", function () {
            this.remove();
        });
        $("#txt").val("");

    });


    /********************作业部分******************* */
    var len = $("#homework>.homework-head").children().length;
//头部table栏切换
    $("#homework>.homework-head>span").click(function (e) {
        $("#homework>.homework-head>span").removeClass("current");
        $(e.target).addClass("current");
        var index=$(this).index("#homework>.homework-head>span");
        $("#homework>.homework-body>div").removeClass("show").eq(index).addClass("show");

    });
// 第一题
    $(".homework-body > div:nth-of-type(1) > .answer").click(function () {
        /*  一、 给定一个字符串例如:
        “abaasdffggghhjjkkgfddsssss3444343”;问题如下: 
        1、 字符串的字节长度 
        2、 取出指定位置的字符，如:0,3,5,9等 
        3、 查找指定字符是否在以上字符串中存在，如:i，c ，b等 
        4、 替换指定的字符，如:g替换为22,ss替换为b等操作方法 
        5、 截取指定开始位置到结束位置的字符串，如:取得1-5的字符串 
        6、 找出以上字符串中出现次数最多的字符和出现的次数 
        7、 遍历字符串，并将遍历出的字符两头添加符号“@”输出至当前的文档页面 
        */
        var str = "abaasdffggghhjjkkgfddsssss3444343";
        console.log(str.length);
        console.log("***************");

        console.log(str.charAt(0));
        console.log(str.charAt(3));
        console.log(str.charAt(5));
        console.log(str.charAt(9));

        console.log("***************");

        function find(a) {
            if (str.indexOf(a) != -1) {
                console.log("存在");
            } else {
                console.log("不存在");
            }
        }
        find("i");
        find("c");
        find("b");

        console.log("***************");
        // console.log(str[1]);

        function changeStr(s1, s2) {
            var index = str.indexOf(s1);
            var newstr = str;
            do {
                newstr = newstr.replace(s1, s2);
                index = newstr.indexOf(s1);
            } while (index != -1)
            return newstr;
        }
        console.log(changeStr("g", "22"));
        console.log(changeStr("ss", "b"));

        console.log("***************");

        console.log(str.substr(1, 5));

        console.log("***************");

        // 6、 找出以上字符串中出现次数最多的字符和出现的次数 
        function max() {
            var maxstr = str[0];
            var maxcount = 0;

            for (var i = 0, len = str.length; i < len; i++) {
                var str1 = str[i];
                var count = 0;
                for (var j = 0; j < len; j++) {
                    if (str1 == str[j]) {
                        count++;
                    }
                }
                if (maxcount < count) {
                    maxstr = str1;
                    maxcount = count;
                }
            }
            return maxstr + "  " + maxcount;
        }
        console.log(max());

        console.log("***************");

        // 遍历字符串，并将遍历出的字符两头添加符号“@”输出至当前的文档页面
        var reg = new RegExp("[a-zA-Z]");
        // console.log(reg.test("a"));

        var arr = [];
        for (var i = 0; i < str.length; i++) {
            if (reg.test(str[i])) {
                arr.push("@" + str[i] + "@");
            } else {
                arr.push(str[i]);
            }
        }
        var newA = arr.join("");
        $(this)[0].parentNode.innerText = newA;

    });

    $(".homework-body > div:nth-of-type(2) > .answer").click(function () {
        /* 二、 根据当前日期进行以下方面的处理:
        1、 取得日期的年份、月份、天、时、分、秒，并转换成大写日期格式
        如: 2013年8月17日0时30分20秒
        2、 根据日期的不同时间段，做问候语:
        早上8: 00 - 12: 00 : “早上好～欢迎登陆系统”
        中午12: 00 - 14: 00: “中午好～该休息了”
        下午14: 00 - 18: 00: “下午好～欢迎登陆系统”
        晚上19: 00 - 00: 00: “晚上好～XXXXXXXXX”
        注: 你若觉得分的不够细，可以将时间段划分的更细一些。
        3、 计算当前时间向前、向后的日期，并取出是星期几。 （扩展） */
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var day = now.getDay();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        console.log(year + "年" + month + "月" + date + "日" + hour + "时" + minute + "分" + second + "秒");
        if (hour >= 8 && hour < 12) {
            alert("早上好～欢迎登陆系统");
        } else if (hour >= 12 && hour < 14) {
            alert("中午好～该休息了");
        } else if (hour >= 14 && hour < 18) {
            alert("下午好～欢迎登陆系统");
        } else if (hour >= 19 && hour < 24) {
            alert("晚上好～嗨你妈逼回去睡");
        }
        var week = $(this).next("input").val();
        var reg = new RegExp("/^\d+$/");
        if (reg.test(week)) {

        }
    });

    $(".homework-body > div:nth-of-type(3) > .answer").click(function () {
        /* 1、 函数调用，建立两个函数，一个函数是中学二次函数表达式的计算方法，另一个函数是给定任意的20个x值，调用前一个函数计算y对应的值，并使用方式输出20个计算结果。
        （就是写两个函数，一个函数调用另一个函数）
        2、 使用二重循环打印9×9乘法表。 */
        function erci(x) {
            return x * x;
        }
        function result() {
            var arr = [5, 2, 6, 8, 45, 2, 12, 51, 23, 54, 87, 85, 65, 48, 89, 13, 14, 46, 75, 38];
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                newArr.push(erci(arr[i]));
            }
            return newArr;
        }
        console.log(result());
        var str = [];
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= i; j++) {
                str.push(j + "*" + i + "=" + j * i + "\t");
            }
            str.push("\n");
        }
        console.log(str.join(""));

    });

    $(".homework-body > div:nth-of-type(4) > .answer").click(function () {
        /* 三、实现二级级联的
        使用JavaScript中变量定义省份及对应的城市，应用Select标签对象
        下拉菜单选中效果。也就是说，在省份下拉菜单中，选中一个省份时，在城市下拉菜单中出现对应城市选择内容。 */
        var p = document.querySelector("#province");
        var c = document.querySelector("#city");
        var city = {};
        city["请选择"]=[];
        city["北京"] = ["一环", "二环", "三环", "四环", "五环", "啊 啊~五环",];
        p.onchange = function () {
            /* if (this.value === "0") {

                return;
            } */
            $(c).empty();
            $("<option>请选择</option>").appendTo($(c));

            for (var i = 0; i < city[this.value].length; i++) {
                $("<option value=\"" + city[this.value][i] + "\">" + city[this.value][i] + "</option>").appendTo($(c));
            }
        }
    });

    $(".homework-body > div:nth-of-type(5) > .answer").click(function () {
        var flag = confirm("你确定继续浏览吗");
        if (flag) {
            alert("欢迎光临~");
        } else {
            alert("欢迎再来~");
            window.close();
        }
    });

    $(".homework-body > div:nth-of-type(6) > .answer").click(function () {
        for (var i = 1; i <= 6; i++) {
            $("<h" + i + ">欢迎光临</h" + i + ">").appendTo(this.parentNode);
        }

        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();
        h = h > 10 ? h : "0" + h;
        m = m > 10 ? m : "0" + m;
        s = s > 10 ? s : "0" + s;
        document.querySelector(".showtime").innerText = h + ":" + m + ":" + s;

        setInterval(function () {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            h = h > 10 ? h : "0" + h;
            m = m > 10 ? m : "0" + m;
            s = s > 10 ? s : "0" + s;
            document.querySelector(".showtime").innerText = h + ":" + m + ":" + s;
        }, 1000);

    });

    $(".homework-body > div:nth-of-type(7) > .answer").click(function () {
        /* 六
        1、 使用onkeypress事件，在页面按下字符按键时，获取用户按下的按键编号，并在状态栏用以下格式显示: “您刚才所按下的按键为: „”。
        2、 在页面中禁止右键的使用，并在用户点击鼠标右键时使用alert弹出提示
        3、 在页面中使用onselectstart禁止选择操作，并在用户进行选择时使用alert弹出提示信息: “禁止选取～”。
        4、 在页面中使用oncopy禁止复制操作，并在用户进行复制时使用alert弹出提示信息: “禁止选取～”。
        5、 对页面中txt的div按以下要求设置鼠标事件: 鼠标在上时，背景颜色修改为#CC66CC， */

        document.onkeypress = function (e) {
            var key = e.key;
            var keycode = e.keyCode;
            alert("您刚才按下的键为:" + key + ",编码为" + keycode);
        }
        this.parentNode.onmousedown = function (e) {
            if (e.button === 2) {
                alert("禁用");
                return false;
            }
        }
        this.parentNode.onselectstart = function () {
            alert("禁用");
            return false;
        }
        document.oncopy = function () {
            alert("禁用");
            return false;
        }
        $(this).prev("div").mouseover(function () {
            $(this).css("backgroundColor", "#CC66CC");
        });
    });

    $(".homework-body > div:nth-of-type(8) > .answer").click(function () {
        /* 七
        1、页面上有一个按钮，点击能弹出一个对话框询问“请问你是女孩吗, ”; 如果选择确定，则显示“太好了～”，否则显示“没劲”
        2、页面上有一个按钮，点击后能让网页的背景不停变色
        3、页面上有一个按钮及文本框，在文本框中输入邮箱后，点击按钮能进行验证，要求不能为空，且必须包含@和.
        4、页面上有一个按钮，点击后能在文本框内显示出当前系统时间，如下图所示 */
        var flag = confirm("请问你是女孩吗, ");
        if (flag) {
            alert("太好了～");
        } else {
            alert("没劲");
        }
        setInterval(function () {
            var r = Tools.getRandom(0, 255);
            var g = Tools.getRandom(0, 255);
            var b = Tools.getRandom(0, 255);
            $("body").css("backgroundColor", "rgb(" + r + "," + g + "," + b + ")");
        }, 500);
        $("#email").click(function () {

            var reg = new RegExp("^\w+@\w+(.\w+)+$");
            var str = $(this).prev("input").val();
            if (!reg.test(str)) {
                alert("error");
                return;
            }
        });
        $("#nowtime").click(function () {

            var now = new Date();
            $(this).prev("input").val(now);

        });
    });

});













/*********************作业专区***************** 
 *              ...es6的扩展运算符
*/

/* var homework=[
    {question1:"js练习题编程一、 给定一个字符串例如:“abaasdffggghhjjkkgfddsssss3444343”;问题如下:1、 字符串的字节长度2、 取出指定位置的字符，如:0,3,5,9等3、 查找指定字符是否在以上字符串中存在，如:i，c ，b等4、 替换指定的字符，如:g替换为22,ss替换为b等操作方法5、 截取指定开始位置到结束位置的字符串，如:取得1-5的字符串6、 找出以上字符串中出现次数最多的字符和出现的次数7、 遍历字符串，并将遍历出的字符两头添加符号“@”输出至当前的文档页面。"}
]; */
