import { useRef, useState } from "react";
import { Platform } from "react-native";

const isSupported =
  Platform.OS === "ios" && Number.parseFloat(String(Platform.Version)) >= 17.4;

export const useInternalTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] =
    useState(false);
  const textRef = useRef("");
  const replacementActionRef = useRef<(text: string) => void>(undefined);

  const presentIOSTranslateSheet = (
    _text: string,
    _replacementAction?: (text: string) => void,
  ) => {
    textRef.current = _text;
    replacementActionRef.current = _replacementAction;
    setIsIOSTranslateSheetPresented(true);
  };

  const hideTranslateSheet = () => {
    setIsIOSTranslateSheetPresented(false);
  };

  return {
    isIOSTranslateSheetPresented,
    presentIOSTranslateSheet,
    hideTranslateSheet,
    text: textRef.current,
    isSupported,
    replacementAction: replacementActionRef.current,
  };
};
