import { CountryPicker } from "react-native-country-codes-picker";
import Feather from "react-native-vector-icons/Feather";
import Flag from "react-native-flags-typescript";
import DatePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../config";
import { Button, Input } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";

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
          <Flag code={flag} size={24} type="shiny" />
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
  const [country, setCountry] = useState("Senegal");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showCoutry, setShowCountry] = useState(false);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const getCountryName = ({ name }: { [name: string]: string }) => {
    setCountry(name);
    console.log(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <Input
          placeholder="Full name"
          value={fullName}
          setValue={setFullName}
        />
        <View style={styles.separator} />
        <Input placeholder="Nickname" value={nickName} setValue={setNickName} />
        <View style={styles.separator} />
        <View>
          <View
            style={[
              styles.input,
              {
                justifyContent: "space-between",
                paddingHorizontal: 0,
                borderColor: openDateModal ? COLORS.base : COLORS.greyish,
              },
            ]}
          >
            <View style={{ paddingLeft: SIZES.s }}>
              <Text style={{ ...FONTS.thin, color: COLORS.grey }}>
                Date of Birthday
              </Text>
              <Text style={FONTS.p}>
                {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setOpenDateModal(true)}
              style={{
                paddingHorizontal: SIZES.s,
                paddingVertical: SIZES.s / 2,
              }}
            >
              <Feather name="calendar" size={20} />
            </TouchableOpacity>
          </View>
          {openDateModal && (
            <DatePicker
              mode="date"
              locale="en-US"
              onChange={(event, date) => {
                //@ts-ignore
                setDate(date);
                setOpenDateModal(false);
              }}
              value={date}
              onTouchCancel={() => setOpenDateModal(false)}
            />
          )}
        </View>
        <View style={styles.separator} />
        <Input placeholder="Email" value={email} setValue={setEmail} />
        <View style={styles.separator} />
        <View>
          <View
            style={[
              styles.input,
              {
                justifyContent: "space-between",
                borderColor: showCoutry ? COLORS.base : COLORS.greyish,
              },
            ]}
          >
            <View>
              <Text style={{ ...FONTS.thin, color: COLORS.grey }}>Country</Text>
              <Text style={FONTS.p}>{country}</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                aspectRatio: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setShowCountry(true)}
            >
              <Feather name="chevron-down" size={24} />
            </TouchableOpacity>
          </View>
          {showCoutry && (
            <CountryPicker
              lang="en"
              show={showCoutry}
              initialState="senegal"
              inputPlaceholder="Senegal"
              pickerButtonOnPress={(item) => {
                setCountry(item.name?.en);
              }}
              style={{
                modal: {
                  height: SIZES.h / 2,
                },
              }}
              onBackdropPress={() => setShowCountry(false)}
            />
          )}
        </View>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
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
