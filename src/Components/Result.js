import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ResultImage from './ResultImage';
import {SCENARIO_IMGS} from  '../constants/ScenarioImages';
import {RESOLUTIONS} from '../constants/results';
import * as actions from '../actions/index';
import './Result.css'
import './react-tabs.css';


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
            console.log(this.props.currentFile);
            const userScenarios = this.props.currentFile.completedScenarios.map(e=> e.scenarioTitle);
            console.log(userScenarios);

            this.setState({scenarios:userScenarios});
            this.props.fetchResults(userScenarios[0]);
        }
        else{
            this.setState({toDashBoard:true});
        }

    }

    renderTabs=()=>{
       return this.state.scenarios.map((sc)=>{
            return(
                <Tab key={sc}>
                    {sc}
                </Tab>
            );
        });
    }

    renderTabsPanels=()=>{
       return this.state.scenarios.map((sc)=>{
            return(
                <TabPanel key={sc}>
                    <div className="Result-Content">
                        <ResultImage
                            picture={SCENARIO_IMGS[sc]}
                        />
                        <div>
                            You chose to save the students
                        </div>
                        <div>
                            55%
                        </div>
                    </div>
                </TabPanel>
            );
        });
    }

    render(){
        const {toDashBoard}= this.state;
        if(toDashBoard){
            return <Redirect to="/"/>
        }
        return(
            <div className="Result-Wrapper">
                {/* <div className="Result-Content">
                    <ResultPicture 
                        picture={SCENARIO_IMGS['The Gathering']}
                    />
                    <div>
                        You chose to save the students
                    </div>
                    <div>
                        55%
                    </div>
                </div>
                <div className="Result-Content">
                    <ResultPicture 
                        picture={SCENARIO_IMGS['The Gathering']}
                    />
                    <div>
                        You chose to save the students
                    </div>
                    <div>
                        55%
                    </div>
                </div> */}
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