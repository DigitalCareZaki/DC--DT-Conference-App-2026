import { TouchableOpacity, View } from 'react-native';
import { Icons, ImageView, RowView, Text } from '../index';
import { styles } from './index.style';
import { COLORS, images, SIZES } from '../../constants';
import { goBack, navigate } from '../../navigation/service';
import { back_icon, cart_icon, notification_icon } from '../../assets/icons';
import { TextWeights } from '../../config';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

const Header = ({
  title,
  style,
  leftIcon,
  back = true,
  onPressBack,
  iconStyle,
  isCart = false,
  isDashBoard = false,
  isHome = false,
  image = null,
  color,
  name = null,
  rightIcon,
  onPressRightIcon,
}) => {
  const { cart_data } = useSelector(state => state.constant);

  return (
    <RowView
      alignItems={'center'}
      justifyContent={'space-between'}
      style={[styles.main_view, style]}
    >
      {back && !isHome ? (
        <RowView gap={0}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.back_icon_view, iconStyle]}
            onPress={onPressBack ? () => onPressBack() : goBack}
          >
            <Icons name={leftIcon || back_icon} />
          </TouchableOpacity>
          {name && (
            <Text
              size={SIZES.h16}
              color={COLORS.black}
              weight={TextWeights.semibold}
              text={name?.substring(0, 10)}
            />
          )}
        </RowView>
      ) : null}

      {isDashBoard ? (
        <ImageView
          image={images.drawer_logo}
          width={120}
          height={26}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <Text
          style={{ flex: 1 }}
          weight={TextWeights.semibold}
          size={isHome ? SIZES.h26 : SIZES.h20}
          color={color ?? COLORS.text_black}
          text={title}
          align={isHome ? 'left' : 'center'}
        />
      )}
      {rightIcon && (
        <RowView gap={0}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.back_icon_view, iconStyle]}
            onPress={onPressRightIcon}
          >
            <Icons name={rightIcon || back_icon} />
          </TouchableOpacity>
        </RowView>
      )}

      {/* {isCart ? (
        <View style={styles.right_icon_view} />
      ) : (
        <RowView>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.right_icon_view, iconStyle]}
            onPress={() => navigate('CartStack')}
          >
            <Icons iconHeight={25} name={cart_icon} />
            {cart_data?.length > 0 && (
              <View style={styles.count_view}>
                <Text
                  color={COLORS.white}
                  size={SIZES.h9}
                  ml={SIZES.padding2 / 5}
                  mt={-SIZES.padding2 / 6}
                  text={cart_data?.length}
                />
              </View>
            )}
          </TouchableOpacity>
        </RowView>
      )} */}

      {/* {
        isNotification ?
          :
           <RowView>
             <TouchableOpacity
               activeOpacity={0.6}
               style={[styles.right_icon_view, iconStyle]}
               onPress={() => navigate("Notifications")} >
               <Icons iconHeight={25} name={notification_icon} />
               {
                 unread_notification > 0 &&
                 <View style={styles.count_view} >
                   <Text
                     color={COLORS.white}
                     size={SIZES.h7}
                     ml={SIZES.padding2 / 5}
                     text={unread_notification} />
                 </View>
              }
            </TouchableOpacity>
           </RowView>

      } */}
    </RowView>
  );
};
export default Header;
