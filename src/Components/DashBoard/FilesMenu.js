import React,{Component} from 'react';
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
                this.props.fetchFiles();
        }
    }



    renderFiles(){
        console.log(this.props.files.length);
        if(this.props.files.length>0){
            return this.props.files.map(e=>{
                return <div style={{border:"5px solid silver"}} key={e._id}>{e.campaignTitle}</div>
            })
        }
        else{
            return 'Start a new file by pressing button below';
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
        files:file.files
    }
}

export default connect(mapStateToProps,actions)(FilesMenu);