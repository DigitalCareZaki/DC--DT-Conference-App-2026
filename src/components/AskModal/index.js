import { Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import { Button, Icons, Loader, RowView, SizedBox, Text } from '..';
import { close_icon } from '../../assets/icons';
import { SIZES } from '../../constants';
import { common_styles } from '../../utils/common_styles';
import { TextWeights } from '../../config';

const AskModal = ({
  visible,
  onPressClose,
  onPressYes,
  description,
  title,
  icon,
  btnText,
  isLoading,
  isEdit = false,
  onPressEdit,
}) => {
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

          <Icons name={icon} />

          <Text
            align={'center'}
            weight={TextWeights.bold}
            text={title}
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

          <RowView justifyContent={'center'}>
            {isLoading ? (
              <Loader />
            ) : (
              <Button
                buttonText={btnText}
                onPress={onPressYes}
                style={{ width: isEdit ? '50%' : '100%' }}
              />
            )}
            {isEdit ? (
              <Button
                buttonText={'Edit'}
                onPress={onPressEdit}
                style={{ width: '50%' }}
              />
            ) : null}
          </RowView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default AskModal;
