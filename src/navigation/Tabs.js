import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../constants";
import { Conference, Contact, Dashboard,  Speakers } from "../screens";
import Tabbar from "./Tabbar";

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{ headerShown: false, tabBarShowLabel: false }}
            tabBar={(props) => <Tabbar {...props} />}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Conference" component={Conference} />
            <Tab.Screen name="Speakers" component={Speakers} />
            <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
    );

};

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.primary,
        borderTopWidth: 1,
        height: SIZES.padding * 3.5
    },
});

export default Tabs;
