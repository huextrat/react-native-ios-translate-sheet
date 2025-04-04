import { useRef, useState } from "react";
import { type GestureResponderEvent, Platform } from "react-native";

const isSupported =
  Platform.OS === "ios" && Number.parseFloat(String(Platform.Version)) >= 17.4;

export const useInternalTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] =
    useState(false);
  const textRef = useRef("");
  const replacementActionRef = useRef<(text: string) => void>(undefined);
  const anchorPoint = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const presentIOSTranslateSheet = (
    _text: string,
    _replacementAction?: (text: string) => void,
    _anchorPoint?: GestureResponderEvent,
  ) => {
    textRef.current = _text;
    replacementActionRef.current = _replacementAction;
    anchorPoint.current = {
      x: _anchorPoint?.nativeEvent.pageX || 0,
      y: _anchorPoint?.nativeEvent.pageY || 0,
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
