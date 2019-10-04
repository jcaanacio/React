import React, { Component } from 'react';
import { Tab , Tabs} from 'react-bootstrap';
import Registration from  '../../components/Registration/Index';
export default class TabMenu extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="registration" id="uncontrolled-tab-example">
			  <Tab eventKey="registration" title="New to Carly ?">
				<Registration></Registration>
			  </Tab>
			  <Tab eventKey="login" title="Log In">
				<span>Log In</span>
			  </Tab>
			</Tabs>
        );
    }
}