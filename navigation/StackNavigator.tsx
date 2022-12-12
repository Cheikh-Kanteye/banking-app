import React, { useState, useEffect, useMemo, useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext, StackParamList } from "../type";
import AuthNavigator from "./AuthNavigator";
import BottomNavigator from "./BottomNavigator";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase.config";
import RootNavigator from "./RootNavigator";

const Stack = createStackNavigator<StackParamList>();
const auth = getAuth(app);

const StackNavigator = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user == null ? (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="Root" component={RootNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
