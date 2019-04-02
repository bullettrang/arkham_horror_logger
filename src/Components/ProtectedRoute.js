import React from 'react';
import {connect} from 'react-redux';
import {Redirect,Route} from 'react-router-dom';
function ProtectedRoute({ component: Component,question,...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          question !==null? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps=({choices})=>{
    return{
        question:choices.currentQuestion,
        questions:choices.questions,
        scenarioTitle:choices.selectedScenario,
        campaignTitle:choices.selectedCampaign,
        totalQuestions:choices.totalQuestions,
        questionIdx:choices.qIdx
    }
}

  export default connect(mapStateToProps,null)(ProtectedRoute);

