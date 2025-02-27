import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useIOSTranslateSheet } from "react-native-ios-translate-sheet";

export const Example = () => {
  const { presentIOSTranslateSheet } = useIOSTranslateSheet();

  const handleTranslateEn = () => {
    presentIOSTranslateSheet(
      "Hello world! This is a sample text to translate.",
      1
    );
  };

  const handleTranslateFr = () => {
    presentIOSTranslateSheet(
      "Salut le monde ! Ceci est un exemple de texte à traduire.",
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press the button below to translate text</Text>
      <Button title="Translate EN -> FR " onPress={handleTranslateEn} />
      <Button title="Translate FR -> EN" onPress={handleTranslateFr} />
    </View>
  );
};

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
