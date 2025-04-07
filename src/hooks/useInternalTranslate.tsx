import { useRef, useState } from "react";
import { Platform } from "react-native";
import type { PresentIOSTranslateSheetParams } from "../TranslateContext";

const isSupported =
  Platform.OS === "ios" && Number.parseFloat(String(Platform.Version)) >= 17.4;

export const useInternalTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] =
    useState(false);
  const textRef = useRef("");
  const replacementActionRef = useRef<(text: string) => void>(undefined);
  const anchorPoint = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const presentIOSTranslateSheet = (params: PresentIOSTranslateSheetParams) => {
    textRef.current = params.text;
    replacementActionRef.current = params.replacementAction;
    anchorPoint.current = {
      x: params.gestureEvent?.nativeEvent.pageX || 0,
      y: params.gestureEvent?.nativeEvent.pageY || 0,
    };
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
    anchorPoint: anchorPoint.current,
  };
};
