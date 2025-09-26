import React from 'react';
import { RowView, SizedBox, Text } from '../../components';
import { View } from 'react-native';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { styles } from './index.styles';

const Card = () => {
  return (
    <View style={styles.grid}>
      <RowView justifyContent={'space-between'}>
        <View style={styles.gap}>
          <Text text={'Mobile'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'+1 (555) 123-4567'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>

        <View style={styles.gap}>
          <Text text={'Name'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'Muhammad Ali'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>
      </RowView>

      <SizedBox />

      <RowView justifyContent={'space-between'}>
        <View style={[styles.gap, { flex: 1 }]}>
          <Text text={'Email'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'muhammadali@gmail.com'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>

        <View style={styles.gap}>
          <Text text={'Date of Birth'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'10-10-2024'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>
      </RowView>

      <SizedBox />

      <View style={styles.gap}>
        <Text text={'City'} color={'rgba(255, 255, 255, 0.8)'} />
        <Text
          text={'Karachi,Pakistan'}
          size={SIZES.h14}
          weight={TextWeights.medium}
        />
      </View>
    </View>
  );
};

export default Card;
