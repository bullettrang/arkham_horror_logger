import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Header.css';
class Header extends Component{
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
                        <a href="/api/logout">Logout</a>
                );     
        }
    }

    render(){
        return(
            <div className="Header--wrapper">
                <h1 className="Header--title">ARKHAM HORROR LOGGER</h1>
                <div className="Header--login">
                    {this.renderContent()}
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