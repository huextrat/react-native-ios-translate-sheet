import type { ViewProps } from "react-native";
import type {
  DirectEventHandler,
  Double,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface OnReplacementActionEvent {
  text: string;
}

interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  hasReplacementAction: boolean;
  translateAnchorPointX?: Double;
  translateAnchorPointY?: Double;
  onHide: DirectEventHandler<null>;
  onReplacementAction?: DirectEventHandler<OnReplacementActionEvent>;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
);
