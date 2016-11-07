import { Component,cloneElement } from "react";
//图书分类组件
import { CataList } from './page/catalist';


class Layout extends Component{
	//在元素上写calss需要转换一下，calss是react中的关键字
	//写class应改为className
	render(){
		//把传入过来的子组件克隆一份，这个时候就会创建一个新的组件
		const content = cloneElement(this.props.children);
		
		let html =(<div className="wrap">
			<div className="catalist">
				<CataList/>
			</div>
			<div className="content">
				{content}
			</div>
		</div>);
		
		return html;
	}
}

export { Layout };
