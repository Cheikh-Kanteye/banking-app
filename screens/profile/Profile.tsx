import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import uuid from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ProfileImg, Switch } from "../../components";
import { COLORS, FONTS, SIZES } from "../../config";
import { app, auth } from "../../firebase.config";
import { signOut, updateProfile } from "firebase/auth";
import { RootStackParamList, TabParamList } from "../../type";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";

type MenuTypes = {
  id: string;
  label: string;
  Icon: typeof Ionicons;
  iconName: typeof Ionicons.name;
  screen?: string;
}[];

const MENU_ITEMS: MenuTypes = [
  {
    id: "001",
    label: "Edit Profile",
    Icon: Feather,
    iconName: "user",
    screen: "EditProfile",
  },
  {
    id: "002",
    label: "Notifications",
    Icon: Feather,
    iconName: "bell",
    screen: "Notifications",
  },
  {
    id: "003",
    label: "Security",
    Icon: MaterialIcons,
    iconName: "security",
    screen: "Security",
  },
  {
    id: "004",
    label: "Language",
    Icon: Feather,
    iconName: "globe",
    screen: "Language",
  },
  {
    id: "005",
    label: "Theme",
    Icon: Feather,
    iconName: "eye",
  },
  {
    id: "006",
    label: "Help & Support",
    Icon: Feather,
    iconName: "help-circle",
    screen: "HelpAndSupport",
  },
  {
    id: "007",
    label: "Contact Us",
    Icon: Ionicons,
    iconName: "chatbubble-outline",
    screen: "ContactUs",
  },
];

interface ProfileProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, "Profile">,
    StackNavigationProp<RootStackParamList>
  >;
}

const Profile = ({ navigation }: ProfileProps) => {
  const [theme, setTheme] = useState("Dark");
  const [toggledTheme, setToggledTheme] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const user = auth.currentUser;

  const uploadAsyncImage = async (uri: string) => {
    const blob: Blob | Uint8Array | ArrayBuffer = await new Promise(
      (rv, rj) => {
        const request = new XMLHttpRequest();
        request.onload = () => {
          rv(request.response);
        };
        request.onerror = () => {
          rj(new TypeError("Network request failed"));
        };
        request.responseType = "blob";
        request.open("Get", uri, true);
        request.send(null);
      }
    );

    const fileRef = ref(getStorage(app), "images/");
    const result = await uploadBytes(fileRef, blob);

    blob.slice(0, 1);

    return await getDownloadURL(fileRef);
  };

  const handleIamegPicked = async (
    pickerResult: ImagePicker.ImagePickerResult
  ) => {
    try {
      setUploading(true);
      if (!pickerResult.canceled) {
        const uploadUrl = await uploadAsyncImage(pickerResult.assets[0].uri);
        setImage(uploadUrl);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Upload file failde :(");
    } finally {
      setUploading(false);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleIamegPicked(result);
  };

  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    };
  }, []);

  useEffect(() => {
    //@ts-ignore
    updateProfile(user, {
      photoURL: image,
    });
  }, [image]);

  useEffect(() => {
    setTheme(toggledTheme ? "Light" : "Dark");
  }, [toggledTheme]);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[FONTS.h4, { marginBottom: SIZES.s, textAlign: "center" }]}
        >
          Profile
        </Text>
        <View style={styles.profile}>
          <ProfileImg
            style={styles.profile}
            name={user?.displayName} //@ts-ignore
            photoURL={user?.photoURL}
          />
          <TouchableOpacity onPress={pickImage} style={styles.editBtn}>
            <Feather name="edit" color={COLORS.white} size={12} />
          </TouchableOpacity>
        </View>
        <Text style={[FONTS.h2, { marginTop: SIZES.s, textAlign: "center" }]}>
          {user?.displayName}
        </Text>
        <Text
          style={[FONTS.span, { textAlign: "center", marginTop: SIZES.s / 2 }]}
        >
          {user?.email}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingVertical: SIZES.s }}
        showsVerticalScrollIndicator={false}
      >
        {MENU_ITEMS.map((item, index) => {
          const Icon = item.Icon;
          return (
            <View style={[styles.menuItem, styles.row]} key={index}>
              <View style={[styles.row]}>
                <Icon name={item.iconName} size={22} />
                <Text style={{ ...FONTS.h5, marginLeft: SIZES.s / 2 }}>
                  {item.label === "Theme"
                    ? theme + " " + item.label
                    : item.label}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (item.screen) {
                    navigation.navigate(item?.screen as never);
                  }
                  return;
                }}
              >
                {item.label == "Theme" ? (
                  <Switch
                    onToggle={() => setToggleSwitch(!toggleSwitch)}
                    toggled={toggleSwitch}
                  />
                ) : (
                  <Feather name="chevron-right" size={22} />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            signOut(auth).catch((err) => console.error(err));
          }}
          style={[styles.row, { paddingVertical: SIZES.s }]}
        >
          <Feather name="log-out" size={20} color={COLORS.red} />
          <Text
            style={{ ...FONTS.h5, marginLeft: SIZES.s / 2, color: COLORS.red }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.s,
    backgroundColor: COLORS.white,
  },
  header: {
    height: SIZES.h * 0.32,
    padding: SIZES.s,
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: COLORS.lightest,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.base,
  },
  menuItem: {
    justifyContent: "space-between",
    paddingVertical: SIZES.s,
  },
  row: { flexDirection: "row", alignItems: "center" },
});
