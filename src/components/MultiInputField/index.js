import React from "react";
import { TextInput } from "react-native";
import { styles } from "./index.styles";
import { COLORS, SIZES } from "../../constants";
import { RowView, Text } from "..";
import { TextWeights } from "../../config";

const MultiInputField = ({
    style,
    placeholder,
    onChangeText,
    secureText,
    keyboardType,
    defaultValue,
    isEdit,
    value,
    maxLength,
    onSubmitEditing,
    returnKeyType,
    label,
    restProps,

}) => {
    return (
        <RowView justifyContent={'space-between'} alignItems={'flex-start'} style={{ marginTop: SIZES.padding }} >
            <Text
                style={{ width: "35%" }}
                text={label}
                weight={TextWeights.light}
                size={SIZES.h11}
                color={COLORS.text_gray_color}
                mt={SIZES.padding2}
            />
            <TextInput
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                secureTextEntry={secureText}
                multiline={true}
                numberOfLines={8}
                style={[styles.input, style]}
                placeholderTextColor={COLORS.placeholder_text_color}
                defaultValue={defaultValue}
                value={value}
                maxLength={maxLength}
                editable={isEdit}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                underlineColorAndroid="transparent"
                {...restProps}
            />

        </RowView>

    );
};

export default MultiInputField;
