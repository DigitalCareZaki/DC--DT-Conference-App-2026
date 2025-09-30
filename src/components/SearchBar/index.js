import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
import { Icons, RowView } from '..';
import { search_icon } from '../../assets/icons';

const SearchBar = ({
  style,
  placeholder,
  onChangeText,
  value,
  onSubmitEditing,
  keyboardType,
  inputStyle,
  onPress,
  editable,
}) => {
  return (
    <RowView
      onPress={onPress}
      style={[styles.main_view, style]}
    >
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.placeholder_text_color}
        value={value}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
      <Icons name={search_icon} />
    </RowView>
  );
};

export default SearchBar;
