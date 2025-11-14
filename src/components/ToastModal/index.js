import { Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import { Button, Icons, SizedBox, Text } from '..';
import { close_icon, cross_icon, success_icon } from '../../assets/icons';
import { SIZES } from '../../constants';
import { common_styles } from '../../utils/common_styles';
import { TextWeights } from '../../config';
import { useDispatch } from 'react-redux';
import { setToastData } from '../../redux/slices/auth-slice';

const ToastModal = ({ visible, title, description, isError }) => {
  const dispatch = useDispatch();
  const onPressClose = () => {
    dispatch(
      setToastData({
        show_toast_modal: false,
        toast_title: null,
        toast_description: null,
        is_error: false,
      }),
    );
  };
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressClose}
        style={styles.main_view}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={styles.sub_view}
        >
          <TouchableOpacity
            onPress={onPressClose}
            hitSlop={common_styles.hitslop}
            style={styles.icon_view}
            activeOpacity={0.6}
          >
            <Icons name={close_icon} />
          </TouchableOpacity>

          <SizedBox />

          <Icons name={isError ? cross_icon : success_icon} fill="white" />

          <Text
            align={'center'}
            weight={TextWeights.bold}
            text={isError ? 'Error' : 'Success'}
            size={SIZES.h22}
            mt={SIZES.padding2}
          />
          <Text
            align={'center'}
            text={description}
            mt={SIZES.padding2 / 2}
            lineHeight={SIZES.normal}
          />

          <SizedBox />

          <Button buttonText={'Dismiss'} onPress={onPressClose} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ToastModal;
