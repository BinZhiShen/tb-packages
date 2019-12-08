'use strict';
// 参数必须为string
// 1.参数数组去掉每项的前后空白
// 2.过滤空字符串
// 3.以'-'拼接字符串
// 4.空字符串返回
// 5.字符串长度为1或者字符串里没有[_.\- ]
//    * 已经是驼峰式直接返回
//    * 直接返回首字母小写
// 6.去掉开头的[_.\- ],首字母小写，把[_.\- ]后的字母大写

module.exports = function () {
	var str = [].map.call(arguments, function (str) {
		return str.trim();
	}).filter(function (str) {
		return str.length;
	}).join('-');

	if (!str.length) {
		return '';
	}

	if (str.length === 1 || !(/[_.\- ]+/).test(str) ) {
		if (str[0] === str[0].toLowerCase() && str.slice(1) !== str.slice(1).toLowerCase()) {
			return str;
		}

		return str.toLowerCase();
	}

	return str
	.replace(/^[_.\- ]+/, '')
	.toLowerCase()
	.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
		return p1.toUpperCase();
	});
};
