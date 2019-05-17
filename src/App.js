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

  constructor(props) {
    super(props);
    this.state={
      sideDrawerOpen:false,
      prevScrollpos:0,
      visible:true
    };
    this.myref = React.createRef();   //I needed this to capture the correct scroll height

  }



  componentDidMount(){
      this.props.fetchUser();
      if(this.headerRef){

      }
  }


  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler=()=>{
    this.setState({sideDrawerOpen:false});
  }


  scrollHandler =()=>{
    
    const { prevScrollpos } = this.state;

    const currentScrollPos = this.myref.current.scrollTop;
    const visible = prevScrollpos > currentScrollPos;
    if(this.myref){
      this.setState({prevScrollpos:currentScrollPos,visible:visible});
    }
  }



  
  render() {
   
    const {visible} = this.state;
    const {auth} = this.props;
    let backdrop = null;
    const openHeader = {top:'0'}
    const closeHeader = {top: '-150px'}
    let headerstyle = null
    if(visible){
      headerstyle=openHeader
    }
    else{
      headerstyle=closeHeader;
    }


    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backDropClickHandler}/>
    }
    
    return (
      <div className="App"  ref={this.myref} onScroll={this.scrollHandler}>  
        <Header styleheader={headerstyle} drawerClickHandler={this.drawerToggleClickHandler} visible={visible}/>
          <SideDrawer auth ={auth} show={this.state.sideDrawerOpen}/>
          {backdrop}
          <main style={{marginTop:'12em'}} >
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
