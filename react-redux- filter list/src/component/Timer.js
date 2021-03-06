import React, { Component } from 'react'
import  {connect} from 'react-redux'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
          time: null,
          isOn: 'false'
          
        }
    }
    onchangeTimer=(hour,min,sec,timevalue)=>{
        
        this.setState({time:timevalue},()=>this.props.onChangeTimer({hour,min,sec}));

    }

        startTimer=()=> {
            let hour=this.props.timeData.hour;
	        let min= this.props.timeData.min;
            let sec= this.props.timeData.sec;
            

	        setInterval(() => {
		    sec++;
		    if (sec>59) 
		{

			sec=0;
			min++;
			if (min>59) {
				min=0;
				hour++;

			}
		}
            let timevalue=(hour > 9 ? hour : '0'+hour)+':'+(min > 9 ? min : '0'+min)+':'+(sec > 9 ? sec : '0'+sec);
            
            this.onchangeTimer(hour,min,sec,timevalue);

	}, 1000);

        }

        componentDidMount(){
            this.startTimer();
        };


    render() {
        return (
            <div  style={{marginLeft:'0px'}}>
                <h1>The time on this page with status {this.state.isOn}</h1>
                <span>{this.state.time}</span>
                
            </div>
        );
    }
}
const mapStateToProps=(state)=>{

    return {
        timeData:state.timerData

    }
}

export default connect(mapStateToProps)(Timer);