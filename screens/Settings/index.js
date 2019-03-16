import {createAppContainer, createStackNavigator} from 'react-navigation'
import SettingsScreen from './SettingsScreen'

export default createAppContainer(createStackNavigator({
    SettingsScreen,
}))