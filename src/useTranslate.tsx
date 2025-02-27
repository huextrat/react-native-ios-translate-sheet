import { useState } from "react";

export const useInternalTranslateSheet = () => {
  const [isIOSTranslateSheetPresented, setIsIOSTranslateSheetPresented] =
    useState(false);
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(0);

  const presentIOSTranslateSheet = (_text: string, _opacity?: number) => {
    setIsIOSTranslateSheetPresented(true);
    setText(_text);
    setOpacity(_opacity ?? 0);
  };

  const hideTranslateSheet = () => {
    setIsIOSTranslateSheetPresented(false);
  };

  return {
    isIOSTranslateSheetPresented,
    presentIOSTranslateSheet,
    hideTranslateSheet,
    text,
    opacity,
  };
};
