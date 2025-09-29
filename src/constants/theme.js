import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { scale } from '../utils/functions';

export const isIOS = Platform.OS === 'ios';
export const keyboardAvoidingBehaviour = isIOS ? 'padding' : 'padding';

export const COLORS = {
  primary: '#1C5BA8',
  text_black: '#1F1F1F',
  text_gray_color: '#999999',
  text_gray_color2: '#808080',
  background_grey_color: '#CCCCCC',
  text_red_color: '#ED1010',
  text_green_color: '#0C9409',
  text_dark_blue_color: '#2E4888',
  text_pink_color: '#FF7B7B',
  pending_text_color: '#EE4D4D',
  text_gray_color3: '#B4B4B4',
  input_background: '#D9D9D9',
  background_grey_color2: '#EFEFEF',
  modal_bakcgorund_color: 'rgba(0,0,0,0.5)',
  placeholder_text_color: '#777777',
  border_color: '#E6E6E6',
  shadow_color: '#262626',
  white: '#ffffff',
  black: '#000000',
  modal_background_color: '#00000050',
  transparent: 'transparent',
  text_aqua_color: '#28FFDE',
  keys_color: 'rgba(255, 255, 255, 0.8)',
};

export const SIZES = {
  // global sizes
  padding: scale(20),
  padding2: scale(12),

  // font sizes
  h6: scale(6),
  h7: scale(7),
  h8: scale(8),
  h9: scale(9),
  h10: scale(10),
  h11: scale(11),
  h12: scale(12),
  h13: scale(13),
  h14: scale(14),
  h15: scale(15),
  h16: scale(16),
  h18: scale(18),
  h20: scale(20),
  h22: scale(22),
  h24: scale(24),
  h26: scale(26),
  h28: scale(28),
  h35: scale(35),

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
