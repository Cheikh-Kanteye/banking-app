import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import LoadAssets, { COLORS } from "./config";
import StackNavigator from "./navigation/StackNavigator";
import {
  setPositionAsync,
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";

setStatusBarStyle("dark");
setPositionAsync("absolute");
setBackgroundColorAsync("rgba(255,255,255,0.1)");
setButtonStyleAsync("dark");
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <LoadAssets>
      <StackNavigator />
    </LoadAssets>
  );
}
