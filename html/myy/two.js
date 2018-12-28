window.onload = function () {
	function getFormatDate() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		month = month > 9 ? month : "0" + month;
		let day = date.getDay();
		day = day > 9 ? day : "0" + day;
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		console.log(year + "年" + month + "月" + day + "日" + hour + "时" + minutes + "分" + seconds + "秒");
		return year + "年" + month + "月" + day + "日" + hour + "时" + minutes + "分" + seconds + "秒";
	}
	getFormatDate();

	function grettings(timing) {
		if (timing <= 12) {
			alert("早上好～欢迎登陆系统");
			return false;
		} else if (timing <= 14) {
			alert("中午好～该休息了");
			return false;
		} else if (timing <= 18) {
			alert("午好～欢迎登陆系统");
			return false;
		} else {
			alert("晚上好～XXXXXXXXX");
			return false;
		}
	}
	grettings(11);
	/**
	 * 计算当前日期和前后日期
	 */
	function getDateBAndA() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let week=date.getDay();
		let currentMonthDay = getMonthDay(year, month);
		let beforeDay = 0, afterDay = 0;
		//1,3,5,7,8,10,12 31天
		//4,6,9,11 30
		//2 28或29
		//判读是平年还是闰年
		if (month == 12 && day == currentMonthDay) {
			beforeDay = day - 1;
			afterDay = 1;
			console.log("当前日期:" + year + "年" + month + "月" + day + "日"+"星期"+week);
			console.log("前一天:" + year + "年" + month + "月" + beforeDay + "日"+"星期"+(week-1));
			console.log("后一天:" + (year + 1) + "年" + "1月" + afterDay + "日"+"星期"+(week+1));
		} else if (month == 1 && day == 1) {
			beforeDay = 31;
			afterDay = day + 1;
			console.log("当前日期:" + year + "年" + month + "月" + day + "日");
			console.log("前一天:" + (year - 1) + "年" + "12月" + beforeDay + "日");
			console.log("后一天:" + year + "年" + month + "月" + afterDay + "日");
		} else if (day == currentMonthDay) {
			beforeDay = day - 1;
			afterDay = 1;
			console.log("当前日期:" + year + "年" + month + "月" + day + "日");
			console.log("前一天:" + year + "年" + month + "月" + beforeDay + "日");
			console.log("后一天:" + year + "年" + (month + 1) + "月" + afterDay + "日");
		} else if (day == 1) {
			beforeDay = getMonthDay(year, month - 1);;
			afterDay = day + 1;
			console.log("当前日期:" + year + "年" + month + "月" + day + "日");
			console.log("前一天:" + year + "年" + (month - 1) + "月" + beforeDay + "日");
			console.log("后一天:" + year + "年" + month + "月" + afterDay + "日");
		} else {
			beforeDay = day - 1;
			afterDay = day + 1;
			console.log("当前日期:" + year + "年" + month + "月" + day + "日");
			console.log("前一天:" + year + "年" + month + "月" + beforeDay + "日");
			console.log("后一天:" + year + "年" + month + "月" + afterDay + "日");
		}

	}
	getDateBAndA();
	function getMonthDay(year, month) {
		let twoMonthDay = 0;
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			//闰年 29天
			twoMonthDay = 29;
		} else {
			//平年 28天
			twoMonthDay = 28;
		}
		switch (month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
				break;
			case 2:
				return twoMonthDay;
				break;
		}
	}
}