import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import LoadAssets from "./config";
import StackNavigator from "./navigation/StackNavigator";
import {
  setPositionAsync,
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import "react-native-gesture-handler";
import "expo-dev-client";

setStatusBarStyle("dark");
setPositionAsync("absolute");
setBackgroundColorAsync("rgba(0,0,0,0.1)");
setButtonStyleAsync("dark");
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <LoadAssets>
      <StackNavigator />
    </LoadAssets>
  );
}
