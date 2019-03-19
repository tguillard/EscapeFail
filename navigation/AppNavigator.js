import React from 'react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import HomeIndex from '../screens/Home';
import SearchIndex from '../screens/Search';
import SettingsIndex from '../screens/Settings'

export default createAppContainer(createBottomTabNavigator({
    Home: {
        screen: HomeIndex,
    },
    Search: {
        screen: SearchIndex,
    },
    Settings: {
        screen: SettingsIndex,
        
    },
}));