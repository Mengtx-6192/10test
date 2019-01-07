

var goods = [
    { select: "<input type=\"checkbox\">", name: "冰箱", id: "bx001", class: "家电", derection: "可以冷藏东西的东西" },
    { select: "<input type=\"checkbox\">", name: "冰柜", id: "bx002", class: "家电", derection: "可以冷藏东西的东西" },
    { select: "<input type=\"checkbox\">", name: "空调", id: "kt001", class: "家电", derection: "夏天必备" },
    { select: "<input type=\"checkbox\">", name: "电视", id: "ds001", class: "家电", derection: "可以看小电影" },
    { select: "<input type=\"checkbox\">", name: "电脑", id: "dn001", class: "家电", derection: "网上冲浪" },
    { select: "<input type=\"checkbox\">", name: "卷纸", id: "jz001", class: "生活用品", derection: "卷起来的纸" },
    { select: "<input type=\"checkbox\">", name: "小刀", id: "xd001", class: "生活用品", derection: "不是电动车的那个小刀" },
    { select: "<input type=\"checkbox\">", name: "洗衣液", id: "xyy001", class: "日常用品", derection: "洗衣服用的，听说和香水一样哦" },
    { select: "<input type=\"checkbox\">", name: "麦片", id: "mp001", class: "食物", derection: "可以吃的东东" },
    { select: "<input type=\"checkbox\">", name: "82年红茶", id: "hc001", class: "饮料", derection: "听说只有帅气的人才能天天喝" },
];

var table = document.querySelector("#goods");
var checkall = document.querySelector("#checkbox-all");
var topBar = document.querySelector("#topBar");

var tbody = document.querySelector("#goods tbody");
for (var i = 0, len = goods.length; i < len; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (var k in goods[i]) {
        let td = document.createElement("td");
        tr.append(td);
        td.innerHTML = goods[i][k];
    }
}
var checks = document.querySelectorAll("td>input");


/**********
 * 
 * 使span与多选框对应，每次修改多选框直接调用此函数
 * 
 */
function createspan() {
    for (var i = 0, len = checks.length; i < len; i++) {
        var cit = checks[i].parentNode.nextSibling.innerText;
        if (checks[i].checked) {
            var flag = true;
            for (var j = 0; j < topBar.children.length; j++) {
                if (topBar.children[j].innerText === cit) {
                    flag = false;
                }
            }
            if (flag) {
                var span = document.createElement("span");
                topBar.appendChild(span);
                span.innerText = checks[i].parentNode.nextSibling.innerText;
                // var del=window.getComputedStyle(span,":after");//此方法可以获取伪元素
                span.onclick=function(){
                    var t=this.innerText;
                    
                    this.remove();
                    for(var i=0;i<goods.length;i++){
                        if(goods[i].name===t){
                            // checks[i].checked=false;
                            checks[i].click();
                        }
                    }
                }
                
                
            }
        } else {
            for (var k = 0; k < topBar.children.length; k++) {
                if (topBar.children[k].innerText === cit) {
                    topBar.children[k].remove();
                }
            }
        }
    }
}

/****全选功能****** */
checkall.onclick = function () {

    for (var i = 0, len = checks.length; i < len; i++) {
        checks[i].checked = this.checked;

    }
    createspan();
}


/******单选控制全选****** */
for (var i = 0, len = checks.length; i < len; i++) {
    checks[i].onclick = function () {
        var flag = true;
        for (var i = 0, len = checks.length; i < len; i++) {
            if (!checks[i].checked) {
                flag = false;
            }
        }
        if (flag) {
            checkall.checked = true;
        } else {
            checkall.checked = false;
        }
        createspan();
    }
}

