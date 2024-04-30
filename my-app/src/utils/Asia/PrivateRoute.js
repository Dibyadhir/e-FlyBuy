import React from 'react';
import { Route, Navigate } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {
	

	return <Route {...rest} render={(props) => {

		if(localStorage.getItem('cart-id')) {
			return <Component {...props} {...rest}/>
		} else {
			return <Navigate to="/" />
		}

	}} />
}

export default PrivateRoute;