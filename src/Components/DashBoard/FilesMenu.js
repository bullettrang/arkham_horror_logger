import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {CAMPAIGN_IMAGES} from '../../constants/CampaignImages';
import {getBackgroundStyle} from '../../util/styleHelpers';
import './FilesMenu.css';



class FilesMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            files:[],
            selected:null

        }
    }
    componentDidMount(){
        if(this.props.auth && this.props.files.length<1){
                this.props.fetchFiles();
        }
    }


    renderFiles(){
        const {selected}= this.state;
        if(this.props.files.length>0){  
            return this.props.files.map(e=>{
                return (<div 
                            style={getBackgroundStyle(CAMPAIGN_IMAGES[e.campaignTitle],selected===e.campaignTitle)}  
                            className={"DashBoard-File"} 
                            key={e._id}
                            onClick={()=>this.setState({selected:e.campaignTitle})}>
                                {e.campaignTitle}
                        </div>);
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