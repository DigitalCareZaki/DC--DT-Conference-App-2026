import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs';
import { COLORS } from '../constants';
import { DrawerContent } from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: "slide",
                drawerStyle: {
                    width: "70%",
                    backgroundColor: COLORS.primary,
                },
                swipeEnabled: true,
                drawerPosition: "left"

            }}

            initialRouteName='Tabs'
            drawerContent={(props) => <DrawerContent   {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation