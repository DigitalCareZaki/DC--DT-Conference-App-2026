import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { common_styles } from '../../../utils/common_styles';
import { roles, TextWeights } from '../../../config';
import { Icons, RowView, Text } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import { check_icon, checked_icon } from '../../../assets/icons';

const SelectCategory = ({ selectedRole, setSelectedRole }) => {
  return (
    <View style={common_styles.flex_1}>
      <Text
        mt={SIZES.padding2}
        text={'Please choose your role in the event (select all that apply):'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {roles?.map((item, ind) => {
          const selected = selectedRole?.id === item?.id;
          return (
            <RowView
              key={item?.id}
              style={styles.list_view}
              onPress={() => setSelectedRole(selected ? null : item)}
            >
              <Text
                text={item?.name}
                style={common_styles.flex_1}
                color={COLORS.primary}
                weight={TextWeights.medium}
              />
              <Icons name={selected ? checked_icon : check_icon} />
            </RowView>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({
  list_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding2,
    height: SIZES.padding * 2.4,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    marginTop: SIZES.padding2,
  },
});
