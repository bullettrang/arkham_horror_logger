import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentFile,fetchFiles,setCampaign,fetchResults,deleteByFileId} from '../../../actions/index';
import SubmitButton from '../../Forms/Button/SubmitButton';
import FileWrapper from './FileWrapper/FileWrapper';
import Spinner from '../../UI/Spinner';
import './FilesMenu.css';


//todo turn files into slideshow
class FilesMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            files:[],
            selected:null,
            toCampaign:false,
            toScenario:false,
            loading:false,
            title:''
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
                            completedScenarios={e.completedScenarios}
                            deleted={this.deleteHandler}
                            />
                        );
            })
        }
        else{
            return 'Start a new file by pressing \'Create Campaign\' button below';
        }
    }

    selectHandler=(e,title)=>{
        this.setState({selected:e});
        this.setState({title:title})
        
    }




    submitHandler = (e)=>{
        const {files,setCampaign,setCurrentFile,fetchResults}=this.props;
        const{selected}=this.state;
        if(files.length>0 && selected !==null){ 
            e.preventDefault();
            
            
            const fileIdx= files.findIndex(e=>e._id===selected)
            setCurrentFile(files[fileIdx]);
            setCampaign(files[fileIdx].campaignTitle);
            fetchResults(files[fileIdx].campaignTitle);     
            //this.props.history.push("/scenario");     //Tyler McGinnis says not to mess with history api unless absolutely necessary ,https://tylermcginnis.com/react-router-programmatically-navigate/
            this.setState({toScenario:true});
        }
        else{
            e.preventDefault();
            return;
        }
    }

    deleteHandler =(fileid)=>{
        this.props.deleteByFileId(fileid);
    }
    render(){
        const {toScenario,selected,title}= this.state;

        if(toScenario){
            return <Redirect to="scenario"/>
        }

            let files=     <form onSubmit={this.submitHandler} style={{margin:"0 auto"}}>
            <div className="Files_Wrapper">
                {this.renderFiles()}
            </div>
            <SubmitButton title={`Continue ${title}`}/>
        </form>
        if(this.state.loading){
            files=<Spinner/>;
        }

        if(this.props.error){
            files=this.props.error
        }

    
        return(
            <div className="DashBoard__Campaigns">
                {files}
            </div>
        )
    }
}



const mapStateToProps=({auth,file})=>{
    return{
        auth,
        files:file.files,
        error:file.error
    }
}

const mapDispatchToProps={
    setCurrentFile:(file)=>setCurrentFile(file),
    fetchFiles:()=>fetchFiles(),
    setCampaign:(camp)=>setCampaign(camp),
    fetchResults:(campaign)=>fetchResults(campaign),
    deleteByFileId:(fileid)=>deleteByFileId(fileid)
}

export default connect(mapStateToProps,mapDispatchToProps)(FilesMenu);