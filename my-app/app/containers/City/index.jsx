import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h1>citydd</h1>
            </div>
        )
    }
    componentDidMount(){
    	
    	 // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        
        this.props.userInfoActions.update({
        	cityName:cityName
        })
        
    	// 更改状态
    	setTimeout(()=>{
    		this.setState({
	            initDone: true
	        })
    	},2000)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
module.exports = City
