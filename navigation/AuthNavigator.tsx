import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../type";
import Onboarding from "../screens/auth/Onboarding";
import {
  AuthMethod,
  ForgotPassword,
  OTPVerify,
  ResetPassword,
  SignIn,
  SignUp,
} from "../screens";

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="AuthMethod" component={AuthMethod} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="OTPVerify" component={OTPVerify} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
