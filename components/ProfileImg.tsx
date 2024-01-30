import {
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  Pressable,
  ViewStyle,
  View,
  Text,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../config";

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Props {
  photoURL: string;
  name: string | null | undefined;
  style?: StyleProp<ViewStyle>;
}

const ProfileImg = ({ photoURL, name, style }: Props) => {
  return (
    <Pressable>
      {photoURL ? (
        <View style={[styles.profile, style]}>
          <Image
            source={{ uri: photoURL }}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      ) : (
        <View style={[styles.profile, style]}>
          <Text
            style={{
              ...FONTS.h1,
              textTransform: "uppercase",
              color: COLORS.white,
            }}
          >
            {name?.charAt(0)}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default ProfileImg;
const random_color = ["#F0DBDB", "#DBA39A", "#BCEAD5", "#9ED5C5", "#8EC3B0"];

const styles = StyleSheet.create({
  profile: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: random_color[randomInteger(0, random_color.length - 1)],
    overflow: "hidden",
  },
});
