import React, { Component } from 'react';
import { Route, Redirect,Switch } from "react-router-dom";
import {connect} from 'react-redux';
import DashBoard from './Components/DashBoard/DashBoard';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';
import SideDrawer from './Components/Header/SideDrawer';
import Backdrop from './Components/Header/Backdrop';
import * as actions from './actions/index';
import './App.css';



class App extends Component {

  state={
    sideDrawerOpen:false
  };

  componentDidMount(){
      this.props.fetchUser();
  }

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler=()=>{
    this.setState({sideDrawerOpen:false});
  }

  
  render() {
    const {auth} = this.props;
    let backdrop = null;

    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backDropClickHandler}/>
    }
    return (
      <div className="App"  style={{height:'100%'}}>  
      
       <Header  drawerClickHandler={this.drawerToggleClickHandler}/>
       
        <SideDrawer auth ={auth} show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'5rem', position:'300'}}>
            <Switch>
              <Route path="/" exact component={DashBoard}></Route>
              <Route path="/campaign" component={CampaignMenu}/>
              <Route path="/scenario" component={ScenarioMenu}/>
              <Route path="/form" render={()=>(this.props.choicesDone?<Redirect to={'/campaign'}/>:<Form/>)}></Route>
              <Route path="/results" component={Result}></Route>
            </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({choices,auth}) => {
  return {
    choicesDone:choices.choicesDone,
    auth
  }
}

export default connect(mapStateToProps,actions)(App);
