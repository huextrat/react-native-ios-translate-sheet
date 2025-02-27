import type { ViewProps } from "react-native";
import type {
  DirectEventHandler,
  Float,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

interface NativeProps extends ViewProps {
  text: string;
  isPresented: boolean;
  onHide: DirectEventHandler<null>;
  opacity?: Float;
}

export default codegenNativeComponent<NativeProps>("IOSTranslateSheetView");
