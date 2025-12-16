import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, images, SIZES } from '../../../constants';
import { ImageView, RowView, Text } from '../../../components';
import FastImage from 'react-native-fast-image';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const SpeakerModal = ({ visible, onPressClose, data }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onPressClose}
    >
      <TouchableOpacity
        onPress={onPressClose}
        activeOpacity={1}
        style={styles.main_view}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={styles.sub_view}
        >
          <ImageView
            width={120}
            height={120}
            radius={SIZES.padding * 4.65}
            url={data?.profileImage}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
            image={images.profile_placeholder}
          />
          <Text
            text={data?.name}
            weight={TextWeights.medium}
            size={SIZES.h16}
            mt={SIZES.padding2 * 0.8}
            align={'center'}
          />

          <RowView>
            <View style={styles.text_view}>
              <Text
                size={SIZES.h12}
                color={COLORS.placeholder_text_color}
                text={'AI Machine Learning'}
                align={'center'}
                numberOfLines={2}
              />
            </View>
            <View style={styles.text_view}>
              <Text
                size={SIZES.h12}
                color={COLORS.placeholder_text_color}
                text={'USA'}
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
            text={
              'Leading researcher in artificial intelligence with 15+ years of experience specializing in machine learning, deep learning, and data-driven innovation. Proven track record in developing cutting-edge AI models, leading cross-functional research teams'
            }
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

  sub_view: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    // height: SIZES.height * 0.3,
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
