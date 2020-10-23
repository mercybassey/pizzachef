import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FormInput from '../../components/forn-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password} = this.state;
        
        emailSignInStart(email, password);
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render() {
        const { googleSignInStart } = this.props;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='email'
                    handleChange={this.handleChange}
                    required/>
                  
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    label='password'
                    handleChange={this.handleChange}
                    required/>
                    
                    <div className="buttons">
                            
                        <CustomButton type="submit" className="cb"> Sign in </CustomButton>
                        <CustomButton  className="cb" type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>

                    <p>Dont have an account?</p>
                    <button  className="custom"><Link to='/signup' >Sign up</Link></button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>  dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);