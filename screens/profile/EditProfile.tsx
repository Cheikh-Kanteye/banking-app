import { CountryPicker } from "react-native-country-codes-picker";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Flag from "react-native-flags-typescript";

import { Button, Input } from "../../components";
import { COLORS, FONTS, SIZES } from "../../config";
import React, { useState } from "react";

const PhoneNumberInput = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (val: string) => void;
}) => {
  const [countryCode, setCountryCode] = useState("+221");
  const [flag, setFlag] = useState("SN");
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <View>
      <View
        style={[
          styles.input,
          { borderColor: focused ? COLORS.base : COLORS.greyish },
        ]}
      >
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Flag code={flag} size={24} />
          <Text style={{ ...FONTS.p, marginHorizontal: SIZES.s / 3 }}>
            {countryCode}
          </Text>
          <Feather name="chevron-down" size={22} />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={setValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Phone Number"
          style={{ ...FONTS.p, flex: 1, marginLeft: 4 }}
        />
      </View>
      <CountryPicker
        show={show}
        lang="en"
        inputPlaceholder="+221"
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setFlag(item.flag);
          setShow(false);
        }}
        style={{
          modal: {
            height: SIZES.h / 2,
          },
        }}
        onBackdropPress={() => setShow(false)}
      />
    </View>
  );
};

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <Input placeholder="Full name" value={fullName} setValue={setFullName} />
      <View style={styles.separator} />
      <Input placeholder="Nickname" value={nickName} setValue={setNickName} />
      <View style={styles.separator} />
      <Input
        placeholder="Date of Birthday"
        value={birthday.toDateString()}
        setValue={setBirthday.toString}
        icon="calendar"
        iconPressed={() => null}
      />
      <View style={styles.separator} />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <View style={styles.separator} />
      <Input
        placeholder="Country"
        value={country}
        setValue={setCountry}
        icon="chevron-down"
        iconPressed={() => null}
      />
      <View style={styles.separator} />
      <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} />
      <View style={styles.separator} />
      <Input
        placeholder="Gender"
        value={gender}
        setValue={setGender}
        icon="chevron-down"
        iconPressed={() => null}
      />
      <View style={styles.separator} />
      <Input placeholder="Address" value={address} setValue={setAddress} />
      <View style={styles.separator} />
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Button label="Update" onPress={() => null} btnType="primary" />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  separator: {
    height: SIZES.s,
  },
  input: {
    width: SIZES.w - SIZES.l,
    height: SIZES.m * 2,
    borderWidth: 1,
    borderRadius: SIZES.s / 2,
    paddingHorizontal: SIZES.s,
    flexDirection: "row",
    alignItems: "center",
  },
});
