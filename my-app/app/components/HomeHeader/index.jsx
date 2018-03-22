import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="clear-fix homeheader">
        		<div className="float-left address">
	        		北京
	        		<i className="icon-angle-down"></i>
        		</div>
        		<div className="inputSearch">
        			 <input />ok
        		</div>
        		<div className="float-right head">
        			<i className="icon-user"></i>
        		</div>
        	</div>
        )
    }
}

 export default HomeHeader