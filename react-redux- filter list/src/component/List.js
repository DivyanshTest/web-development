import React, { Component } from 'react';
import {connect } from 'react-redux';
import {fetchList} from '../store/action';


class List extends Component {

    // const{resp, response}=this.props;

    // console.log(resp);

    componentDidMount(){
        this.props.response();
        
    }


    render() {
        console.log(this.props.resp);
        let styleObj = {
            border: '2px solid grey',
            margin: '15px',
            width: '300px',
            padding: '10px',
            boxSizing: 'border-box'
        }
        let styleObj1 = {
            border:'1px solid black',
            marginTop: '20px',
            marginLeft: '15px',
            width: '300px',
            padding: '5px',
        }
        const list=(this.props.resp)? (this.props.resp.map((int)=>{
            return (
                <div className='brew_list' key={int.id} style={styleObj}>
                    <h2>brewery type{int.brewery_type}</h2>
                    <span>Name: {int.name}</span>
                    <br/>
                    <span>State: {int.state}</span>
                </div>
            )
        })) : (<p>data is loading</p>);
        return (
            <div>
                <div style={styleObj1}>The list of Breweries</div>
                {list}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{

    return{
        resp:state.data
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        response:()=>{
            dispatch(fetchList())
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (List);