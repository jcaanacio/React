import React, { Component } from 'react';
import { Tab , Tabs, button} from 'react-bootstrap';
import RegistrationForm from './form';

export default class Registration extends Component {
    render() {
        return (
            <div className="container">
				<h5 className="marged-1-rem">
					<strong>
						Continue with...
					</strong>
				</h5>
				
				
				<div className="row centered">
					<div className="col-6">
						<button className="btn btn-light">
						<img className="btn-icon" src="/images/Icon_Facebook.png" width="20" />
						
						FACEBOOK</button>
					</div>
					<div className="col-6">
						<button className="btn btn-light">
						<img className="btn-icon" src="/images/Icon_Google.png" width="20" />
						GOOGLE</button>
					</div>
					
				</div>
				
				
				<small className="text-muted">We will never share any of your data or post anything on your behalf.</small>
				<hr></hr>
				
				<h5 className="marged-1-rem">
					<strong>
						Or Sign Up with your email
					</strong>
				</h5>
				
				<RegistrationForm></RegistrationForm>
			</div>
        );
    }
}