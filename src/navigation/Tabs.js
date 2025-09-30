import React, { Fragment } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../constants";
import { Icons, RowView, Text } from "../components";
import { call_icon, conferences_icon, home_icon, selected_call_icon, selected_conferences_icon, selected_home_icon, selected_speakers_icon, speakers_icon } from "../assets/icons";
import { TextWeights } from "../config";
import { Contact, Dashboard, Exhibition, Feedback, Home } from "../screens";
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
            <Tab.Screen name="Exhibition" component={Exhibition} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Feedback" component={Feedback} />
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
