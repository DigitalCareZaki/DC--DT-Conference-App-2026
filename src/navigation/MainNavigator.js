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
  Contact,
  Dashboard,
  EditSocialMedia,
  Exhibition,
  Feedback,
  Gallery,
  Login,
  MyAgenda,
  Networking,
  Signup,
  Speakers,
  Splash,
  UserProfile,
  Venue,
  Conference,
  ConferenceDetails,
  WorkShop,
  WorkshopDetails,
  Notification,
  ForgotPassword,
  Otp,
  ResetPassword,
  AskQuestion,
} from '../screens';
import { notificationListener } from '../utils/notification_service';
import { getUserProfile } from '../redux/actions/auth-action';
import { firebase_messaging } from '../utils/firebase_service';
import { notificationTopic } from '../config';
import { getFavourites } from '../redux/actions/main-action';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    if (user) {
      dispatch(getUserProfile());
      dispatch(getFavourites());
    }
    firebase_messaging.subscribeToTopic(notificationTopic);
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
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Venue" component={Venue} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="MyAgenda" component={MyAgenda} />
          <Stack.Screen name="EditSocialMedia" component={EditSocialMedia} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Conference" component={Conference} />
          <Stack.Screen
            name="ConferenceDetails"
            component={ConferenceDetails}
          />
          <Stack.Screen name="WorkShop" component={WorkShop} />
          <Stack.Screen name="WorkShopDetails" component={WorkshopDetails} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="AskQuestion" component={AskQuestion} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default MainNavigator;
