import React,{Component} from 'react';
import {connect} from 'react-redux';
import {SCENARIO_IMGS} from  '../constants/ScenarioImages';
import {RESOLUTIONS} from '../constants/results';
import * as actions from '../actions/index';
import './Result.css'


const ResultPicture=(props)=>{
    const bgStyled={
        background:`url(${props.picture})`,
        backgroundSize:'cover',
        backgroundPosition:"center",
        maxWidth:'250px',
        minWidth:'100px',
        maxHeight:'auto',
        minHeight:'100px',
        marginRight:'2em',
        borderRadius:'3px',
    }
    return(
        <div className="Result-Picture" style={{...bgStyled}}>

        </div>
    )
}
class Result extends Component{

    componentDidMount(){
        //get results depending on user's scenario
        //calculate percentages of each question
        //display ratio of user's pick
        //display ratio of other users' picks
        if(this.props.currentFile!==null){
            console.log(this.props.currentFile);
            const userScenarios = this.props.currentFile.completedScenarios.map(e=> e.scenarioTitle);
            console.log(userScenarios);
            this.props.fetchResults(userScenarios[0]);
        }

    }

    render(){
        return(
            <div className="Result-Wrapper">
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
                </div>
            </div>
        )

    }

}

const mapStateToProps=({file})=>{
    return{
        currentFile:file.currentFile
    }
}

export default connect(mapStateToProps,actions)(Result);