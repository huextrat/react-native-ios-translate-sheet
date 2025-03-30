import type { ViewProps } from "react-native";
import type { DirectEventHandler } from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

interface IOSTranslateSheetProps extends ViewProps {
  text: string;
  isPresented: boolean;
  onHide: DirectEventHandler<null>;
}

export default codegenNativeComponent<IOSTranslateSheetProps>(
  "IOSTranslateSheetView",
);
