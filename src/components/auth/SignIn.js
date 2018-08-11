import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import { auth, db, firebase} from "../../firebase";
import * as routes from "../../constants/routes";
import { setActiveNav, login } from "./../../store/AppActions";
import { connect } from "react-redux";
import {Grid, Row, Col, Panel, FormGroup, ControlLabel, FormControl, Button, PageHeader} from "react-bootstrap";
import "../../css/login.css";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    setActiveNav: (activeNav) => {
        dispatch(setActiveNav(activeNav));
    },
    login: (authUser) => {
        dispatch(login(authUser));
    }
});

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
    googleError: null,
    weddingCode: "",
    showInputCode: false,
    username:"",
    showLoading: false
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

    }

    onSubmit = (event) => {
        const {
            email,
            password
        } = this.state;

        const {props:{history}} = this;
        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
                return this.props.setActiveNav("");
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });


        event.preventDefault();
    }

    handleGoogleSignIn = () => {
        this.setState({showLoading: true});
        auth.doSignInWithGoogleAccount()
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const token = result.credential.accessToken;
                // The signed-in user info.
                const user = result.user; 
                db.onceGetUser(user.uid)
                    .then(snapshot => {
                        const userDB = snapshot.toJSON();                    
                        if (userDB != null){
                            this.props.login(user);                
                            return this.props.history.push(routes.HOME);
                        }
                        else {
                            return this.setState({user:user, username:user.displayName, showInputCode: true, showLoading: false});
                        }
                    }).catch( () => this.setState({showLoading: false}));               
            })
            .catch(error => this.setState({googleError: error, showLoading: false}));
    };

    SignUpLink = () => <p>{this.props.t("noAccount")}{ } <Link to={routes.SIGN_UP}>{this.props.t("signUp")}</Link></p>;
    ResetPasswordLink = () =><p>{this.props.t("forgotPassword")}{ } <Link to={routes.PASSWORD_FORGET}> {this.props.t("resetPassword")}</Link></p>;    
    
    handleOnSubmitWeddingCode = (event) => {        
        const { state:{weddingCode, user, username}} = this;
        const weddingFunction = firebase.functions.httpsCallable("validateWeedingCode");        
        weddingFunction({code: weddingCode})
            .then(result => {                
                if (result.data.isValid){                                          
                    db.doCreateUser(user.uid, 
                        username? username: user.displayName, 
                        user.displayName, 
                        user.email, 
                        this.props.i18n.language
                    ).then(() => {                      
                        this.props.login(user);                
                        this.props.history.push(routes.HOME);
                        return this.props.setActiveNav("");
                    })
                        .catch(error => {
                            this.setState(byPropKey("googleError", error));
                        });
                }                
                else {                    
                    this.setState(byPropKey("googleError", {message: this.props.t("wrongCode")}));
                }
            }).catch(error => this.setState(byPropKey("error", error)));
        event.preventDefault();
    }

    render() {
        const { state:{email, password, error, googleError, showInputCode, weddingCode, showLoading}, props:{t}} = this;

        const isInvalid = (!showInputCode && (password === "" || email === "")) ||
                          (showInputCode && weddingCode === "") ;

        if (showLoading){

            return (
                <div className="loading-container"><div className="loading"></div></div>
            );
        }

        return (
           
            <Grid >
                <Row><PageHeader className="App"></PageHeader> </Row>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} >
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title className="login-header" componentClass="h3">{t("signIn")}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <form onSubmit={!showInputCode? this.onSubmit: this.handleOnSubmitWeddingCode}>
                                    {!showInputCode && <div>
                                        <FormGroup>
                                            <ControlLabel>{t("emailAddress")}</ControlLabel>
                                            <FormControl id="emailId" name="email" type="text" onChange={event => this.setState(byPropKey("email", event.target.value))} placeholder={t("enterMail")} />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>{t("password")}</ControlLabel>
                                            <FormControl id="passwordId" name="password" type="password" onChange={event => this.setState(byPropKey("password", event.target.value))} placeholder={t("enterPassword")} />
                                        </FormGroup>                                   
                                        <div className="div-login-button">
                                            <Button className="btn-primary login-button" disabled={isInvalid} type="submit">{t("signIn")}</Button>                                             
                                        </div>
                                        <div className="google-login div-login-button"><img src="btn_google_signin_dark_normal_web.png" onClick={this.handleGoogleSignIn} alt="Sign in with Google"/></div>
                                             
                                          
                                        {error && <p>{error.message}</p>}
                                        {googleError && <p>{googleError.message}</p>}
                                       
                                        <FormGroup>
                                            {this.SignUpLink()}
                                            {this.ResetPasswordLink()}
                                        </FormGroup>
                                    </div>}
                                    {showInputCode && <div>
                                        <FormGroup>                                            
                                            <p>{t("hiNewUser", {username: this.state.user.displayName})}</p>                                            
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>{t("weddingCode")}</ControlLabel>
                                            <FormControl id="weddingCode" name="text" type="text" onChange={event => this.setState(byPropKey("weddingCode", event.target.value))} placeholder={t("weddingCode")} />                                            
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>{t("confirmYourName")}</ControlLabel>
                                            <FormControl id="username" name="text" type="text"onChange={event => this.setState(byPropKey("username", event.target.value))} placeholder={this.state.username} />                                            
                                        </FormGroup>
                                        <FormGroup>                                             
                                            <Button className="btn-primary" disabled={isInvalid} type="submit">{t("validateCode")}</Button>
                                            {googleError && <p>{googleError.message}</p>}
                                        </FormGroup>
                                    </div>}
                                </form>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
          
        );
    }
}
const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));

SignIn.propTypes = {
    history: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    setActiveNav: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

export default translate("login")(SignInContainer);