import {
  type CodegenTypes,
  codegenNativeComponent,
  type HostComponent,
  type ViewProps,
} from "react-native";

export interface OnReplacementActionEvent {
  text: string;
}

interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  hasReplacementAction: boolean;
  translateAnchorPointX?: CodegenTypes.Double;
  translateAnchorPointY?: CodegenTypes.Double;
  onHide: CodegenTypes.DirectEventHandler<null>;
  onReplacementAction?: CodegenTypes.DirectEventHandler<OnReplacementActionEvent>;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
) as HostComponent<IOSTranslateSheetProps>;
