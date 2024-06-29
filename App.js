import { StatusBar } from "react-native";

import Counter from "./app/screen/Counter";
import Screen from "./app/screen/Screen";

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"#222"}
      />
      <Screen>
        <Counter />
      </Screen>
    </>
  );
};

export default App;
