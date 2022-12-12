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

export type RootStackParamList = {
  Tabs: undefined;

  //Home Pages
  Contact: undefined;
  Transfert: undefined;
  Request: undefined;
  EReceipt: undefined;
  InOutPayment: undefined;
  EReceiptDetails: undefined;
  Notifications: undefined;

  //Cards Pages
  Cards: undefined;
  CardDetails: undefined;
  Refund: undefined;
  TopUp: undefined;

  //Settings Pages
  EditProfile: undefined;
  Security: undefined;
  NotificationSettings: undefined;
  Language: undefined;
  HelpAndSupport: undefined;
  ContactUs: undefined;
};

export type StackParamList = {
  AuthNavigator: undefined;
  Root: undefined;
};

export type TabParamList = {
  Home: undefined;
  Statistics: undefined;
  Cards: undefined;
  Profile: undefined;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export type AuthContextType = {
  signIn: (data: any) => Promise<void>;
  signOut: (data: any) => Promise<void>;
  signUp: (data: any) => Promise<void>;
};
