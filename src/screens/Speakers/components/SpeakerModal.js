import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { ImageView, RowView, Text } from '../../../components';
import FastImage from 'react-native-fast-image';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const SpeakerModal = ({ visible, setVisibility, data }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisibility(false)}
    >
      <TouchableOpacity
        onPress={() => setVisibility(false)}
        activeOpacity={1}
        style={styles.main_view}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={styles.modal_view}
        >
          <ImageView
            width={120}
            height={120}
            radius={SIZES.padding * 4.65}
            url={data?.profileImage}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text
            text={data?.name}
            weight={TextWeights.medium}
            size={SIZES.h16}
            mt={SIZES.padding2 * 0.8}
            align={'center'}
          />

          <RowView style={common_styles.flex_1}>
            <View style={[styles.text_view, common_styles.flex_1]}>
              <Text
                size={SIZES.h12}
                color={COLORS.placeholder_text_color}
                text={data?.specialty}
                align={'center'}
                numberOfLines={2}
              />
            </View>
            <View style={[styles.text_view, common_styles.flex_1]}>
              <Text
                size={SIZES.h12}
                color={COLORS.placeholder_text_color}
                text={data?.country ?? '-'}
                align={'center'}
                numberOfLines={2}
              />
            </View>
          </RowView>

          <Text
            size={SIZES.h12}
            text={data?.institute}
            align={'center'}
            color={COLORS.light_blue_color}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />

          <Text
            size={SIZES.h12}
            text={data?.description}
            align={'center'}
            mt={SIZES.padding2}
            lineHeight={SIZES.normal}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default SpeakerModal;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    backgroundColor: COLORS.modal_background_color,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal_view: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    height: SIZES.height * 0.4,
    alignItems: 'center',
  },

  text_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding2 / 5,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center',
    marginTop: SIZES.padding2 / 2,
    alignItems: 'center',
  },
});
