import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../actions/index';
import SubmitButton from '../../Forms/Button/SubmitButton';
import FileWrapper from './FileWrapper/FileWrapper';
import './FilesMenu.css';



class FilesMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            files:[],
            selected:null,
            toCampaign:false,
            toScenario:false
        }
    }
    componentDidMount(){
        if(this.props.auth!==null && this.props.files.length<1){
                this.props.fetchFiles();
        }
    }


    renderFiles(){
        const {selected}= this.state;

        
        if(this.props.files.length>0){  
            return this.props.files.map((e)=>{
                return (
                        <FileWrapper 
                            title={e.campaignTitle} 
                            id={e._id} key={e._id} 
                            selected={selected} 
                            clicked={this.selectHandler} 
                            completedScenarios={e.completedScenarios}/>
                        );
            })
        }
        else{
            return 'Start a new file by pressing \'Create Campaign\' button below';
        }
    }

    selectHandler=(e)=>{
        this.setState({selected:e});
    }

    submitHandler = (e)=>{
        const {files,setCampaign,setCurrentFile}=this.props;
        if(files.length>0){ 
            e.preventDefault();
            const{selected}=this.state;
            
            const fileIdx= files.findIndex(e=>e._id===selected)
            setCurrentFile(files[fileIdx]);
            setCampaign(files[fileIdx].campaignTitle)
            //this.props.history.push("/scenario");     //Tyler McGinnis says not to mess with history api unless absolutely necessary ,https://tylermcginnis.com/react-router-programmatically-navigate/
            this.setState({toScenario:true});
        }
        else{
            e.preventDefault();
            return;
        }
    }
    render(){
        const {toScenario}= this.state;
        if(toScenario){
            return <Redirect to="scenario"/>
        }
        return(
            <div className="DashBoard__Campaigns">
                <form onSubmit={this.submitHandler} style={{margin:"0 auto"}}>
                    <div className="Files_Wrapper">
                        {this.renderFiles()}
                    </div>
                    <SubmitButton/>
                </form>
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