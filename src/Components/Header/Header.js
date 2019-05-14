import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import EldersignSvg from '../DashBoard/SVGs/EldersignSvg';
import DrawerToggleButton from './DrawerToggleButton';
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
            // <div className="Header--wrapper" key={shortid.generate()}>
            <div className="Header__wrapper">
                    <div className="Header__toggle--button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>

                <div className="Header__content">
                <div className="Header__content--logo">
                <EldersignSvg width={'55px'} height={'55px'}/>
                </div>
                        <div className="Header__wrapper--title">
                            <h1 className="Header--title" ref={h1 => this.headerRef=h1}> ARKHAM HORROR LOGGER</h1>
                        </div>
                        <div className="Header__content--links">
                            <div className="Header--login" ref={div => this.loginRef=div}>
                                {this.renderContent()}
                            </div>
                            <div className="Header--Results" ref={div =>this.resultRef=div}>
                                <Link to="/results">Results</Link>
                            </div>
                    </div>
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