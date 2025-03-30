import { type ReactNode, createContext, useContext } from "react";
import { StyleSheet } from "react-native";
import IOSTranslateSheet from "./IOSTranslateSheetViewNativeComponent";
import { useInternalTranslateSheet } from "./hooks/useInternalTranslate";

type TranslateContextType = {
  isSupported: boolean;
  presentIOSTranslateSheet: (text: string, opacity?: number) => void;
};

const TranslateContext = createContext<TranslateContextType | null>(null);

export const IOSTranslateSheetProvider = ({
  children,
}: { children: ReactNode }) => {
  const {
    presentIOSTranslateSheet,
    isIOSTranslateSheetPresented,
    text,
    hideTranslateSheet,
    opacity,
    isSupported,
  } = useInternalTranslateSheet();

  return (
    <TranslateContext.Provider
      value={{
        presentIOSTranslateSheet,
        isSupported,
      }}
    >
      <IOSTranslateSheet
        text={text}
        isPresented={isIOSTranslateSheetPresented}
        onHide={hideTranslateSheet}
        style={StyleSheet.absoluteFillObject}
        opacity={opacity}
      />
      {children}
    </TranslateContext.Provider>
  );
};

export const useIOSTranslateSheet = () => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useIOSTranslateSheet must be used within a IOSTranslateSheetProvider",
    );
  }
  return context;
};
