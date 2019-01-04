/**
 * 数字动态变化，
 * start:初始值
 * end:结束值
 * duration:持续时间
 * callback:回调方法
 * $.animateNumber(1000,10,10,function(n){$("#number").text(n)});将数字在10s内从1000递减至10.
 * version:1.0
 */
$.extend({
	animateNumber:function(start,end,duration,callback){
		var numberInter=end-start;
		 if(numberInter>0){
		 	this._numberUp(start,end,duration,callback);
		 }
		 else{
		 	this._numberDown(start,end,duration,callback);
		 }
	},
	_numberUp:function(start,end,duration,callback){
		var numberInter=end-start;
		var createTime = new Date().getTime();
		 var interval=setInterval(function(){
			var passTime = ( new Date() - createTime ) / duration/1000;
			passTime = passTime > 1 ? 1 : passTime;
			var text=Math.ceil(passTime*numberInter+start);
			if(text>=end){
				text=end;
				clearInterval(interval);
				interval=null;
			}
			callback(text);
		},20);
	},
	_numberDown:function(start,end,duration,callback){
		var numberInter=end-start;
		var createTime = new Date().getTime();
		var interval=setInterval(function(){
			var passTime = ( new Date() - createTime ) / duration/1000;
			passTime = passTime > 1 ? 1 : passTime;
			var text=Math.round(start+passTime*numberInter);
			if(text<=end){
				text=end;
				clearInterval(interval);
				interval=null;
			}
			callback(text);
		},20);
			
	},
	_isDom:function(obj){
		var isDOM = ( typeof HTMLElement === 'object' ) ?
                function(obj){
                    return obj instanceof HTMLElement;
                } :
                function(obj){
                    return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
                }
		return isDOM(obj);
	}
});