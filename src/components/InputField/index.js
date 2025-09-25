import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icons, RowView, Text } from "../index";
import { styles } from "./index.style";
import { COLORS, SIZES } from "../../constants";
import { hide_password_icon, show_password_icon } from "../../assets/icons";
import { TextWeights } from "../../config";

const InputField = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  isEdit = true,
  value,
  maxLength,
  onSubmitEditing,
  restProps,
  returnKeyType,
  inputStyle,
  numberOfLines,
  placeholderTextColor,
  isPassword,
  icon,
  label,
  leftIcon,
  isrequired
}) => {
  const [showPassword, setShwoPassword] = useState(true)

  return (
    <View style={{ marginTop: SIZES.padding2 }} >
      <Text
        text={label}
        weight={TextWeights.medium}
        size={SIZES.h12}
        isrequired={isrequired}
      />
      <RowView style={[styles.main_view, style]} >
        {leftIcon && <Icons name={leftIcon} />}
        <TextInput
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={isPassword ? showPassword : secureText}
          numberOfLines={numberOfLines}
          style={[styles.input, inputStyle]}
          placeholderTextColor={placeholderTextColor || COLORS.text_gray_color}
          defaultValue={defaultValue}
          value={value}
          maxLength={maxLength}
          editable={isEdit}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          underlineColorAndroid="transparent"
          {...restProps}
        />
        {
          (isPassword || icon) &&
          <TouchableOpacity
            activeOpacity={0.6}
            disable={icon}
            onPress={() => setShwoPassword(!showPassword)}
          >
            <Icons name={icon ? icon : (showPassword ? hide_password_icon : show_password_icon)} />
          </TouchableOpacity>
        }
      </RowView>
    </View>
  );
};

export default InputField;
