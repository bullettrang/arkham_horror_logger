import React, {Component} from 'react';
import { Link} from "react-router-dom";
import {connect} from 'react-redux';
import FilesMenu from './FilesMenu/FilesMenu';
import * as actions from '../../actions/index';
import "./DashBoard.css"


class Dashboard extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <div>NOT LOGGED IN</div>
                )
            default: 
                return (
                    <div>
                        <FilesMenu/>
                        <div className="Campaign_Link--wrapper">
                            <Link className="Campaign_Link" to="/campaign"> 
                                <span className="Campaign_Wrapper"><span>+</span> CREATE A CAMPAIGN</span>
                            </Link>
                        </div>
                    </div>
                );     
        }
    }

    render(){
        return(
            <div className="DashBoard_Wrapper" onScroll={()=>console.log(window.screenTop)}>
                
              {this.renderContent()}
            </div>
          );
    }

  }

  const mapStateToProps = ({auth}) => {
    return {
      auth
    }
  }
  
  export default connect(mapStateToProps,actions)(Dashboard);
  