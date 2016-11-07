/**
 * 图书内容
 * */
import { Component } from "react";
//md5算法模块
import crypto from "crypto";
//如何计算md5
function md5(data) {
    let Buffer = require("buffer").Buffer;
    let buf = new Buffer(data);
    let str = buf.toString("binary");
    return "md5_" + crypto.createHash("md5").update(str).digest("hex");
}

class CataContent extends Component{
	constructor(){
		super();//执行Component构造器方法
		//默认值
		this.state = {};
	}
	//获取数据
	getData(key){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { query } = location;
		const that = this;
		let random = parseInt(Math.random()*10000);
		
		$.get("/cata/content",query,function(result){
			let data = {};
			data[key] = result.result.data;
			that.setState(data);
			/*console.log(data.result.data);
			//if(data['reason']=="success"){
			that.setState ({
				//给state重新赋值
				list : data.result.data
			});*/
			//}
		},"json");
		
	}
	render(){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { id } = location.query;//地址上的id值
		let key = md5(id);//把id加密，md5加密
		let list = this.state[key] || [];//根据加密得到的id去获取数据
		//console.log(id,key);
		if(list.length<1){
			//通过ajax获取数据
			this.getData(key);
		}
		let html =(<ul>
			{
				list.map((item,i)=>{
					let li = (<li key ={`li-${i}`}>
						<img src={ item.img }/>
						<h3>{item.title}</h3>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
						<p>{ item.reading }</p>
						<p>{item.sub1}</p>
						<p id="zi">{item.sub2}</p>
						<p>{item.tags}</p>
					</li>);
					return li;
				})
			}
			
		</ul>);
		return html;
	}
}
//export CataContent;
export { CataContent };
