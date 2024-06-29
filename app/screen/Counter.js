import { StyleSheet, View } from "react-native";
import { memo, useCallback, useState } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import CounterNumber from "../component/CounterNumber";
import IconButton from "../component/IconButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((pre) => (pre != 0 ? pre - 1 : 0));
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <View style={styles.counterScreenContainer}>
      <CounterNumber number={count} />
      <View style={styles.buttonsContainer}>
        {count != 0 && (
          <IconButton onPress={handleDecrement} name={"remove-sharp"} />
        )}
        <IconButton onPress={handleReset} name={"reload-sharp"} />
        <IconButton onPress={handleIncrement} name={"add-sharp"} />
      </View>
    </View>
  );
};

export default memo(Counter);

const styles = StyleSheet.create({
  counterScreenContainer: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: wp(10),
  },
});
