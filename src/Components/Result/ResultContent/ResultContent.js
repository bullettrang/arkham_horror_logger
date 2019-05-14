import React from 'react';
import {groupBy} from 'lodash';
import {RESOLUTIONS} from '../../../constants/results';
import {SCENARIO_IMGS} from  '../../../constants/ScenarioImages';
import ResultImage from '../ResultImage';
import './ResultContent.css'
import ResultChoices from './ResultChoices/ResultChoices';


const ResultContent =(props)=>{

    const {answers,scenarioTitle,resultValues}=props;
    const allQuestionsForScenario = RESOLUTIONS[props.scenarioTitle];
    
    //grab only questions user answered
   const resolutionStrings= allQuestionsForScenario.filter((q)=>{
        if(answers.findIndex((ans)=>{
           return ans.hasOwnProperty(q.qId)
        }) !== -1){
            return true;
        }
        else{
            return false;
        }
    });

    //console.log('resolutionStrings ',resolutionStrings);
    //only want to display results that user answered
    const resultValuesToDisplay = resultValues.filter((res)=>{
        if(resolutionStrings.findIndex((ans)=>{ return ans.qId===res.questionID})!==-1){
            return true;
        }
        else{
            return false;
        }
    })
    
    const groupByEx = groupBy(resultValuesToDisplay,'questionID');

    resolutionStrings.map((rsStr)=>({
        ...rsStr,
        
    }));

    

    //add user choice property to each resolution object
    for(let resultStr of resolutionStrings){
        for(let ans of answers){
            const questionKey = Object.keys(ans)[0];
            if(resultStr.qId===questionKey && resultStr.type==='radio'){
                resultStr.userChoice = parseInt(ans[questionKey]);
            }else if(resultStr.qId===questionKey && resultStr.type==='checkboxes'){
                
                // console.log(resultStr.qId);
                // console.log(ans[questionKey]);
                resultStr.userChoices = ans[questionKey];
            }
        }
    }



    
    // console.log('percentages ',percentages);
    // console.log('resolutionStrings ',resolutionStrings);

    return(
        resolutionStrings.map((res)=>{
            console.log(res);
            return(
                <div className="Result-Content" key={res.qId}>
                    <ResultImage
                        picture={SCENARIO_IMGS[scenarioTitle]}
                    />
                    <div>
                        <ResultChoices
                            scenarioTitle={scenarioTitle}
                            result={res}
                            answers={answers}
                            percents={groupByEx}
                        />
                    </div>
                </div>
                )
        })
    );
}

export default ResultContent;
