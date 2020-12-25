import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';

const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...props
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <Route component={Component} {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
