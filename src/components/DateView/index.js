import { View } from 'react-native';
import React, { useState } from 'react';
import { common_styles } from '../../utils/common_styles';
import { COLORS, SIZES } from '../../constants';
import { Icons, RowView, Text } from '..';
import { calendar_icon } from '../../assets/icons';
import { TextWeights } from '../../config';
import { styles } from './index.styles';
import DatePicker from 'react-native-date-picker';

const DateView = ({
  type = 'date',
  minimumDate = new Date(),
  maximumDate,
  value,
  onChangeValue,
  dateText,
  style,
  label,
  isrequired,
  placeholder,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={{ marginTop: SIZES.padding2 }}>
      <Text
        text={label}
        weight={TextWeights.medium}
        size={SIZES.h12}
        isrequired={isrequired}
      />
      <RowView
        style={[styles.main_view, style]}
        onPress={() => setShowDatePicker(true)}
      >
        <Icons name={calendar_icon} />
        <Text
          style={common_styles.flex}
          numberOfLines={2}
          text={dateText?.trim()?.length > 0 ? dateText : placeholder}
          color={dateText ? COLORS.black : COLORS.placeholder_text_color}
        />

        <DatePicker
          open={showDatePicker}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          modal
          mode={type}
          date={value ?? new Date()}
          onCancel={() => setShowDatePicker(false)}
          onConfirm={val => {
            setShowDatePicker(false);
            onChangeValue(val);
          }}
        />
      </RowView>
    </View>
  );
};

export default DateView;
