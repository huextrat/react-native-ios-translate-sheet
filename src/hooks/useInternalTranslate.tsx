import { useRef, useState } from "react";
import { Platform } from "react-native";

const isSupported =
  Platform.OS === "ios" &&
  Number.parseFloat(String(Platform.Version)) >= 17.4;

export const useInternalTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] =
    useState(false);
  const textRef = useRef("");
  const opacityRef = useRef(0);

  const presentIOSTranslateSheet = (_text: string, _opacity?: number) => {
    textRef.current = _text;
    opacityRef.current = _opacity ?? 0;
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
    opacity: opacityRef.current,
    isSupported,
  };
};
