import { useState } from "react";
import { StyleSheet } from "react-native";
import IOSTranslateSheet from "./IOSTranslateSheetViewNativeComponent";

export const useIOSTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] = useState(false);
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(0);

  const presentIOSTranslateSheet = (_text: string, _opacity?: number) => {
    setIsIOSTranslateSheetPresented(true);
    setText(_text);
    setOpacity(_opacity ?? 0);
  };

  const IOSTranslateSheetView = () => {
    return (
      <IOSTranslateSheet
        text={text}
        isPresented={isIOSTranslateSheetPresented}
        onHide={() => setIsIOSTranslateSheetPresented(false)}
        style={styles.translateView}
        opacity={opacity}
      />
    );
  };

  return {
    isIOSTranslateSheetPresented,
    presentIOSTranslateSheet,
    IOSTranslateSheetView,
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
