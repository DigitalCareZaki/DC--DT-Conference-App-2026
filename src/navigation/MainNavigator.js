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
  WhoShouldAttend,
  SocialMediaLinks,
  ExhibitorDetail,
  ImageView,
} from '../screens';
import {
  notificationListener,
  requestUserPermission,
} from '../utils/notification_service';
import { getUserProfile } from '../redux/actions/auth-action';
import { firebase_messaging } from '../utils/firebase_service';
import { notificationTopic } from '../config';
import { getFavourites } from '../redux/actions/main-action';
import { ToastModal } from '../components';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const { user } = useSelector(state => state.constant);
  const { show_toast_modal, toast_title, toast_description, is_error } =
    useSelector(state => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(getUserProfile());
      dispatch(getFavourites());
    }
    firebase_messaging.subscribeToTopic(notificationTopic);
    requestUserPermission();
    notificationListener();
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
          <Stack.Screen name="WhoShouldAttend" component={WhoShouldAttend} />
          <Stack.Screen name="SocialMediaLinks" component={SocialMediaLinks} />
          <Stack.Screen name="ExhibitorDetail" component={ExhibitorDetail} />
          <Stack.Screen name="ImageView" component={ImageView} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastModal
        description={toast_description}
        isError={is_error}
        title={toast_title}
        visible={show_toast_modal}
      />
    </>
  );
};

export default MainNavigator;
