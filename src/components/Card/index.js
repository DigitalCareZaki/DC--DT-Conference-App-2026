import React from 'react';
import { RowView, SizedBox, Text } from '../../components';
import { View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { styles } from './index.styles';

const Card = ({ isOrganizer = false, isContact = false }) => {
  return (
    <View style={styles.grid}>
      {isOrganizer && (
        <>
          <View style={styles.gap}>
            <Text text={'Address'} color={COLORS.keys_color} />
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
            <Text text={'Email'} color={COLORS.keys_color} />
            <Text
              text={'muhammadali@gmail.com'}
              size={SIZES.h14}
              weight={TextWeights.medium}
            />
          </View>
        ) : (
          <View style={styles.gap}>
            <Text text={'Name'} color={COLORS.keys_color} />
            <Text
              text={'Muhammad Ali'}
              size={SIZES.h14}
              weight={TextWeights.medium}
            />
          </View>
        )}
        <View style={styles.gap}>
          <Text text={'Mobile'} color={COLORS.keys_color} />
          <Text
            text={'+1 (555) 123-4567'}
            size={SIZES.h14}
            weight={TextWeights.medium}
          />
        </View>
      </RowView>

      <SizedBox />

      {!isContact && (
        <>
          <RowView justifyContent={'space-between'}>
            {isOrganizer ? (
              <>
                <View style={styles.gap}>
                  <Text text={'WhatsApp'} color={COLORS.keys_color} />
                  <Text
                    text={'+92 300 0568711'}
                    size={SIZES.h14}
                    weight={TextWeights.medium}
                  />
                </View>

                <View style={styles.gap}>
                  <Text text={'WeCHat'} color={COLORS.keys_color} />
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
                  <Text text={'Email'} color={COLORS.keys_color} />
                  <Text
                    text={'muhammadali@gmail.com'}
                    size={SIZES.h14}
                    weight={TextWeights.medium}
                  />
                </View>

                <View style={styles.gap}>
                  <Text text={'Date of Birth'} color={COLORS.keys_color} />
                  <Text
                    text={'10-10-2024'}
                    size={SIZES.h14}
                    weight={TextWeights.medium}
                  />
                </View>
              </>
            )}
            <SizedBox />
          </RowView>
        </>
      )}
      {!isContact && (
        <>
          {isOrganizer ? (
            <View style={styles.gap}>
              <Text text={'UAN'} color={COLORS.keys_color} />
              <Text
                text={'+ 92 21 111-222-444, Ext: 343,229, 247,238,343'}
                size={SIZES.h14}
                weight={TextWeights.medium}
                lineHeight={20}
              />
            </View>
          ) : (
            <View style={styles.gap}>
              <Text text={'City'} color={COLORS.keys_color} />
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
                <Text text={'PTCL'} color={COLORS.keys_color} />
                <Text
                  text={'+ 92 21 3870-9970'}
                  size={SIZES.h14}
                  weight={TextWeights.medium}
                  lineHeight={20}
                />
              </View>
            </>
          )}
        </>
      )}

      {isContact && (
        <View style={styles.gap}>
          <Text text={'Office Hours'} color={COLORS.keys_color} />
          <Text
            size={SIZES.h14}
            weight={TextWeights.medium}
            lineHeight={24}
            text={`Monday - Friday: 9:00 AM - 6:00 PM ${'\n'}Saturday: 10:00 AM - 4:00 PM`}
          />
        </View>
      )}
    </View>
  );
};

export default Card;
