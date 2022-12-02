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

export type StackParamList = {
  AuthNavigator: undefined;
  BottomNavigator: undefined;
};
