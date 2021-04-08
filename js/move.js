function  move(obj,json,fn){
	clearInterval(obj.tt);
	var ic=0,speed=0;
	obj.tt=setInterval(function(){
		var onOff=true;
		for(var attr in json){
			if(attr=="opacity"){
				ic=parseFloat(getStyle(obj,attr))*100;
			}else{
				ic=parseInt(getStyle(obj,attr));
			}
			speed=(json[attr]-ic)/12;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(ic!=json[attr]){
				onOff=false
				if(attr=="opacity"){
					obj.style[attr]= (ic+speed)/100;
					obj.style.filter="alpha(opacity="+ic+speed+")"
				}else{
					obj.style[attr]= (ic+speed)+"px";
				}
			}	
		}
		if(onOff){
			clearInterval(obj.tt)
			fn&&fn();
		}
	},30)	
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr]
}