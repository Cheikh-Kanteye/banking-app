import { createContext } from "react";
import { IMAGES } from "./assets";
import { ImageSourcePropType } from "react-native";

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

export type tab_type = {
  id: string;
  icon: ImageSourcePropType;
  label: string;
  screen: string;
}[];

export const nav_tabs: tab_type = [
  {
    id: "001",
    icon: IMAGES.send,
    label: "transfert",
    screen: "Transfert",
  },
  {
    id: "002",
    icon: IMAGES.download,
    label: "request",
    screen: "Request",
  },
  {
    id: "003",
    icon: IMAGES.exchange,
    label: "In & out",
    screen: "InOutPayment",
  },
];

export type services_type = {
  id: string;
  icon: ImageSourcePropType;
  label: string;
  fg: string;
  bg: string;
}[];

export const services: services_type = [
  {
    id: "001",
    icon: IMAGES.flash,
    label: "electricity",
    fg: "#FFB947",
    bg: "#FFEFD7",
  },
  {
    id: "002",
    icon: IMAGES.wifi,
    label: "internet",
    fg: "#FA6D62",
    bg: "#FCE9E5",
  },
  {
    id: "003",
    icon: IMAGES.drop,
    label: "water",
    fg: "#63B0F1",
    bg: "#E3F2FC",
  },
  {
    id: "004",
    icon: IMAGES.card,
    label: "e-walet",
    fg: "#836BFE",
    bg: "#E6E7FE",
  },
  {
    id: "005",
    icon: IMAGES.suitcase,
    label: "assurance",
    fg: "#50D272",
    bg: "#DFFFE2",
  },
  {
    id: "006",
    icon: IMAGES.shop,
    label: "shopping",
    fg: "#AB4BB6",
    bg: "#F3E5F5",
  },
  {
    id: "007",
    icon: IMAGES.percent,
    label: "deals",
    fg: "#F45041",
    bg: "#F7E4E3",
  },
  {
    id: "008",
    icon: IMAGES.health,
    label: "health",
    fg: "#61C80A",
    bg: "#F0F6E9",
  },
  {
    id: "009",
    icon: IMAGES.chart,
    label: "finance",
    fg: "#2FBCB3",
    bg: "#DFF2EF",
  },
  {
    id: "010",
    icon: IMAGES.cart,
    label: "order",
    fg: "#FFC235",
    bg: "#FEF6E4",
  },
  {
    id: "011",
    icon: IMAGES.phone,
    label: "credit",
    fg: "#23CADD",
    bg: "#DFF6F8",
  },
  {
    id: "012",
    icon: IMAGES.tv,
    label: "tv",
    fg: "#F45755",
    bg: "#FCE9E5",
  },
];
