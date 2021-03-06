import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchList} from '../store/action'
import filterList from '../component/filterList'
import {SearchList} from '../store/action'


class Search extends Component {

    constructor(props) {
        super(props);
        this.refer = React.createRef();
      }

    // const searchStates = (searchText) => {
    //     let matches = states.filter(state => {
    //      const regex = new RegExp(`^${searchText}`, 'gi');
    //     //  return state.name.match(regex) || state.abbr.match(regex);
    //     });
    // }
    

    handleClick=()=>{
        console.log(this.refer.current.value);
        console.log(this.props);
        this.props.history.push(`/state/${this.refer.current.value}`);
        this.props.response(this.refer.current.value,this.props.timerData);
        console.log(this.props.timerData);


    }
    render() {
        return (
            <div className='search' style={{margin:'15px'}}>
                <input type="text"   ref={this.refer}/>
                <button onClick={this.handleClick}>search</button>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        value:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        response:(state,timerData)=>{
            dispatch(SearchList(state,timerData))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Search);