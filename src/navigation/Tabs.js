import React, { Fragment } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../constants";
import { Icons, Text } from "../components";
import { HomeStack, CartStack, SearchStack, AccountStack } from "./index";
import { cart_icon, home_icon, profile_icon, search_icon, selected_cart_icon, selected_home_icon, selected_profile_icon, selected_search_icon } from "../assets/icons";
import { TextWeights } from "../config";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { navigate } from "./service";
import { useSelector } from "react-redux";
import { Home } from "../screens";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    const { bottom } = useSafeAreaInsets()
    const { user, cart_data } = useSelector(state => state.constant)

    return (
        <Fragment>
            <Tab.Navigator
                initialRouteName="HomeStack"
                screenOptions={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return false;
                    },
                    tabBarStyle: { ...styles.tabbar, height: SIZES.padding * 3 + bottom },
                    tabBarHideOnKeyboard: true,
                    tabBarIconStyle: styles.tab,
                    tabBarButton: (props) => {
                        return <TouchableOpacity {...props} activeOpacity={1} />
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tab_btn} >
                                <Icons
                                    style={{ marginLeft: -SIZES.padding2 / 4 }}
                                    name={focused ? selected_home_icon : home_icon}
                                />
                                <Text
                                    mt={SIZES.padding2 / 3}
                                    size={SIZES.h10}
                                    weight={TextWeights.medium}
                                    color={focused ? COLORS.primary : COLORS.text_gray_color}
                                    text={"Home"}
                                />
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name="SearchStack"
                    component={SearchStack}

                    options={{

                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tab_btn} >
                                <Icons
                                    style={{ marginLeft: -SIZES.padding2 / 4 }}
                                    name={focused ? selected_search_icon : search_icon}
                                />
                                <Text
                                    mt={SIZES.padding2 / 3}
                                    size={SIZES.h10}
                                    weight={TextWeights.medium}
                                    color={focused ? COLORS.primary : COLORS.text_gray_color}
                                    text={"Search"}
                                />
                            </View>

                        ),
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tab_btn} >

                                {
                                    cart_data?.length > 0 &&
                                    <View style={styles.count_view} >
                                        <Text
                                            color={COLORS.white}
                                            size={SIZES.h9}
                                            ml={SIZES.padding2 / 5}
                                            mt={-SIZES.padding2 / 6}
                                            text={cart_data?.length} />
                                    </View>
                                }

                                <Icons
                                    style={{ marginLeft: -SIZES.padding2 / 4 }}
                                    name={focused ? selected_cart_icon : cart_icon}
                                />
                                <Text
                                    mt={SIZES.padding2 / 3}
                                    size={SIZES.h10}
                                    weight={TextWeights.medium}
                                    color={focused ? COLORS.primary : COLORS.text_gray_color}
                                    text={"Cart"}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="AccountStack"
                    component={AccountStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tab_btn} >
                                <Icons
                                    style={{ marginLeft: -SIZES.padding2 / 4 }}
                                    name={focused ? selected_profile_icon : profile_icon}
                                />
                                <Text
                                    mt={SIZES.padding2 / 3}
                                    size={SIZES.h10}
                                    weight={TextWeights.medium}
                                    color={focused ? COLORS.primary : COLORS.text_gray_color}
                                    text={"Account"}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </Fragment>
    );


};

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: COLORS.white,
        borderTopColor: COLORS.border_color,
        borderTopWidth: 1
    },
    tab: {
        flex: 1,
        width: "100%"
    },
    icon_view: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
    tab_btn: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: SIZES.padding2 / 2
    },
    count_view: {
        position: "absolute",
        top: -SIZES.padding2/3,
        right:SIZES.padding2 * 1.2,
        height: SIZES.padding2 * 1.7,
        width: SIZES.padding2 * 1.7,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.padding,
        zIndex: 2
    },
});

export default Tabs;
