import * as React from "react";
import PropTypes from "prop-types";
import "./../css/rsvp.css";
import { Grid, Row, PageHeader, Panel, PanelGroup, Label } from "react-bootstrap";
import {noop} from "lodash";
import { db } from "../firebase";
import withAuthorization from "../components/auth/withAutorization";
import { translate } from "react-i18next";
import QuizContainer from "../container/QuizContainer";
import NewRequestContainer from "../container/NewRequestContainer";

class Rsvp extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {activePanel: "", mark: null, showSection: false};
    }


    componentDidMount() {
        this.props.setActiveNav("/rsvp");
        this.isQuizAnswered(false);
    }

    handleChangePanel = panel => {        
        if (!this.state.mark && panel === "RSVP")
            return;
        this.setState({ activePanel: panel }); }

    isQuizAnswered = justAnswered => {       
        db.getQuizResult(this.props.authUser.uid).then(
            snapshot => {
                const data = snapshot.toJSON();                
                if (data == null || !data.mark)
                    return this.setState({activePanel: "QUIZ", showSection:true});                
                const mark = data.mark;            
                return this.setState({mark: mark, activePanel: justAnswered? "QUIZ" : "RSVP", showSection:true});
            }).catch(noop);        
    }

    activateRSVP = () =>{
        this.isQuizAnswered(true);
    }
  
    render() {
        const {state:{activePanel, mark, showSection}, props:{t}} = this;       
        return (
            <div>
                {showSection && <Grid >
                    <Row><PageHeader className="App">{this.props.t("RSVP & Quiz")}</PageHeader> </Row>
                    <div className="RSVP-subheader"><span className="RSVP-subheader2"><Label bsStyle="primary">READ ME...</Label></span> { }
                        {t("RSVPsubheader")}
                        <br/>{t("RSVPsubheader2")}</div>
                    <PanelGroup accordion id="accordion-rsvp" onSelect={this.handleChangePanel} activeKey={activePanel}>
                        <Panel eventKey="QUIZ" bsStyle="info" >
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <div className="panel-header">
                                        <i class="fa fa-calendar-check-o"></i> { }
                                        {mark? t("quizWithMark", {mark: mark}): t("quizHeader")}
                                    </div>                                    
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible className="quiz-pannel">
                                <QuizContainer activateRSVP={this.activateRSVP}/>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="RSVP" bsStyle="info">
                            <Panel.Heading className={mark? "" : "panel-head-disabled"}>
                                <Panel.Title toggle>
                                    <div className={mark? "panel-header" : "panel-header panel-head-disabled"}>
                                        <span class="glyphicon glyphicon-hand-right"></span> 
                                        {  } RSVP
                                    </div>
                                </Panel.Title>
                            </Panel.Heading >
                            <Panel.Body collapsible>
                                <div className="text-with-margin-bottom"> {t("RSVPIntroduction")}</div>
                                <NewRequestContainer />
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>                   
                </Grid>}
            </div >
        );
    }
}
Rsvp.propTypes = {
    authUser: PropTypes.object.isRequired,
    isReviewer: PropTypes.bool.isRequired,
    setActiveNav: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    userLogged: PropTypes.object.isRequired,
    userReviewed: PropTypes.object
};

Rsvp.defaultProps = {
    userReviewed: null
};

const authCondition = (authUser) => !!authUser;

export default translate("quiz")(withAuthorization(authCondition)(Rsvp));