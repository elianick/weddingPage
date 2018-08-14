import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setActiveNav } from "./../store/AppActions";
import { Carousel } from "react-bootstrap";
import "./../css/home.css";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import {Grid, Row, PageHeader, Col} from "react-bootstrap";
import CountDown from "./CountDown";

class About extends Component {

    componentDidMount() {
        this.props.setActiveNav("/about");
    }    
  
    render() {
        const {props:{t}} = this;              
        return (
            <div>
                <Grid >
                    <Row><PageHeader className="App">Backstage</PageHeader> </Row>
                    <Row>
                        <Col xs={12}>       
                            {t("silvia1")}
                            <br/>{t("elia1")}
                            <br/>{t("silvia2")}
                            <br/>{t("elia2")}
                            <br/>{t("challenge")}
                            <br/>{t("suggestion")}
                            <br/>{t("learnings")}
                            <br/>{t("conclusion")} {" "} <i class="fa fa-smile-o"></i>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                        </Col>
                    </Row>
                </Grid>
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
