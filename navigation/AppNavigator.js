import React from "react";
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import HomeIndex from '../screens/Home';
import SearchIndex from '../screens/Search';
import SettingsIndex from '../screens/Settings'
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";

const HomeStack = {
    screen: HomeIndex,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    }
};

const SearchStack = {
    screen: SearchIndex,
    navigationOptions: {
        tabBarLabel: 'Rechercher',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    }
};
const SettingStack = {
    screen: SettingsIndex,
    navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    }
};


export default createAppContainer(createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Settings: SettingStack
}));
