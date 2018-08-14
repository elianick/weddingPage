import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setActiveNav } from "./../store/AppActions";

import { translate } from "react-i18next";
import PropTypes from "prop-types";
import {Grid, Row, PageHeader, Col, Carousel} from "react-bootstrap";
import CountDown from "./CountDown";

class About extends Component {

    componentDidMount() {
        this.props.setActiveNav("/about");
    }    

    renderSlide = (id) =>(
        <Carousel.Item >
            <img width="100%" src={`/img/backstage/b${id}.jpg`} />
        </Carousel.Item>)
  
    render() {
        const {props:{t}} = this;      
        const slidesId = [1,2,3,4,5,6,7];        
        return (
            <div>
                <Grid style={{width:"90%"}}>
                    <Row><PageHeader className="App">Backstage</PageHeader> </Row>
                    <Row>
                        <Col xs={12} md={6}>       
                            {t("silvia1")}
                            <br/>{t("elia1")}
                            <br/>{t("silvia2")}
                            <br/>{t("elia2")}
                            <br/>{t("challenge")}
                            <br/>{t("suggestion")}
                            <br/>{t("learnings")}
                            <br/>{t("conclusion")} {" "} <i class="fa fa-smile-o"></i>
                        </Col>
                        <Col xs={12} md={6} style={{"margin-top": "20px", "margin-bottom": "20px"}}>
                            <Carousel >                   
                                {slidesId.map(this.renderSlide)}
                            </Carousel>
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
