import { StatusBar, StyleSheet, View } from "react-native";
import { IOSTranslateSheetProvider } from "react-native-ios-translate-sheet";
import { Example } from "./Example";

export default function App() {
  return (
    <IOSTranslateSheetProvider>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Example />
      </View>
    </IOSTranslateSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
