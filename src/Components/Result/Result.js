import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import shortid from "shortid";          //to get rid of annoying key prop warning
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {fetchResults,fetchFiles}from  '../../actions/index';
import './Result.css'
import './react-tabs.css';
import ResultContent from './ResultContent/ResultContent';



class Result extends Component{

    constructor(props){
        super(props);
        this.state={
            scenarios:[],
            toDashBoard:false,
            tabIndex:0
        }
    }


    componentDidMount(){
        
        this.props.fetchFiles();                //refresh user files
        if(this.props.currentFile!==null){
            
        }
        else{
            this.setState({toDashBoard:true});
        }

    }

    renderTabs=()=>{
       //every tab has scenario title
        if(this.props.currentFile&& this.props.results.length>0){
            return this.props.currentFile.completedScenarios.map((sc)=>{        //currently only showing results of completed scenarios
                return(
                    <Tab key={sc.scenarioTitle}>
                        {sc.scenarioTitle}
                    </Tab>
                );
            });
        }
        else{
            return null;
        }


    }


    renderTabsPanels=()=>{

        if(this.props.currentFile && this.props.results.length>0){
            return this.props.currentFile.completedScenarios.map((sc)=>{
                return(
                    <TabPanel key={shortid.generate()}>
                        <ResultContent 
                            scenarioTitle={sc.scenarioTitle}
                            answers={sc.answers}
                            key={shortid.generate()}
                            resultValues={this.props.results}
                        />
                    </TabPanel>
                );
            });
        }
        else{
            return null;
        }

    }



    render(){
        const {toDashBoard}= this.state;

        
        if(toDashBoard){
            return <Redirect to="/"/>
        }
        else{        
            return(
            <div className="Result-Wrapper">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        {this.renderTabs()}
                    </TabList>
                    {this.renderTabsPanels()}
                </Tabs> 
            </div>

        );

    }

        }


}

const mapStateToProps=({file,results})=>{
    return{
        currentFile:file.currentFile,
        results:results.results
    }
}

const mapDispatchToProps={
        fetchFiles:()=>fetchFiles(),
        fetchResults:(campaign)=>fetchResults(campaign)

}

export default connect(mapStateToProps,mapDispatchToProps)(Result);