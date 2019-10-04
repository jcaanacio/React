import React, { Component } from 'react';
import { Forms, button} from 'react-bootstrap';
import RestSignUp from "../../rest/signup";


export default class RegistrationForm extends Component {
	
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	 
	handleSubmit(event) {
		event.preventDefault();
		const data = {
			id : event.target.emailaddress.value,
			pw : event.target.password.value
		};
		
		const response = RestSignUp(data);
	}
	 render() { 
		return (
		
			
			<div className="marged-2-rem">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' }>
                        <label htmlFor="emailaddress">Email address</label>
                        <input type="text" className="form-control" name="emailaddress"  />
                        
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Create Password</label>
                        <input type="password" className="form-control" name="password"/>
                        
                    </div>
					
					<div className="marged-2-rem">
						<small> By signing up, you agree to Carly's website <a href="https://www.google.com">Terms & Conditions</a> and <a href="https://www.google.com">Private Policy</a>.</small>
					</div>
					
                    <div className="form-group">

					 <button className="btn btn-exam-primary">Sign Up</button>
					 <span> Already have an account ? <a href="">Login</a></span>

					</div>
                </form>
            </div>
			
			
		
		
		);
	 }
}