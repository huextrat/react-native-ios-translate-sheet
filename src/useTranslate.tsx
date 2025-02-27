import { useState } from "react";
import { StyleSheet } from "react-native";
import { IOSTranslateSheet } from "react-native-ios-translate-sheet";

export const useTranslate = () => {
  const [isPresented, setIsPresented] = useState(false);
  const [text, setText] = useState("");

  const translate = (_text: string) => {
    setIsPresented(true);
    setText(_text);
  };

  const TranslateView = () => {
    return (
      <IOSTranslateSheet
        text={text}
        isPresented={isPresented}
        onHide={() => setIsPresented(false)}
        style={styles.translateView}
      />
    );
  };

  return {
    isPresented,
    translate,
    TranslateView,
  };
};

const styles = StyleSheet.create({
  translateView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
