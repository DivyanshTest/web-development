import React, { Component } from 'react'
import  {connect} from 'react-redux'
import Search from './Search'
import {Link } from 'react-router-dom';



 class FilterList extends Component {

    getStateFilterList=()=>{
        let styleObj = {
            border: '2px solid grey',
            margin: '15px',
            width: '300px',
            padding: '10px',
            boxSizing: 'border-box'
        }
        if(this.props.value.data.length === 0) {
            return <div>no state found!</div>
        }
        return (this.props.value.data)? (this.props.value.data.map((dataObject)=>{
        return (
            <div className='brew_list' key={dataObject.id} style={styleObj}>
                <h2>brewery type{dataObject.brewery_type}</h2>
                <span>Name: {dataObject.name}</span>
                <br/>
                <span>State: {dataObject.state}</span>
                <br/>
                <span>Country: {dataObject.country}</span>
            </div>
        )
    })) : (<p>data is not there...</p>);}


    render() {
        
        let styleObj = {
            border:'1px solid black',
            marginTop: '20px',
            marginLeft: '15px',
            width: '300px',
            padding: '5px',
        }
        return (
            <div>
                <div style ={styleObj}> This is the list as per state {this.props.value.text}</div>
                <div style={{marginTop:'20px',marginLeft:'15px'}}>
                <Link to='/' >Click to HomePage</Link>
                </div>
                {this.getStateFilterList()}
                
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        value:state
    }
}

export default connect(mapStateToProps)(FilterList);