import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import shortid from "shortid";          //to get rid of annoying key prop warning
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import * as actions from '../../actions/index';
import './Result.css'
import './react-tabs.css';
import ResultContent from './ResultContent/ResultContent';



class Result extends Component{

    constructor(props){
        super(props);
        this.state={
            scenarios:[],
            toDashBoard:false
        }
    }


    componentDidMount(){
        this.props.fetchFiles();                //refresh user files
        if(this.props.currentFile!==null){
            const userScenarios = this.props.currentFile.completedScenarios.map(e=> e.scenarioTitle);
            this.setState({scenarios:userScenarios});
            this.props.fetchResults(userScenarios[0]);
        }
        else{
            this.setState({toDashBoard:true});
        }

    }

    renderTabs=()=>{
        if(this.props.currentFile!==null){
            return this.props.currentFile.completedScenarios.map((sc)=>{
                return(
                    <Tab key={sc.scenarioTitle}>
                        {sc.scenarioTitle}
                    </Tab>
                );
            });
        }
        else{
            return <Redirect to="/"/>
        }
    }

    // const CustomTabPanel =(props)=>{
    //     return(
    //         <TabPanel key={props.key}>
    //             <ResultContent 
    //                 scenarioTitle={props.scenarioTitle}
    //                 answers={props.answers}
    //             />
    //         </TabPanel>
    //     )
    // }

    renderTabsPanels=()=>{
        if(this.props.currentFile !==null){
            return this.props.currentFile.completedScenarios.map((sc,idx)=>{
                return(
                    <TabPanel key={shortid.generate()}>
                        <ResultContent 
                            scenarioTitle={sc.scenarioTitle}
                            answers={sc.answers}
                            key={shortid.generate()}
                        />
                    </TabPanel>
                );
            });
        }
        else{
            return <Redirect to="/"/>
        }

    }



    render(){
        const {toDashBoard}= this.state;
        if(toDashBoard){
            return <Redirect to="/"/>
        }
        return(
            <div className="Result-Wrapper">
                <Tabs>
                    <TabList>
                        {this.renderTabs()}
                    </TabList>
                    {this.renderTabsPanels()}
                </Tabs> 
            </div>

        );

    }

}

const mapStateToProps=({file})=>{
    return{
        currentFile:file.currentFile
    }
}

export default connect(mapStateToProps,actions)(Result);