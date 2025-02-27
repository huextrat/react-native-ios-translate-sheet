import { type ReactNode, createContext, useContext } from "react";
import { StyleSheet } from "react-native";
import IOSTranslateSheet from "./IOSTranslateSheetViewNativeComponent";
import { useInternalTranslateSheet } from "./useTranslate";

type TranslateContextType = {
  presentIOSTranslateSheet: (text: string, opacity?: number) => void;
};

const TranslateContext = createContext<TranslateContextType | null>(null);

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
  const {
    presentIOSTranslateSheet,
    isIOSTranslateSheetPresented,
    text,
    opacity,
    hideTranslateSheet,
  } = useInternalTranslateSheet();

  return (
    <TranslateContext.Provider value={{ presentIOSTranslateSheet }}>
      <IOSTranslateSheet
        text={text}
        isPresented={isIOSTranslateSheetPresented}
        onHide={hideTranslateSheet}
        opacity={opacity}
        style={styles.translateView}
      />
      {children}
    </TranslateContext.Provider>
  );
};

export const useIOSTranslateSheet = () => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useTranslateSheet must be used within a TranslateProvider",
    );
  }
  return context;
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
