import { StyleSheet, View } from "react-native";
import { IOSTranslateSheetProvider } from "react-native-ios-translate-sheet";
import { Example } from "./Example";

export default function App() {
  return (
    <View style={styles.container}>
      <IOSTranslateSheetProvider>
        <Example />
      </IOSTranslateSheetProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
});
