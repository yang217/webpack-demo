var sum=require('./sum.js');
import '../css/style.css'
alert(sum(3,5))
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/samll.jpg');
window.onload=function(){//需要页面加载完才会出现这个元素
	document.body.appendChild(smallImg)
}
// document.body.appendChild(smallImg)


