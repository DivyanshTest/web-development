import React, { Component } from 'react'

import List from '../component/List' 
import Search from '../component/Search' 
import Timer from '../component/Timer' 

export class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            timerData: {
             hour: 0,
             min:0,
             sec:0
            }
        }

    }
    onChangeTimer = (timerObj) => {
        this.setState({
            timerData: {...timerObj}
        });

    }
    render() {
        return (
            <div>
                <Timer onChangeTimer ={this.onChangeTimer}
                />
                <Search {...this.props} timerData={this.state.timerData}/>
                <List/>
                
            </div>
        )
    }
}

export default Container;
