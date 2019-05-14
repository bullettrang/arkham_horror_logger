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

    if(result.type==="radio"){
        console.log('checked type, isRadio so we map all the choices')
        return(
            <div className="ResultChoices__Wrapper">
                { 
                   result.choices.map((choice)=>{
                            
                            const answerValue = parseInt(Object.keys(choice)[0]);
                            const percentOfAnswerValue= percents[result.qId][0];
                            const {totalVotes}= percentOfAnswerValue;
                            const choiceValue = percentOfAnswerValue.choices.find(choice=>choice.choiceValue===answerValue);
                            let percentStr = '0%';
                            if(choiceValue!==undefined){    //to handle choices that haven't been submitted
                              const formattedFigure=  (choiceValue.total/totalVotes* 100).toFixed(2) ;
                                percentStr=(formattedFigure + '%');
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
    else if(result.type==="checkboxes"){
        console.log('TODO handle checkboxes')
        console.log(result.userChoices);
        console.log(result.choices);

        // 0: {0: "You interrogated Wolfman Drew"}
        // 1: {1: "You interrogated Herman Collins"}
        // 2: {2: "You interrogated Peter Warren"}
        // 3: {3: "You interrogated Victoria Devereux"}
        // 4: {4: "You interrogated Ruth Turner"}
        return(
            <div className="ResultChoices__Wrapper">
            {result.choices.map((choice)=>{
                console.log(choice);
                const answerValue = parseInt(Object.keys(choice)[0]);
                console.log(answerValue);
                const percentOfAnswerValue= percents[result.qId][0];
                const {totalVotes}= percentOfAnswerValue;
                console.log(percentOfAnswerValue.choices);
                const choiceValue = percentOfAnswerValue.choices.find(choice=>choice.choiceValue===answerValue);
                let percentStr = '0%';

                if(choiceValue!==undefined){    //to handle choices that haven't been submitted
                const formattedFigure=  (choiceValue.total/totalVotes* 100).toFixed(2) ;
                  percentStr=(formattedFigure + '%');
              }

                return(
                    <ResultChoice 
                        result={choice[answerValue]}
                        style={result.userChoices.findIndex(choice=>choice===answerValue)!==-1? styleSelected:styledOther}
                        key={choice[answerValue]}
                        percent={percentStr}
                    />
                    
                );
            })}
            </div>
        );
    }

}

export default ResultChoices;