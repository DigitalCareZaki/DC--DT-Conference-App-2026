import React from 'react';
import { RowView, SizedBox, Text } from '../../components';
import { View } from 'react-native';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { styles } from './index.styles';

const Card = ({ isOrganizer = false }) => {
  return (
    <View style={styles.grid}>
      {isOrganizer && (
        <>
          <View style={styles.gap}>
            <Text text={'Address'} color={'rgba(255, 255, 255, 0.8)'} />
            <Text
              text={
                'Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan'
              }
              lineHeight={20}
              size={SIZES.h14}
              weight={TextWeights.medium}
            />
          </View>
          <SizedBox />
        </>
      )}
      <RowView justifyContent={'space-between'}>
        {isOrganizer ? (
          <View style={[styles.gap, { flex: 1 }]}>
            <Text text={'Email'} color={'rgba(255, 255, 255, 0.8)'} />
            <Text
              text={'muhammadali@gmail.com'}
              size={SIZES.h14}
              weight={TextWeights.medium}
            />
          </View>
        ) : (
          <View style={styles.gap}>
            <Text text={'Name'} color={'rgba(255, 255, 255, 0.8)'} />
            <Text
              text={'Muhammad Ali'}
              size={SIZES.h14}
              weight={TextWeights.medium}
            />
          </View>
        )}
        <View style={styles.gap}>
          <Text text={'Mobile'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'+1 (555) 123-4567'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>
      </RowView>

      <SizedBox />

      <RowView justifyContent={'space-between'}>
        {isOrganizer ? (
          <>
            <View style={styles.gap}>
              <Text text={'WhatsApp'} color={'rgba(255, 255, 255, 0.8)'} />
              <Text
                text={'+92 300 0568711'}
                size={SIZES.h14}
                weight={TextWeights.medium}
              />
            </View>

            <View style={styles.gap}>
              <Text text={'WeCHat'} color={'rgba(255, 255, 255, 0.8)'} />
              <Text
                text={'ecgateway13'}
                size={SIZES.h14}
                weight={TextWeights.medium}
              />
            </View>
          </>
        ) : (
          <>
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
          </>
        )}
      </RowView>

      <SizedBox />

      {isOrganizer ? (
        <View style={styles.gap}>
          <Text text={'UAN'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'+ 92 21 111-222-444, Ext: 343,229, 247,238,343'}
            size={SIZES.h14}
            weight={TextWeights.medium}
            lineHeight={20}
          />
        </View>
      ) : (
        <View style={styles.gap}>
          <Text text={'City'} color={'rgba(255, 255, 255, 0.8)'} />
          <Text
            text={'Karachi,Pakistan'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>
      )}
      {isOrganizer && (
        <>
          <SizedBox />
          <View style={styles.gap}>
            <Text text={'PTCL'} color={'rgba(255, 255, 255, 0.8)'} />
            <Text
              text={'+ 92 21 3870-9970'}
              size={SIZES.h14}
              weight={TextWeights.medium}
              lineHeight={20}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Card;
