import React, { createContext, useEffect, useMemo, useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext, AuthContextType, StackParamList } from "../type";
import AuthNavigator from "./AuthNavigator";
import BottomNavigator from "./BottomNavigator";

enum ActionKind {
  RESTORE_TOKEN = "RESTORE_TOKEN",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

interface Action {
  type: ActionKind;
  token: null;
}

interface State {
  isLoading: boolean;
  isSignout: boolean;
  userToken: null;
}

const AuthReducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  const [state, dispatch] = useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    //fetch token from storage
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (err) {
        console.log(err);
      }
      //@ts-ignore
      dispatch({ type: ActionKind.RESTORE_TOKEN, token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        // @ts-ignore
        dispatch({ type: ActionKind.SIGN_IN, token: "dummy-auth-token" });
      },
      signOut: async (data: any) => {
        // @ts-ignore
        dispatch({ type: ActionKind.SIGN_OUT });
      },
      signUp: async (data: any) => {
        // @ts-ignore
        dispatch({ type: ActionKind.SIGN_IN, token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.userToken == null ? (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default StackNavigator;
