import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen295153Navigator from '../features/BlankScreen295153/navigator';
import BlankScreen195152Navigator from '../features/BlankScreen195152/navigator';
import BlankScreen095151Navigator from '../features/BlankScreen095151/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen295153: { screen: BlankScreen295153Navigator },
BlankScreen195152: { screen: BlankScreen195152Navigator },
BlankScreen095151: { screen: BlankScreen095151Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
