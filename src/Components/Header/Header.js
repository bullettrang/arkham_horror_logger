import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import shortid from "shortid";  //for animations, need a new key prop to render each animation
import './Header.css';
class Header extends Component{
    //TODO: turn these links into drop down menu or something
    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <a href="/auth/google">Login With Google</a>
                )
            default: 
                return (
                    <React.Fragment>
                        <a href="/api/logout">Logout</a>
                        
                    </React.Fragment>
                );     
        }
    }

    render(){
        return(
            <div className="Header--wrapper" key={shortid.generate()}>
                <h1 className="Header--title">ARKHAM HORROR LOGGER</h1>
                <div className="Header--login">
                    {this.renderContent()}
                </div>
                <div className="Header--Results">
                    <Link to="/results">Results</Link>
                </div>
            </div>  
        );
    }
}

const mapStateToProps=({auth})=>{
    return{
        auth
    }
}

export default connect(mapStateToProps,null)(Header);