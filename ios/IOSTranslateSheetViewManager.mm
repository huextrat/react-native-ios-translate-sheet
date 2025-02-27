#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface IOSTranslateSheetViewManager : RCTViewManager
@end

@implementation IOSTranslateSheetViewManager

RCT_EXPORT_MODULE(IOSTranslateSheetView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
