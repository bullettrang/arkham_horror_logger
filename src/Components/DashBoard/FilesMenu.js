import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import './FilesMenu.css';

class FilesMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            files:[]
        }
    }
    componentDidMount(){
        if(this.props.auth){
            if(this.props.file.length===0){
                this.props.fetchFiles();
            }
        }

    }

    renderFiles(){
        if(this.props.file.length>0){
            return this.props.file.map(e=>{
                return <div key={e._id}>{e.campaignTitle}</div>
            })
        }
        else{
            return null;
        }
    }
    render(){
        return(
            <div className="DashBoard__Campaigns">
                {this.renderFiles()}
            </div>
        )
    }
}

const mapStateToProps=({auth,file})=>{
    return{
        auth,
        file:file
    }
}

export default connect(mapStateToProps,actions)(FilesMenu);