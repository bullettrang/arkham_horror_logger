import React from 'react';
import {groupBy} from 'lodash';
import ResultChoice from './ResultChoice/ResultChoice';
import './ResultChoices.css';

const getIndexOfAnswer=(answers,qId)=>{
   return answers.findIndex(ans=> ans.hasOwnProperty(qId));

}

const ResultChoices =(props)=>{


    const styleSelected={
        color:'black'
    }
    const styledOther={
        color:'gray'
    }
    const {answers,result,percents}=props;

    console.log(percents);

    return(
        <div className="ResultChoices__Wrapper">
            { 
               result.choices.map((choice,idx,arr)=>{
                        const answerValue = parseInt(Object.keys(choice)[0]);
                        const percentValue= percents[result.qId][0];
                        
                        
                        const {totalVotes}= percentValue;
                        //console.log(totalVotes);
                        const choiceValue = percentValue.choices.find(choice=>choice.choiceValue===answerValue);
                        console.log(choiceValue);
                        let percentStr = '0%';
                        if(choiceValue===undefined){
                            console.log('choiceValue is undefined')
                        }
                        else{
                            percentStr=((choiceValue.total/totalVotes).toFixed(2) * 100 + '%');
                        }

                            return(
                                <ResultChoice 
                                    result={choice[answerValue]}
                                    style={result.userChoice===answerValue? styleSelected:styledOther}
                                    key={choice[answerValue]}
                                    percent={percentStr}
                                />
                            );
                })
            }
        </div>
    );
}

export default ResultChoices;