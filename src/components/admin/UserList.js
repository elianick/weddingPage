import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as routes from "./../../constants/routes";
import PropTypes from "prop-types";
import { Grid, Col, Row, Table, PageHeader, Badge } from "react-bootstrap";
import "./../../css/userList.css";
import { db } from "../../firebase";
import { translate } from "react-i18next";
import withAuthorization from "../auth/withAutorization";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: null
        };
        this.handleIconClick = this.handleIconClick.bind(this);
        this.loadUserList = this.loadUserList.bind(this);
    }

    componentDidMount() {
        this.loadUserList();
        this.props.setActiveNav("/admin/user-list");
    }

    loadUserList() {
        db.onceGetUsers()
            .then(snapshot => this.setState(() => ({ users: snapshot.val() })))
            .catch(() => this.setState(() => ({ users: [] })));
    }

    handleIconClick = (uid, route, tabId) => () => {
        const { props: { history, setUserReviewed }, state: { users } } = this;
        setUserReviewed(users[uid], route);
        history.push({//eslint-disable-line fp/no-mutating-methods
            pathname: route,
            search: null,
            state: { activeTab: tabId }
        });
    }

    render() {
        const { props: { t }, state: { users } } = this;
        return (
            <div>
                <Grid>
                    {!!users &&
                        <div>
                            <Row><PageHeader className="App">{t("List of Users")}</PageHeader> </Row>
                            <Row>
                                <Col xs={4} xsOffset={3}>
                                    <Table className="App" striped bordered hover>
                                        <thead >
                                            <tr >
                                                <th>{t("Username")}</th>
                                                <th>{t("Email")}</th>
                                                <th>{t("Wall status")}</th>                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(users).map(key =>
                                                <tr key={key} >
                                                    <td>{users[key].username}</td>
                                                    <td>{users[key].email}</td>
                                                    <td>                                                      
                                                        {<button type="button" className="btn btn-default btn-xs" onClick={this.handleIconClick(key, routes.WALL)}>
                                                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                                                        </button>}
                                                        {users[key].unreadMessages > 0 && <Badge className="badge-nav">{users[key].unreadMessages}</Badge>}
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    }
                </Grid>
            </div>
        );
    }
}

UserList.propTypes = {
    history: PropTypes.object.isRequired,
    setActiveNav: PropTypes.func.isRequired,
    setUnreadMessagesCount: PropTypes.func.isRequired,
    setUserReviewed: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired

};
const authCondition = (authUser) => !!authUser;

export default translate("userList")(withAuthorization(authCondition)(withRouter(UserList)));