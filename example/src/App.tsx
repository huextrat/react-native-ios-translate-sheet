import { StyleSheet, View } from "react-native";
import { TranslateProvider } from "react-native-ios-translate-sheet";
import { Example } from "./Example";

export default function App() {
  return (
    <View style={styles.container}>
      <TranslateProvider>
        <Example />
      </TranslateProvider>
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
