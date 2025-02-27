import type { ViewProps } from "react-native";
import type {
  DirectEventHandler,
  Float,
  WithDefault,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  onHide?: DirectEventHandler<null>;
  opacity?: WithDefault<Float, 0.0>;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
);
