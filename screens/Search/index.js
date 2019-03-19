import {createAppContainer, createStackNavigator} from 'react-navigation'
import SearchScreen from './SearchScreen'
import SalleScreen from './SalleScreen'

export default createStackNavigator({
    Search : SearchScreen,
    Salle : SalleScreen
},
    {
        initialRouteName: "Search"
    }
);
