import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/forn-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error)
        }

     
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render() {
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
                        
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>

                    <p>Dont have an account?</p>
                    <button  className="custom"><Link to='/signup' >Sign up</Link></button>
                </form>
            </div>
        )
    }
}

export default SignIn;