import { DrawerActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();
const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const replace = (name, params) => {
  navigationRef.current?.replace(name, params);
};

const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};


export default {
  navigate,
  replace,
  openDrawer,
  closeDrawer,
};
