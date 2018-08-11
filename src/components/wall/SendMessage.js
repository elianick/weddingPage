import * as React from "react";
import PropTypes from "prop-types";
import { MAIL_CODES } from "../../constants/appConstant";
import { Col, Row, Panel, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { translate } from "react-i18next";
import { getUid, createNotification } from "../common";

class SendMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newMessage: "",
            touched: false,
            panelOpen: false
        };
        this.handleFormChanges = this.handleFormChanges.bind(this);
        this.handlePanelClick = this.handlePanelClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePanelButtonClick = this.handlePanelButtonClick.bind(this);
    }


    handleFormChanges(event) {        
        const { target, type } = event;
        const { name } = target;
        const value = type === "checkbox" ? target.checked : target.value;
        const partialState = {};
        partialState[name] = value;
        this.setState(partialState);
        this.setState({touched: true});
    }

    handlePanelClick() { }

    handlePanelButtonClick() {
        this.setState({ panelOpen: !this.state.panelOpen });
    }

    handleSubmit(event) {
        const date = new Date();
        const { state: { newMessage }, props: { userLogged, userReviewed, isReviewer } } = this;
        const uid = getUid(userLogged, userReviewed);
        const message = {
            author: userLogged.username,
            uid: userLogged.uid,
            text: newMessage,
            creationDate: date.toJSON(),
            read: false,
            isReviewer: isReviewer
        };
        const notification = createNotification(userLogged, userReviewed, MAIL_CODES.NEW_MESSAGE, newMessage);
        this.props.sendMessage(message, uid, isReviewer, notification);
        this.setState({touched: false, newMessage: ""});
        event.preventDefault();
    }

    render() {
        const { props: { t }, state: { newMessage, panelOpen, touched } } = this;
        const newMessageValidationState = newMessage === ""? "error" : "success";
        const btnDisabled = newMessage === "";        
        return (
            <div><Row>
                <Col xs={12}>
                    <Button bsStyle="success" bsSize="small" onClick={this.handlePanelButtonClick} >{t("New Message")}</Button>
                    <Panel  id="collapsible-panel" expanded={panelOpen} onToggle={this.handlePanelClick}>
                        <Panel.Collapse>
                            <Panel.Body>
                                <Form onSubmit={this.handleSubmit} >
                                    <FormGroup controlId="form-group-new-message" validationState={touched?newMessageValidationState: null}>                                        
                                        <ControlLabel>{t("Text")}</ControlLabel>                                        
                                        <FormControl 
                                            name="newMessage" 
                                            type="text" 
                                            value = {newMessage}
                                            componentClass="textarea" 
                                            rows="4" 
                                            onChange={this.handleFormChanges} 
                                            placeholder={t("Enter a message")} />
                                        <FormControl.Feedback />    
                                    </FormGroup>
                                    <Button disabled={btnDisabled} className="btn  btn-primary" type="submit">{t("Send Message")}</Button> 
                                    
                                </Form>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </Col></Row></div>
        );
    }
}
SendMessage.propTypes = {
    isReviewer: PropTypes.bool.isRequired,    
    sendMessage: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    userLogged: PropTypes.object.isRequired,
    userReviewed: PropTypes.object
};

SendMessage.defaultProps = {
    userReviewed: null
};

export default translate("wall")(SendMessage);
