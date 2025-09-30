import React, { useEffect } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icons, RowView, Text } from "../components";
import {
    call_icon,
    conferences_icon,
    home_icon,
    selected_call_icon,
    selected_conferences_icon,
    selected_home_icon,
    selected_speakers_icon,
    speakers_icon,
} from "../assets/icons";
import { COLORS, SIZES } from "../constants";
import { TextWeights } from "../config";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const EXPANDED_FLEX = 2;   
const COLLAPSED_FLEX = 1; 

const Tabbar = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();

    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }, [state.index]);

    const iconFor = (routeName, focused) => {
        switch (routeName) {
            case "Dashboard": return focused ? selected_home_icon : home_icon;
            case "Conference": return focused ? selected_conferences_icon : conferences_icon;
            case "Speakers": return focused ? selected_speakers_icon : speakers_icon;
            case "Contact": return focused ? selected_call_icon : call_icon;
            default: return home_icon;
        }
    };

    const labelFor = (routeName) => {
        switch (routeName) {
            case "Dashboard": return "Home";
            case "Conference": return "Conferences";
            case "Speakers": return "Speakers";
            case "Contact": return "Contact";
            default: return routeName;
        }
    };

    return (
        <View style={[styles.tabbar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
            {state.routes.map((route, index) => {
                const focused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!focused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={focused ? { selected: true } : {}}
                        onPress={onPress}
                        activeOpacity={0.9}
                        style={[
                            styles.itemWrap,
                            focused && { height: "70%" },
                            { flex: focused ? EXPANDED_FLEX : COLLAPSED_FLEX },
                        ]}
                    >
                        <RowView style={[styles.tab_btn, focused && styles.selected_tab]}>
                            <Icons name={iconFor(route.name, focused)} iconHeight={SIZES.padding * 1.2} />
                            {focused && (
                                <Text
                                    weight={TextWeights.medium}
                                    color={COLORS.primary}
                                    text={labelFor(route.name)}
                                />
                            )}
                        </RowView>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default Tabbar

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.primary,
        borderTopWidth: 1,
        paddingHorizontal: SIZES.padding2,
        height: SIZES.padding * 3.8,
    },
    itemWrap: {
        height: "100%",
        paddingHorizontal: 6,
    },
    tab_btn: {
        flex: 1,
        height: "100%",
        borderRadius: SIZES.padding * 2,
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },
    selected_tab: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 14,
    },
});

