import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES, FONTS } from "../config";

interface ResetCardProps {
  icon: string;
  label: string | undefined;
  value?: string | undefined;
  isResetType: boolean;
  selectResetType: () => void;
}

const ResetCard = ({
  icon,
  label,
  value,
  isResetType,
  selectResetType,
}: ResetCardProps) => {
  return (
    <TouchableOpacity
      onPress={selectResetType}
      style={[
        styles.cardContainer,
        { borderColor: isResetType ? COLORS.base : COLORS.grey },
      ]}
    >
      <Ionicons
        name={icon}
        size={22}
        color={isResetType ? COLORS.base : COLORS.grey}
        style={{ marginRight: SIZES.s }}
      />
      <View style={{ flex: 1 }}>
        <Text style={FONTS.thin}>via {label}:</Text>
        <Text style={FONTS.h6}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResetCard;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  image: {
    height: SIZES.h * 0.3,
    width: SIZES.w - SIZES.l,
    marginVertical: SIZES.m,
  },
  cardContainer: {
    width: SIZES.w - SIZES.l,
    height: SIZES.m * 2,
    borderWidth: 1,
    borderRadius: SIZES.s / 2,
    paddingHorizontal: SIZES.s,
    flexDirection: "row",
    alignItems: "center",
    bordeWidth: 1,
    marginBottom: SIZES.s,
  },
});
