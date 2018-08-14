import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setActiveNav } from "./../store/AppActions";
import { Carousel } from "react-bootstrap";
import "./../css/home.css";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import CountDown from "./CountDown";

class About extends Component {

    componentDidMount() {
        this.props.setActiveNav("/about");
    }    
  
    render() {              
        return (
            <div>       
                Back stage section
            </div>
            
        );
    }
}

About.propTypes = {
    setActiveNav: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    setActiveNav: (activeNav) => {
        dispatch(setActiveNav(activeNav));
    }
});

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(About));
export default translate("about")(AboutContainer);
