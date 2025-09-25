import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './service';
import { DrawerNavigation } from './index';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import {  Login,  Signup, Splash } from '../screens';
import { notificationListener } from '../utils/notification_service';

const MainNavigator = () => {
  const dispatch = useDispatch()
  const Stack = createNativeStackNavigator();

  const { user } = useSelector(state => state.constant)

  useEffect(() => {
    notificationListener((message) => { });
  }, []);

  return (
    <>
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator
          initialRouteName={"Splash"}
          screenOptions={{ headerShown: false, unmountOnBlur: true }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast  position='top' />
      {/* <NotificationModal /> */}
    </>
  );
};

export default MainNavigator;

