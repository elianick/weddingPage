import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./../css/home.css";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import CountDown from "./CountDown";

class Home extends Component {

    componentDidMount() {
        this.props.setActiveNav("/home");
    }

    renderSlide = (id) =>{
        const className = `bg slide${id}`;
        return (
            <Carousel.Item >
                <div className={className} > </div>
                <Carousel.Caption>                
                    <CountDown /> 
                </Carousel.Caption>
            </Carousel.Item>);
    }

    render() {
        const { props: { t } } = this;
        const slidesId = [1,2,3];
        return (
            <div className="max-height">      
                <Carousel >                   
                    {slidesId.map(this.renderSlide)}

                </Carousel>
                <div className="footer-general">
            Powered by Gioina Software House <i class="fa fa-creative-commons"></i> 2018
                </div>       
            </div>
            
        );
    }
}

Home.propTypes = {
    setActiveNav: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};
export default translate("home")(Home);
