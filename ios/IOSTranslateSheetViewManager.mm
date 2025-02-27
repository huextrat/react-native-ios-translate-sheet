#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#if __has_include("IOSTranslateSheet/IOSTranslateSheet-Swift.h")
#import "IOSTranslateSheet/IOSTranslateSheet-Swift.h"
#else
#import "IOSTranslateSheet-Swift.h"
#endif

@interface IOSTranslateSheetViewManager : RCTViewManager
@end

@implementation IOSTranslateSheetViewManager

RCT_EXPORT_MODULE(IOSTranslateSheetView)

- (IOSTranslateSheetProvider *)view
{
  return [[IOSTranslateSheetProvider alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
