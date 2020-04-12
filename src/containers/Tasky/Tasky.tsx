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
import Redux from 'redux';


const Tasky: React.FC<taskyProps> = React.memo(props => {
    useEffect(()=>{
        props.onCheckAuth();
    });
    
    let routes = (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={LandingPage} />
        </Switch>
    );
    if(props.isAuth){
        routes = (
            <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/" exact component={Dashboard} />
            </Switch>
        );
    }
    return (
    <React.Fragment>
        <CustomNavbar />
        {routes}
        <CustomFooter />
    </React.Fragment>
    );
})

const mapStateToProps = (state: connectAuthState) => {
    return {
        isAuth: state.auth.token !== null
    }
}
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
    return{
        onCheckAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasky);