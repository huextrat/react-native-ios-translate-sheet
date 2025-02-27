import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useIOSTranslateSheet } from "react-native-ios-translate-sheet";

export const Example = () => {
  const { presentIOSTranslateSheet } = useIOSTranslateSheet();

  const enText = "Hello world! This is a sample text to translate.";
  const frText = "Salut le monde ! Ceci est un exemple de texte à traduire.";

  const handleTranslateEn = () => {
    presentIOSTranslateSheet(enText);
  };

  const handleTranslateFr = () => {
    presentIOSTranslateSheet(frText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iOS Native Translator</Text>
      <Text style={styles.subtitle}>iOS Translate Sheet for React Native</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={handleTranslateEn}
          activeOpacity={0.8}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Example 1</Text>
            <Text style={styles.cardDescription}>{enText}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>→</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={handleTranslateFr}
          activeOpacity={0.8}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Example 2</Text>
            <Text style={styles.cardDescription}>{frText}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1E1E2E",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
    marginBottom: 40,
    fontWeight: "300",
  },
  cardContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#EAEEF2",
    marginBottom: 4,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E2E",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#5D5FEF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  icon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
