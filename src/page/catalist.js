/**
 * 图书分类
 * */

import { Component } from "react";
import { Link }from "react-router";

class CataList extends Component{
	
	constructor(){
		super();
		
		this.state= {
			list : []
		}
	};
	//生命周期，当dom元素插入到页面后触发
	componentDidMount(){
		const that = this;
		/*setTimeout(function(){
			this.state = {
				list : [
					{
						name : "java"
					},{
						name:"html"
					}
				]
			}
		},2000);*/
		$.get("/cata/list",{},function(data){
			console.log(data.result);
			if(data['reason']=="success"){
				that.setState ({
					list : data.result
				});
			}
		},"json");
	}
	
	
	
	render(){
		let html =(<ul>
			{
				this.state.list.map((item,i)=>{
					let to ={
						//路由地址
						pathname:`/cata/content/${item.id}`,
						//路由参数
						query:{
							id:item.id
						}
					}
					return(
						<li key ={`li-${i}`} data-id={ item.id }>
							<Link to={ to }>{ item.catalog }</Link>
						</li>
					)
				})
			}
			
		</ul>);
		return html;
	}
}
//export CataList;
export { CataList };
