function POST(url,data,fn){
		var xhr=null
		try{
			xhr=new XMLHttpRequest()
		}catch(e){
			xhr=new ActiveXObject("Microsoft","XMLHTTP")
		}
		xhr.open("post",url,true);

		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

		xhr.send(data)
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				fn(xhr.responseText)
			}
		}

	}
function GET(url,data,fn){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ACtiveXObject("Microsoft","XMLHTTP");
	}
	//通过请求对象 创建一个异步请求
	xhr.open("get",url+"?"+data+"&"+Math.random(),true);
	//提交请求
	xhr.send();
	//请求状态 发生改变时 触发
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			//请求成功
			//请求到的数据内容 xhr.responseText
			//请求成功后要执行的操作 回调函数
			fn&&fn(xhr.responseText);
		}else{
			//请求失败
		}
	}
}
//可以实现get请求也可以实现post方式的请求的一段代码 一个方法可以重复调用
	//method   请求方式   url  路径地址 data 请求所需要的参数  fn 回调函数   
function ajax(method,url,data,fn){
	var xhr=null;
	try{
		xhr=new XMLHttpRequest()
	}catch(err){//err报错的信息
		xhr=new ActiveXObject("Microsoft","XMLHTTP") 
	}
	if(method.toLowerCase()=="get"&&data!=""){//如果是get 我们就要在后面传参数 如果不是 url就不需要改变
				url+="?"+data+"&p="+Math.random()
	}
	//建立请求 
	xhr.open(method,url,true);
	if(method.toLowerCase()=="get"){
		xhr.send();//提交请求
	}else {//需要设置请求头
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
		xhr.send(data)//post还需要传参数
			}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			fn(xhr.responseText)
		}
	}
}