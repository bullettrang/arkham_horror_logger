import React from 'react';
import {groupBy} from 'lodash';
import {RESOLUTIONS} from '../../../constants/results';
import {SCENARIO_IMGS} from  '../../../constants/ScenarioImages';
import ResultImage from '../ResultImage';
import './ResultContent.css'
import ResultChoices from './ResultChoices/ResultChoices';


const ResultContent =(props)=>{

    const {answers,scenarioTitle,resultValues}=props;
    const allQuestions = RESOLUTIONS[props.scenarioTitle];
    
   const resolutionStrings= allQuestions.filter((q)=>{
        if(answers.findIndex((ans)=>{
           return ans.hasOwnProperty(q.qId)
        }) !== -1){
            return true;
        }
        else{
            return false;
        }
    });


    //only want to display results that user answered
    const resultValuesToDisplay = resultValues.filter((res)=>{
        if(resolutionStrings.findIndex((ans)=>{ return ans.qId===res.questionID})!==-1){
            return true;
        }
        else{
            return false;
        }
    })

   //console.log(resultValuesToDisplay);
   
    //create percentages of answers submitted
    // const percentages = resultValuesToDisplay.map((res)=>{
    //     const totalVotes = res.totalVotes;
    //     const {choices} = res;
    //     let subpercentages=[];

    //     for(let choice of choices){
    //         let percentStr='';
    //         const {choiceValue}=choice;
    //        percentStr= ((choice.total/totalVotes).toFixed(2) *100+ '%');
    //         const choiceObj = assign({choiceValue:0,percentStr:''},{choiceValue:choiceValue,percentStr:percentStr})
    //        subpercentages.push(choiceObj);
    //     }
    //     const resultPercentageObj = assign({qId:'',percents:[]},{qId:res.questionID,percents:subpercentages})
    //     return resultPercentageObj;

    // });
    
    const groupByEx = groupBy(resultValuesToDisplay,'questionID');





    resolutionStrings.map((rsStr)=>({
        ...rsStr,
        
    }));

    for(let resultStr of resolutionStrings){
        for(let ans of answers){
            if(resultStr.qId===Object.keys(ans)[0]){
                resultStr.userChoice = parseInt(ans[Object.keys(ans)[0]]);
            }
        }
        

    }
    // console.log('percentages ',percentages);
    // console.log('resolutionStrings ',resolutionStrings);

    return(
        resolutionStrings.map((res)=>{
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
