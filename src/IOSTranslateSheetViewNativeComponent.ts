import type { ViewProps } from "react-native";
import type { DirectEventHandler } from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface OnReplacementActionEvent {
  text: string;
}

interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  hasReplacementAction: boolean;
  onHide: DirectEventHandler<null>;
  onReplacementAction?: DirectEventHandler<OnReplacementActionEvent>;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
);
