import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59182Navigator from '../features/BlankScreen59182/navigator';
import BlankScreen49180Navigator from '../features/BlankScreen49180/navigator';
import CopyOfEmailAuth9065Navigator from '../features/CopyOfEmailAuth9065/navigator';
import CopyOfEmailAuth9064Navigator from '../features/CopyOfEmailAuth9064/navigator';
import CopyOfEmailAuth9062Navigator from '../features/CopyOfEmailAuth9062/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen59182: { screen: BlankScreen59182Navigator },
BlankScreen49180: { screen: BlankScreen49180Navigator },
CopyOfEmailAuth9065: { screen: CopyOfEmailAuth9065Navigator },
CopyOfEmailAuth9064: { screen: CopyOfEmailAuth9064Navigator },
CopyOfEmailAuth9062: { screen: CopyOfEmailAuth9062Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
