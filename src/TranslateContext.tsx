import { createContext, type ReactNode, useContext } from "react";
import {
  type GestureResponderEvent,
  type NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { useInternalTranslateSheet } from "./hooks/useInternalTranslate";
import IOSTranslateSheet, {
  type OnReplacementActionEvent,
} from "./IOSTranslateSheetViewNativeComponent";

export type PresentIOSTranslateSheetParams = {
  text: string;
  replacementAction?: (text: string) => void;
  gestureEvent?: GestureResponderEvent;
};

type TranslateContextType = {
  isSupported: boolean;
  presentIOSTranslateSheet: (params: PresentIOSTranslateSheetParams) => void;
};

const TranslateContext = createContext<TranslateContextType | null>(null);

export const IOSTranslateSheetProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {
    presentIOSTranslateSheet,
    isIOSTranslateSheetPresented,
    text,
    hideTranslateSheet,
    isSupported,
    replacementAction,
    anchorPoint,
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
        translateAnchorPointX={anchorPoint.x}
        translateAnchorPointY={anchorPoint.y}
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
