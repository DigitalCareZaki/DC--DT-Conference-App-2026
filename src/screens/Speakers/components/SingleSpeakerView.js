import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../../constants';
import {
  Button,
  ImageView,
  RowView,
  SizedBox,
  Text,
} from '../../../components';
import { TextWeights } from '../../../config';
import FastImage from 'react-native-fast-image';
import SpeakerModal from './SpeakerModal';

const SingleSpeakerView = ({ item }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={styles.main_view}>
      <RowView alignItems={'center'}>
        <ImageView
          width={SIZES.padding * 3.4}
          height={SIZES.padding * 3.4}
          radius={SIZES.padding * 4.65}
          url={item?.profileImage}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View>
          <Text
            text={item?.name}
            weight={TextWeights.medium}
            size={SIZES.h14}
            mt={SIZES.padding2 * 0.8}
            align={'center'}
          />

          <View style={styles.text_view}>
            <Text
              size={SIZES.h10}
              color={COLORS.placeholder_text_color}
              text={item?.specialty}
              align={'center'}
              numberOfLines={2}
            />
          </View>
        </View>
      </RowView>
      <SizedBox height={SIZES.padding2 + 4} />
      <Button
        buttonText={'View Details'}
        style={{ height: SIZES.padding * 1.6 }}
        onPress={() => setModalVisibility(true)}
      />

      <SpeakerModal
        visible={modalVisibility}
        setVisibility={setModalVisibility}
        data={item}
      />
    </View>
  );
};

export default SingleSpeakerView;

const styles = StyleSheet.create({
  main_view: {
    marginTop: SIZES.padding2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding2,
  },

  text_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding2 / 5,
    justifyContent: 'center',
    marginTop: SIZES.padding2 / 2,
    alignItems: 'center',
  },
});
