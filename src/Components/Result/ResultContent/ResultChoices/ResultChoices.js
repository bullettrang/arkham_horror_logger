import React from 'react';
import ResultChoice from './ResultChoice/ResultChoice';
import './ResultChoices.css';


const ResultChoices =(props)=>{


    const styleSelected={
        color:'black'
    }
    const styledOther={
        color:'gray'
    }
    const {result,percents}=props;

    //console.log(percents);

    return(
        <div className="ResultChoices__Wrapper">
            { 
               result.choices.map((choice,idx,arr)=>{
                        const answerValue = parseInt(Object.keys(choice)[0]);
                        const percentOfAnswerValue= percents[result.qId][0];
                        
                        
                        const {totalVotes}= percentOfAnswerValue;
                        //console.log(totalVotes);
                        const choiceValue = percentOfAnswerValue.choices.find(choice=>choice.choiceValue===answerValue);
                        //console.log(choiceValue);
                        let percentStr = '0%';
                        if(choiceValue!==undefined){
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