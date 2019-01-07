/**
 * author:李鹏，李敏；
 * 
 * 前期为了方便，使用生成的数组为炸弹周围放数字，//错误一
 * 直接用 数组值加减增加了判断周边元素的难度//错误二
 * 使用索引//下个版本改进
 * 使用兄弟节点改进
 */

function id$(id) {
    return document.getElementById(id);
}

//获取页面元素
var box = id$("box");
var uls = box.children;
var index = [];       //定义二维数组用来存储炸弹生成的坐标
var re = id$("re");


//重新载入页面
re.onclick = function () {
    location.reload();
}
//页面加载
onload = function () {

    //给每个box内的元素添加索引
    for (var i = 0; i < uls.length; i++) {
        uls[i].setAttribute("indexX", i);
        uls[i].id = "ul" + i;
        for (var j = 0; j < uls[i].children.length; j++) {
            uls[i].children[j].setAttribute("count", 0);
            uls[i].children[j].setAttribute("indexY", j);
            uls[i].children[j].setAttribute("flag", 0);
        }
    }

    //随机生成炸弹
    (function getRandom(index) {
        var x = 0;
        var y = 1;
        var i = 0;
        while (index.length < 9) {
            index[i] = [];
            index[i][x] = Math.floor(Math.random() * 10);//生成x坐标
            index[i][y] = Math.floor(Math.random() * 10);//生成x坐标
            if (i > 0) {
                //判断生成的坐标与前面生成的是否重复，重复则删除这个坐标
                for (var j = 0; j < i; j++) {
                    if (index[i][x] == index[j][x] && index[i][y] == index[j][y]) {
                        index.splice(i, 1);
                        i--;        //
                    }
                }
            }
            i++;
        }
        return index;
    })(index);
    //以上为随机生成炸弹坐标


    //将炸弹放入li中
    //先获取每一个放了炸弹的li
    function getLi(index) {
        var zds = [];
        for (var i = 0; i < index.length; i++) {
            var zd = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1) + ") li:nth-of-type(" + (index[i][1] + 1) + ")");
            zds[i] = zd;
        }
        return zds
    }

    (function setBoom(index) {
        var zds = getLi(index);
        for (var i = 0; i < zds.length; i++) {
            zds[i].innerText = "*";
        }
    })(index);

    //在炸弹周边放数字
    //获取炸弹周边的元素；存在则放入数组 counts

    (function setCount(index) {
        var counts = [];
        for (var i = 0; i < index.length; i++) {
            counts[i] = [];
            //上
            if (index[i][0] - 1 >= 0) {

                //上
                var s = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1 - 1) + ") li:nth-of-type(" + (index[i][1] + 1) + ")")
                counts[i].push(s);

            }
            //左
            if (index[i][1] - 1 >= 0) {
                var z = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1) + ") li:nth-of-type(" + (index[i][1] + 1 - 1) + ")")
                counts[i].push(z);
            }
            //右
            if (index[i][1] + 1 < 10) {
                var y = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1) + ") li:nth-of-type(" + (index[i][1] + 1 + 1) + ")")
                counts[i].push(y);
            }
            //下
            if (index[i][0] + 1 < 10) {

                //下
                var x = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1 + 1) + ") li:nth-of-type(" + (index[i][1] + 1) + ")")
                counts[i].push(x);

            }

        }
        for (var i = 0; i < counts.length; i++) {
            for (var j = 0; j < counts[i].length; j++) {//此处小错误counts[j]
                var li = counts[i][j];
                if (li.innerText == "*") {
                    continue;
                } else {
                    var num = parseInt(li.getAttribute("count")) + 1;
                    li.setAttribute("count", num)
                    li.innerText = li.getAttribute("count");
                }
            }
        }
    })(index);

}

//给box设置点击事件
box.onclick = fp;
var count = 0;
function fp(e) {
    e.target.className = "current";
    for (var i = 0; i < uls.length; i++) {
        for (var j = 0; j < uls[i].children.length; j++) {
            if (uls[i].children[j].className == "") {
                count--;
            }
        }
    }
    if (count == -9) {
        alert("你赢了");
    } else {
        count = 0;
    }

    if (e.target.innerText == "*") {
        for (var i = 0; i < index.length; i++) {
            var zd = box.querySelector("ul:nth-of-type(" + (index[i][0] + 1) + ") li:nth-of-type(" + (index[i][1] + 1) + ")");
            zd.className = "current";
        }
        alert("你炸了");
    } else if (e.target.getAttribute("count") != "0") {
        e.className = "current";
    } else {
        hudie(e.target);

    }
}

function hudie(e) {
    s(e);
    y(e);
    x(e);
    z(e);
}


function s(e) {
    var f = e.parentNode;
    e.className = "current";
    e.setAttribute("flag", 1)
    if (f.getAttribute("indexX") != "0" && e.getAttribute("count") == "0") {
        var e = f.previousElementSibling.querySelector("li:nth-of-type(" + (parseInt(e.getAttribute("indexY")) + 1) + ")");

        if (e.getAttribute("flag") == "0") {
            hudie(e);
        }

    } else {
        return;
    }
}

function y(e) {
    e.className = "current";
    e.setAttribute("flag", 1)
    if (e.getAttribute("indexY") != "9" && e.getAttribute("count") == "0") {
        var e = e.nextElementSibling;

        if (e.getAttribute("flag") == "0")
            hudie(e);
    } else {
        return;
    }
}
function z(e) {
    e.className = "current";
    e.setAttribute("flag", 1)
    if (e.getAttribute("indexY") !== "0" && e.getAttribute("count") === "0") {

        var e = e.previousElementSibling;

        if (e.getAttribute("flag") === "0")
            hudie(e);
    } else {
        return;
    }
}

function x(e) {
    var f = e.parentNode;
    e.className = "current";
    e.setAttribute("flag", 1)
    if (f.getAttribute("indexX") != "9" && e.getAttribute("count") == "0") {
        var e = f.nextElementSibling.querySelector("li:nth-of-type(" + (parseInt(e.getAttribute("indexY")) + 1) + ")");

        if (e.getAttribute("flag") === "0")
            hudie(e);
    } else {
        return;
    }
}
