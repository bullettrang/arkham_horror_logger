import React from 'react';
import ResultChoice from './ResultChoice/ResultChoice';


const ResultChoices =(props)=>{

    const styleSelected={
        color:'black'
    }
    const styledOther={
        color:'gray'
    }
    const {answers,result}=props;

    return(
        <ul>
            { 
               result.choices.map((choice)=>{
                    let ansIdx = answers.findIndex(ans=> ans.hasOwnProperty(result.qId));
                    if( ansIdx!==-1){
                        const qIdStr = Object.keys(answers[ansIdx])[0]
                        if(choice.hasOwnProperty(answers[ansIdx][qIdStr])){
                            return(
                                <ResultChoice 
                                    result={choice[answers[ansIdx][qIdStr]]}
                                    style={styleSelected}
                                    
                                />
                            );
                        }
                        else{
                            let otherChoiceKey = Object.keys(choice)[0];
                            return(
                                <ResultChoice 
                                    result={choice[otherChoiceKey]}
                                    style={styledOther}
                                />
                            );
                        }
                    }
                    else{
                        return null;
                    }
                })
            }
        </ul>
    );
}

export default ResultChoices;