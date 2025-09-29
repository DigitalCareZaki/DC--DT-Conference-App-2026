import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './service';
import { DrawerNavigation } from './index';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  AboutOrganizer,
  Chat,
  Dashboard,
  Exhibition,
  Gallery,
  Login,
  Networking,
  Signup,
  Speakers,
  Splash,
  UserProfile,
} from '../screens';
import { notificationListener } from '../utils/notification_service';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    notificationListener(message => {});
  }, []);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'Splash'}
          screenOptions={{ headerShown: false, unmountOnBlur: true }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Networking" component={Networking} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AboutOrganizer" component={AboutOrganizer} />
          <Stack.Screen name="Exhibition" component={Exhibition} />
          <Stack.Screen name="Speakers" component={Speakers} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="top" />
      {/* <NotificationModal /> */}
    </>
  );
};

export default MainNavigator;
