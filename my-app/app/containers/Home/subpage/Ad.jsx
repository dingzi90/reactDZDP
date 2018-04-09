import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd/index'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data:[]
        }
    }
    render() {
        return (
        	<div>
        		{
	              <HomeAd data={this.state.data}/>
	            }
        	</div>
        )
    }
    
    componentDidMount(){
    	const result = getAdData();
    	
 		result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            console.log(data)
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }
}

 export default Ad