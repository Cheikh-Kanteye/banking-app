import { createContext } from "react";

export type AuthStackParamList = {
  Onboarding: undefined;
  AuthMethod: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OTPVerify: {
    resetType: "sms" | "email";
    credential: string | undefined;
  };
  ResetPassword: undefined;
};

export type SettingsStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Security: undefined;
  Notifications: undefined;
  Language: undefined;
  HelpAndSupport: undefined;
  ContactUs: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Transfert: undefined;
  Request: undefined;
  InOutPayment: undefined;
};

export type StackParamList = {
  AuthNavigator: undefined;
  BottomNavigator: undefined;
};

export type TabParamList = {
  Root: undefined;
  Statistics: undefined;
  Cards: undefined;
  Settings: undefined;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export type AuthContextType = {
  signIn: (data: any) => Promise<void>;
  signOut: (data: any) => Promise<void>;
  signUp: (data: any) => Promise<void>;
};
