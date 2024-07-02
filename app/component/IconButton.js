import { StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const IconButton = ({ name, onPress, disable, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disable && styles.disableStyle, style]}
    >
      <Ionicons name={name} color={"#fff"} size={hp(3)} />
    </TouchableOpacity>
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#808080",
    padding: hp(1.5),
    borderRadius: 100,
  },
  disableStyle: {
    opacity: 0,
  },
});
