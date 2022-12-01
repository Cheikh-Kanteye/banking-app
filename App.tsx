import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import LoadAssets, { COLORS } from "./config";
import StackNavigator from "./navigation/StackNavigator";
import {
  setPositionAsync,
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";
// import app from "@react-native-firebase/app";
import "react-native-gesture-handler";
import "expo-dev-client";
// import { useEffect, useState } from "react";

setStatusBarStyle("dark");
setPositionAsync("absolute");
setBackgroundColorAsync("rgba(0,0,0,0.1)");
setButtonStyleAsync("dark");
SplashScreen.preventAutoHideAsync();

// GoogleSignin.configure({
//   webClientId:
//     "166471730269-tcg0stor8ml5km8dpjp5hl0i36lumflb.apps.googleusercontent.com",
// });

export default function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // const onAuthSateChange = (user: any) => {
  //   setUser(user);
  //   if (initializing) setInitializing(true);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthSateChange);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  return (
    <LoadAssets>
      <StackNavigator />
    </LoadAssets>
  );
}
