import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {authFormType} from '../types.module';
import {connect} from 'react-redux';
import Redux from 'redux';
import {auth} from '../../store/actions';
import * as authActionTypes from '../../store/types/auth.module'
import * as generalTypes from '../types.module';
import { Link } from 'react-router-dom';

const Register: React.FC<generalTypes.registerProps> = React.memo(props => {

    const [registerForm, setRegisterForm] = useState<authFormType>({
    first_name: {
        value: '',
        valid: false,
        minLength: 3,
        maxLength: 15,
        touched: false,
        error: null
    },
    last_name: {
        value: '',
        valid: false,
        minLength: 3,
        maxLength: 15,
        touched: false,
        error: null
    },
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
    }
    });

    const registerHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const first_name = registerForm.first_name.value;
        const last_name = registerForm.last_name.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;

        props.onRegister({
            first_name,
            last_name,
            email,
            password
        });
    }

    const setInputHandler = (event: React.SyntheticEvent, property: 'first_name' | 'last_name' | 'email' | 'password' | 'confirm_password') => {
        event.persist();
        if((event.target as HTMLInputElement).value.length < registerForm[property].minLength || (event.target as HTMLInputElement).value.length > registerForm[property].maxLength){
            setRegisterForm((prevValue: authFormType) => {
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
            setRegisterForm((prevValue: authFormType) => {
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
        <React.Fragment>

        <Row className="py-5">
            <Col xs={6} className="primary-light p-5 mx-auto shadow-lg p-3 mb-5 rounded-extra">
                <Form>
                    <Form.Group controlId="formBasicFName">
                        <Form.Label className="text-white">First name</Form.Label>
                        <Form.Control onChange={(event: React.SyntheticEvent)=>setInputHandler(event, 'first_name')} type="text" placeholder="First name" />
                        <p className="text-muted"><small>{registerForm.first_name.error}</small></p>
                    </Form.Group>
                    <Form.Group controlId="formBasicLName">
                        <Form.Label className="text-white">Last name</Form.Label>
                        <Form.Control type="text" onChange={(event: React.SyntheticEvent)=>setInputHandler(event, 'last_name')} placeholder="Last name" />
                        <p className="text-muted"><small>{registerForm.last_name.error}</small></p>
                    </Form.Group>
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
                            <Button variant="light" className="text-primary" type="submit" onClick={registerHandler} disabled={!allValid}>
                                Register
                            </Button>

                        </Col>
                        <Col xs={12} md={6}>
                            <p className="text-white">Already have an account? <Link to="/login">Login</Link></p>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
        </React.Fragment>
    )
})
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
    return{
        onRegister: (authData: authActionTypes.registerData) => dispatch(auth(authData, 'register'))
    }
}
export default connect(null, mapDispatchToProps)(Register);