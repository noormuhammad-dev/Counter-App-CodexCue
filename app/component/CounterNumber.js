import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AnimatedNumbers from "react-native-animated-numbers";

const CounterNumber = ({ number }) => {
  return (
    <View style={styles.container}>
      <AnimatedNumbers
        includeComma
        animateToNumber={number}
        fontStyle={styles.number}
      />
    </View>
  );
};

export default memo(CounterNumber);

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(6),
  },
  number: {
    fontSize: hp(8),
    color: "#fff",
    fontWeight: "bold",
  },
});
