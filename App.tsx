import "expo-dev-client";
import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import LoadAssets from "./config";
import { LogBox } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import { setPositionAsync, setButtonStyleAsync } from "expo-navigation-bar";
import "react-native-gesture-handler";
import "expo-dev-client";

setStatusBarStyle("dark");
setPositionAsync("absolute");
setButtonStyleAsync("dark");
SplashScreen.preventAutoHideAsync();

LogBox.ignoreLogs([`Setting a timer for a long period`]);
export default function App() {
  return (
    <LoadAssets>
      <StackNavigator />
    </LoadAssets>
  );
}
