import type { HostComponent, ViewProps } from "react-native";
import type {
  DirectEventHandler,
  Float,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  onHide: DirectEventHandler<null>;
  opacity?: Float;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
) as HostComponent<IOSTranslateSheetProps>;
