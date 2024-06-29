import { StyleSheet, View } from "react-native";
import { memo } from "react";

import Constants from "expo-constants";

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default memo(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
