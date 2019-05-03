import React from 'react';
import {RESOLUTIONS} from '../../../constants/results';
import {SCENARIO_IMGS} from  '../../../constants/ScenarioImages';
import ResultImage from '../ResultImage';
import './ResultContent.css'
import ResultChoices from './ResultChoices/ResultChoices';


const ResultContent =(props)=>{

    const {answers,scenarioTitle,resultValues}=props;
    const allQuestions = RESOLUTIONS[props.scenarioTitle];
    
   const answeredQuestions= allQuestions.filter((q)=>{
        if(answers.findIndex((ans)=>{
           return ans.hasOwnProperty(q.qId)
        }) !== -1){
            return true;
        }
        else{
            return false;
        }
    });

    console.log(answeredQuestions);

    const resultValuesToDisplay = resultValues.filter((res)=>{
        if(answeredQuestions.findIndex((ans)=>{ return ans.qId===res.questionId})!==-1){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(resultValuesToDisplay);


    return(
        answeredQuestions.map((q)=>{
            return(
                <div className="Result-Content" key={q.qId}>
                    <ResultImage
                        picture={SCENARIO_IMGS[scenarioTitle]}
                    />
                    <div>
                        <ResultChoices
                            scenarioTitle={scenarioTitle}
                            result={q}
                            answers={answers}
                        />
                    </div>
                    <div>
                        55%
                    </div>
                </div>
                )
        })
    );
}

export default ResultContent;
