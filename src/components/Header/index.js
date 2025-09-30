import { TouchableOpacity, View } from 'react-native';
import { Icons, ImageView, RowView, Text } from '../index';
import { styles } from './index.style';
import { images, SIZES } from '../../constants';
import { goBack, navigate } from '../../navigation/service';
import { back_icon, menu_icon, notification_icon } from '../../assets/icons';
import { TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  title,
  style,
  iconStyle,
  isDashBoard = false,
  rightIcon  = notification_icon,
  onPressIcon,
  isMenu = false
}) => {
  const navigation = useNavigation()

  return (
    <RowView
      alignItems={'center'}
      justifyContent={'space-between'}
      style={[styles.main_view, style]}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.icon_view, iconStyle]}
        onPress={isMenu ? () => navigation.openDrawer() : goBack}
      >
        <Icons name={isMenu ? menu_icon : back_icon} />
      </TouchableOpacity>

      {isDashBoard ? (
        <ImageView
          image={images.home_logo}
          width={SIZES.padding * 6}
          height={SIZES.padding * 3}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : (
        <Text
          style={{ flex: 1 }}
          weight={TextWeights.medium}
          size={SIZES.h18}
          text={title}
          align={'center'}
        />
      )}

      {rightIcon ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.icon_view, iconStyle]}
          onPress={() => onPressIcon ? onPressIcon() : navigate('Notification')}
        >
          <Icons name={rightIcon} />
        </TouchableOpacity>
      ) : <View style={styles.icon_view} />}

    </RowView>
  );
};
export default Header;
