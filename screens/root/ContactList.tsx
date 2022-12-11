import { PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../config";
import * as Contacts from "expo-contacts";

const ContactList = () => {
  // const [contacts, setContacts] = useState<Contacts.Contact>();

  useEffect(() => {
    (async () => {
      try {
        const status = await Contacts.requestPermissionsAsync();
        console.log(status);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={requestReadContactPermisson}> */}
      <Text>ContactList</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
