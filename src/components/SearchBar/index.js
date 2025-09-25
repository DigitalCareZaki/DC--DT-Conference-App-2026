import React from "react";
import { TextInput } from "react-native";
import { styles } from "./index.styles";
import { COLORS, SIZES } from "../../constants";
import { Icons, RowView } from "..";
import { search_icon } from "../../assets/icons";

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
    autoFocus
}) => {

    return (
        <RowView onPress={onPress}  gap={SIZES.padding2 / 2} style={[styles.main_view, style]} >
            <Icons name={search_icon} />
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[styles.input, inputStyle]}
                keyboardType={keyboardType}
                placeholderTextColor={COLORS.text_gray_color}
                value={value}
                autoFocus={autoFocus}
                editable={editable}
                onSubmitEditing={onSubmitEditing}
                underlineColorAndroid="transparent"
            />
        </RowView>

    );
};

export default SearchBar;
