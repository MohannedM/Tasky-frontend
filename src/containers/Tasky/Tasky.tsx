import React, {useEffect} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar';
import CustomFooter from '../../components/CustomFooter/CustomFooter';
import {connectAuthState, taskyProps} from '../types.module';
import {connect} from 'react-redux';
import {checkAuth} from '../../store/actions';
import NotFound from '../NotFound/NotFound';
import Redux from 'redux';


const Tasky: React.FC<taskyProps> = React.memo(props => {
    useEffect(()=>{
        props.onCheckAuth();
    });
    
    let routes = (
        <React.Fragment>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/" exact component={LandingPage} />
                <Route path="/" component={NotFound} />
            </Switch>
        </React.Fragment>
    );
    if(props.isAuth){
        routes = (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
    return (
    <React.Fragment>
        <CustomNavbar isAuth={props.isAuth} first_name={props.firstName} last_name={props.lastName} />
        {routes}
        <CustomFooter />
    </React.Fragment>
    );
})

const mapStateToProps = (state: connectAuthState) => {
    return {
        isAuth: state.auth.token !== null,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName
    }
}
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
    return{
        onCheckAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasky);