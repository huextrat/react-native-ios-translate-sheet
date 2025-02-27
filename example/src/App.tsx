import { Button, StyleSheet, Text, View } from "react-native";
import { useTranslate } from "react-native-ios-translate-sheet";

export default function App() {
  const { translate, TranslateView } = useTranslate();

  const handleTranslateEn = () => {
    translate("Hello world! This is a sample text to translate.");
  };

  const handleTranslateFr = () => {
    translate("Salut le monde ! Ceci est un exemple de texte à traduire.");
  };

  return (
    <View style={styles.container}>
      {/* Add the TranslateView component to your render tree */}
      <TranslateView />
      <Text style={styles.text}>Press the button below to translate text</Text>
      <Button title="Translate EN -> FR " onPress={handleTranslateEn} />
      <Button title="Translate FR -> EN" onPress={handleTranslateFr} />
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
