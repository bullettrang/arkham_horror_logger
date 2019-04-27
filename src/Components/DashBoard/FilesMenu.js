import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {CAMPAIGN_IMAGES} from '../../constants/CampaignImages';
import SubmitButton from '../Forms/Button/SubmitButton';
import './FilesMenu.css';


const styledWrapped={
    opacity:".8",
    transition:'all .2s'
}

const  styledWrappedSelected={
    transform:"scale(1.1)",
    MozBoxShadow:    '0px 5px 5px  #000',
    WebkitBox: '0px 5px 5px  #000',
    boxShadow:  '0px 5px 5px  #000',
    opacity:"1",
    transition:'all .2s'
}


const FileWrapper = (props)=>{
    const {selected,title,clicked,completedScenarios,id} = props;
    const styledBGSelected={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`url(${CAMPAIGN_IMAGES[title]})`,
        transition:'all .2s'
    }
    
    const  styledBG={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${CAMPAIGN_IMAGES[title]})`,
        transition:'all .2s'
    }

    const styledContentSelected={
        color:"#333333",
        background:"#f8f8f8",
        transition:'all .2s'
    }
    
    const styledContent={
        color:"#f8f8f8",
        background:"#333333",
        transition:'all .2s'
    }

    if(selected===id){
        return (
            <div 
                className="File_Wrapper"
                onClick={()=>clicked(id)}
            >
                <div
                    style={{...styledBGSelected,...styledWrappedSelected} }
                    className={"DashBoard-File"} 
                > 
                </div>
                <div className="File_Content" style={{...styledContentSelected,...styledWrappedSelected}}>
                    <h2>{title}</h2>
                    <h3>COMPLETED SCENARIOS</h3>
                    <CompletedScenarios 
                        completedScenarios={completedScenarios}/>
                </div>
            </div>
        );
        
    }else{
        return (
            <div 
                className="File_Wrapper"
                onClick={()=>clicked(id)}
            >
                <div
                    style={{...styledBG,...styledWrapped} }
                    className={"DashBoard-File"} 
                > 
                </div>
                <div className="File_Content" style={{...styledContent,...styledWrapped}}>
                    <h2>{title}</h2>
                    <h3>COMPLETED SCENARIOS</h3>
                    <CompletedScenarios 
                        completedScenarios={completedScenarios}/>
                </div>
            </div>
        );
    }
}
const CompletedScenarios = (props)=>{
    if(props.completedScenarios.length<1)
        return null;
    return(
        <React.Fragment>
            {props.completedScenarios.map((e)=>{
                return(
                    <li key={e._id} style={{listStyle:"none"}}>{e.scenarioTitle}</li>
                )
            })}
        </React.Fragment>
    );
}

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
        if(this.props.auth && this.props.files.length<1){
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
            return 'Start a new file by pressing button below';
        }
    }

    selectHandler=(e)=>{
        this.setState({selected:e});
    }

    submitHandler = (e)=>{
        const {files,setCampaign,setCurrentFile}=this.props;
        const{selected}=this.state;
        e.preventDefault();
        const fileIdx= files.findIndex(e=>e._id===selected)
        setCurrentFile(files[fileIdx]);
        setCampaign(files[fileIdx].campaignTitle)
        //this.props.history.push("/scenario");     //Tyler McGinnis says not to mess with history api unless absolutely necessary ,https://tylermcginnis.com/react-router-programmatically-navigate/
        this.setState({toScenario:true});
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