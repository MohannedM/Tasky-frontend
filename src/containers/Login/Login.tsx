import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {validationFormType} from '../types.module';
import {connect} from 'react-redux';
import Redux from 'redux';
import * as authActionTypes from '../../store/types/auth.module'
import * as generalTypes from '../types.module';
import { Link, Redirect } from 'react-router-dom';
import { auth, dismissAuthError } from '../../store/actions/auth';
import CustomModal from '../../components/CustomModal/CutsomModal';

const Login: React.FC<generalTypes.loginProps> = React.memo(props => {

    const [registerForm, setRegisterForm] = useState<validationFormType>({
    email: {
        value: '',
        valid: false,
        minLength: 7,
        maxLength: 30,
        touched: false,
        error: null
    },
    password: {
        value: '',
        valid: false,
        minLength: 6,
        maxLength: 20,
        touched: false,
        error: null
    },  
    });

    const loginHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const email = registerForm.email.value;
        const password = registerForm.password.value;
        props.onLogin({
            email,
            password
        });
    }

    const setInputHandler = (event: React.SyntheticEvent, property: 'first_name' | 'last_name' | 'email' | 'password' | 'confirm_password') => {
        event.persist();
        if((event.target as HTMLInputElement).value.length < registerForm[property].minLength || (event.target as HTMLInputElement).value.length > registerForm[property].maxLength){
            setRegisterForm((prevValue: validationFormType) => {
                return{
                    ...prevValue,
                    [property]:{
                        ...prevValue[property],
                        value: (event.target as HTMLInputElement).value,
                        touched: true,
                        error: 'Please enter a ' + property.split('_').join(' ') + ' of more than ' + prevValue[property].minLength + ' and less than ' + prevValue[property].maxLength + ' characters.'
                    }
                }
            });
        }else{
            setRegisterForm((prevValue: validationFormType) => {
                return{
                    ...prevValue,
                    [property]:{
                        ...prevValue[property],
                        value: (event.target as HTMLInputElement).value,
                        touched: true,
                        error: null
                    }
                }
            });
        }
    }
    let allValid = false;
    for(let inputObj in registerForm){
        if(!registerForm[inputObj].error && registerForm[inputObj].touched){
            allValid = true;
        }else{
            allValid = false;
            break;
        }
    }


    return(

        <Row className="py-5">
            <CustomModal error={props.error!} handleClose={props.onDismissError} />
            {props.isAuth ? <Redirect to="/" /> : null}
            <Col xs={6} className="primary-light p-5 mx-auto shadow-lg p-3 mb-5 rounded-extra">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" onChange={(event: React.SyntheticEvent)=>setInputHandler(event, 'email')} placeholder="Enter email" />
                        <p className="text-muted"><small>{registerForm.email.error}</small></p>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={(event: React.SyntheticEvent)=>setInputHandler(event, 'password')} />
                        <p className="text-muted"><small>{registerForm.password.error}</small></p>
                    </Form.Group>
                    <Row className="my-3">
                        <Col xs={12} md={6}>
                            <Button variant="light" className="text-primary" type="submit" onClick={loginHandler} disabled={!allValid || props.loading}>
                                Login 
                                {props.loading ? <> &nbsp; <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> </> : null} 
                            </Button>

                        </Col>
                        <Col xs={12} md={6}>
                            <p className="text-white">Don't have an account? <Link to="/register">Register</Link></p>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
});
const mapStateToProps = (state: generalTypes.connectAuthState) => {
    return{
        isAuth: state.auth.token !== null,
        error: state.auth.error,
        loading: state.auth.loading
    }
}
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
    return{
        onLogin: (authData: authActionTypes.loginData) => dispatch(auth(authData, 'login')),
        onDismissError: () => dispatch(dismissAuthError())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);