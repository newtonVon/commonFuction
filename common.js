//存取cookie
function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + '=' + escape(value) +
		((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}
//格式化时间戳
function formatDate(date,format) {
	var now =new Date(parseInt(date) * 1000)
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var check = function(num){
		if (num<10) {
			return "0"+num;
		}
		return num;
	}
	if(format == 'yymmdd'){
		return year + "-" + check(month) + "-" + check(date)
	}else if(format == 'yymmddhhmmss'){
		return year + "-" + check(month) + "-" + check(date) + "   " + check(hour) + ":" + check(minute) + ":" + check(second);
	}
}