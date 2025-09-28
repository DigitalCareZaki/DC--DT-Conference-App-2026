import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './service';
import { DrawerNavigation } from './index';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import {  Conference, ConferenceDetails, Login,  Signup, Splash, WorkShop, WorkshopDetails } from '../screens';
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
          <Stack.Screen name="Conference" component={Conference}/>
           <Stack.Screen name="ConferenceDetails" component={ConferenceDetails}/>
           <Stack.Screen name="WorkShop" component={WorkShop}/>
            <Stack.Screen name="WorkShopDetails" component={WorkshopDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast  position='top' />
      {/* <NotificationModal /> */}
    </>
  );
};

export default MainNavigator;

