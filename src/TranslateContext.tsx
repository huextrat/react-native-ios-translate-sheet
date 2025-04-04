import { type ReactNode, createContext, useContext } from "react";
import { type NativeSyntheticEvent, StyleSheet } from "react-native";
import IOSTranslateSheet, {
  type OnReplacementActionEvent,
} from "./IOSTranslateSheetViewNativeComponent";
import { useInternalTranslateSheet } from "./hooks/useInternalTranslate";

type TranslateContextType = {
  isSupported: boolean;
  presentIOSTranslateSheet: (
    text: string,
    replacementAction?: (text: string) => void,
  ) => void;
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
    isSupported,
    replacementAction,
  } = useInternalTranslateSheet();

  const onReplacementAction = (
    event: NativeSyntheticEvent<OnReplacementActionEvent>,
  ) => {
    replacementAction?.(event.nativeEvent.text);
  };

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
        hasReplacementAction={!!replacementAction}
        onReplacementAction={onReplacementAction}
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
