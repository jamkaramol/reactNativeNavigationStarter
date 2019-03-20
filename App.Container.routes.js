import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// All screens are imported here (routes)
import HomeScreen from "./src/Screens/Home.screen";
import DetailsScreen from "./src/Screens/Details.screen";
import ModalScreen from "./src/Screens/Modal.screen";
//
// components
import LogoTitle from "./src/Components/Logo";



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerTitle: <LogoTitle/>,
        headerStyle: {
        backgroundColor: "#6DD5FA"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootStack = createStackNavigator(
    {
      Main: {
        screen: AppNavigator,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);



export default (AppContainer = createAppContainer(RootStack));
