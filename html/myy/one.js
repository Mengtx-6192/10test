window.onload = function () {
    let str = "abaasdffggghhjjkkgfddsssss3444343";
    /**
     * 获取字符串长度
     * @param {*} str 
     */
    function getLength(str) {
        return str.length;
    }
    console.log(getLength(str));
    /**
     * 取出指定位置字符
     * @param {*} str 
     * @param {*} position 
     */
    function atLocation(str, position) {
        return str.charAt(position);
    }
    console.log(atLocation(str, 0), atLocation(str, 3), atLocation(str, 5), atLocation(str, 9));
    /**
     * 指定字符是否存在
     * @param {*} str1 
     * @param {*} str2 
     */
    function hasChars(str1, str2) {
        let tempStr = str1.split("");
        tempStr.map((value, index) => {
            if (value.indexOf(str2) != -1) {
                console.log("存在这个值" + value);
                console.log("当前下标为" + index);
                // return false;这个return false起不到作用 
            }
        })
        // for(var i=0;i<tempStr.length;i++){
        //     if(tempStr[i].indexOf(str2)!=-1){
        //         console.log("存在这个值" + tempStr[i]);
        //         console.log(i);
        //         return false;
        //     }
        // }
    }
    hasChars(str, "g");
    /**
     * 替换指定位置的字符串
     * @param {*} str 
     * @param {*} oldStr 
     * @param {*} newStr 
     */
    function replaceStr(str, oldStr, newStr) {
        //正则表达式里面不能放变量
        //用正则对象
        let regExp = new RegExp("" + oldStr + "", "g");
        let tempIndex = [];
        while ((result = regExp.exec(str)) != null) {
            tempIndex.push(result.index);
        }
        let tempStr = str.substring(0, tempIndex[tempIndex.length - 1] + 1);
        let lastStr = str.substring(tempIndex[tempIndex.length - 1] + 1, str.length + 1);
        let tempArray = tempStr.split("");
        let newArray = [];
        for (let i = 0; i < tempArray.length; i++) {
            newArray.push(tempArray[i].replace(oldStr, newStr));
        }
        let concatStr = newArray.join("") + lastStr;
        console.log("将" + oldStr + "替换成" + newStr, concatStr);
        // console.log(str.replace(/oldStr/g, newStr));
    }
    replaceStr(str, "3", "10");
    /**
     * 输出指定位置的字符串
     * @param {*} str 
     * @param {*} startLocation 
     * @param {*} endLocation 
     */
    function subStrVoid(str, startLocation, endLocation) {

        console.log(str.substr(startLocation, endLocation));

    }
    subStrVoid(str, 1, 5);
    /**
     * 打印出现次数最多的字符,并打印次数
     * @param {*} str 
     */
    function moreRepeat(str) {
        let tempStr = str.split("");
        let newObj = {};
        tempStr.map((value, index) => {
            if (!newObj[value]) {
                newObj[value] = 1;
            } else {
                newObj[value]++;
            }
        })
        let maxValue = newObj[tempStr[0]];
        let maxIndex = 0;
        for (let key in newObj) {
            if (newObj[key] > maxValue) {
                maxValue = newObj[key];
                maxIndex = key;
            }
        }
        console.log(maxValue, maxIndex);
    }
    moreRepeat(str);
    /**
    遍历字符串 将每个字符串开头和结尾加上@符号
    **/
    function forEachString(str) {
        let tempStr = str.split("");
        tempStr.map((value, index) => {
            value = value.padStart(value.length + 1, "@");
            value = value.padEnd(value.length + 1, "@");
            console.log(value);
            // document.write(value+"<br>");
        })
    }
    forEachString(str);
}