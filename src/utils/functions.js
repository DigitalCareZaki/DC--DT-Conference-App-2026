/**
 * Misc. functions
 */
// language translation

import { Alert, Dimensions, Platform } from 'react-native';
import { GOOGLE_WEB_CLIENT_ID } from '@env';
import Toast from 'react-native-toast-message';
import ImagePicker from 'react-native-image-crop-picker';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slices/constant-slice';
import { setToastData } from '../redux/slices/auth-slice';
import { navigate, resetNavigationStack } from '../navigation/service';

export const url_regix = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;

// first letter capitalize
export const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1);

export const getGoogleToken = async () => {
  try {
    GoogleSignin.configure({
      scopes: ['profile', 'email'],
      webClientId: GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
    });

    const hasSignedInBefore = await GoogleSignin.hasPreviousSignIn();
    let data;
    if (hasSignedInBefore) {
      data = await GoogleSignin.getCurrentUser();
      console.log('Existing Google user:', data);
    } else {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      data = await GoogleSignin.signIn();
      console.log('New Google user:', data);
    }

    return { data, hasSignedInBefore };
  } catch (error) {
    console.log('Google login error:', error);
    return null;
  }
};

export const getToken = () => AsyncStorage.getItem('token');
export const setToken = token => AsyncStorage.setItem('token', token);

export const openImagePicker = (onDone, multiple = false) => {
  ImagePicker.openPicker({
    mediaType: 'photo',
    width: 300,
    height: 400,
    multiple,
  })
    .then(image => {
      let name = image?.path?.split('/');
      let obj = {
        uri: Platform.OS === 'android' ? 'file://' + image.path : image.path,
        type: image.mime,
        name: name?.[name?.length - 1],
      };
      onDone(multiple ? image : obj);
    })
    .catch(err => {
      if (err?.toString() === 'Error: User did not grant library permission.') {
        Alert.alert(
          'Permission',
          'To select an image, please allow permissions from settings',
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            { text: 'Settings', onPress: () => Linking.openSettings() },
          ],
        );
      }
    });
};

export const openCamera = onDone => {
  ImagePicker.openCamera({
    mediaType: 'photo',
    width: 300,
    height: 400,
  })
    .then(image => {
      let name = image?.path?.split('/');
      let obj = {
        uri: Platform.OS === 'android' ? 'file://' + image.path : image.path,
        type: image.mime,
        name: name?.[name?.length - 1],
      };
      onDone(obj);
    })
    .catch(err => {
      if (err?.toString() === 'Error: User did not grant camera permission.') {
        Alert.alert(
          'Permission',
          'To capture an image, please allow permissions from settings',
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            { text: 'Settings', onPress: () => Linking.openSettings() },
          ],
        );
      }
    });
};

export const searchArray = (data, keyword) => {
  const result = [];
  data?.forEach(item => {
    let matched = false;
    Object.keys(item).forEach(key => {
      if (
        item &&
        typeof item[key] === 'string' &&
        (item[key]?.toLowerCase().includes(keyword.toLowerCase()) ||
          item[key]?.toLowerCase().match(keyword.toLowerCase()))
      ) {
        return (matched = true);
      } else if (item && typeof item[key] === 'object') {
        if (item[key]) {
          Object.keys(item[key]).forEach(val => {
            if (
              item[key][val] &&
              typeof item[key][val] === 'string' &&
              (item[key][val]?.toLowerCase().includes(keyword.toLowerCase()) ||
                item[key][val]?.toLowerCase().match(keyword.toLowerCase()))
            ) {
              return (matched = true);
            }
          });
        }
      } else if (
        item &&
        typeof item[key] === 'number' &&
        (item[key]?.toString()?.toLowerCase().match(keyword.toLowerCase()) ||
          item[key]?.toString()?.toLowerCase().includes(keyword.toLowerCase()))
      ) {
        return (matched = true);
      }
    });
    if (matched) {
      result.push(item);
    }
  });
  return result;
};

export const showToast = (type, message) => {
  Toast.show({
    type: type,
    text1: capitalize(type),
    text2: message,
    position: 'top',
  });
};

export function requestHandler({
  apiService,
  setData,
  setLoading,
  isSuccessMessage = false,
  isErrorMessage = true,
  param_data,
  onDone,
  isAuth,
  onError = () => {},
}) {
  return async dispatch => {
    try {
      setLoading && dispatch(setLoading(true));
      const response = await apiService(param_data);
      console.log('response', response);
      if (!response?.data?.error) {
        setData && dispatch(setData(response?.data?.data));
        isSuccessMessage &&
          setTimeout(() => {
            dispatch(
              setToastData({
                show_toast_modal: true,
                toast_description:
                  response?.data?.msg ?? response?.data?.message ?? '',
                is_error: false,
              }),
            );
          }, 500);

        onDone && onDone(response?.data);
      } else {
        setTimeout(() => {
          dispatch(
            setToastData({
              show_toast_modal: true,
              toast_description: response?.data?.message ?? '',
              is_error: true,
            }),
          );
        }, 500);
      }
    } catch (error) {
      console.log('error', error);
      const errData = error?.response?.data ?? error?.data ?? {};
      const errStatus = error?.response?.status ?? error?.status;

      onError(errData);

      if (errStatus === 401 && !isAuth) {
        dispatch(setUser(null));
        await AsyncStorage.clear();
      }
      if (isErrorMessage) {
        setTimeout(() => {
          dispatch(
            setToastData({
              show_toast_modal: true,
              toast_description:
                errData?.msg ?? errData?.message ?? 'Something went wrong',
              is_error: true,
            }),
          );
        }, 300);
      }
    } finally {
      setLoading && dispatch(setLoading(false));
    }
  };
}

export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlReg =
  /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;

export const facebookReg = /^(https?:\/\/)?(www\.)?facebook\.com(\/.*)?$/i;

export const instagramReg = /^(https?:\/\/)?(www\.)?instagram\.com(\/.*)?$/i;

export const linkedinReg = /^(https?:\/\/)?(www\.)?linkedin\.com(\/.*)?$/i;

export const youtubeReg =
  /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)(\/.*)?$/i;

export const twitterReg =
  /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)(\/.*)?$/i;

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export function scale(size) {
  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size) {
  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size, factor = 0.5) {
  return Math.floor(size + (scale(size) - size) * factor);
}
