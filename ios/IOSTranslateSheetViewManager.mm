#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTComponent.h>
#import "RCTBridge.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTConvert.h>
#import <ReactCommon/RCTTurboModule.h>
#import "RCTFabricComponentsPlugins.h"
#endif

#if __has_include("IOSTranslateSheet/IOSTranslateSheet-Swift.h")
#import "IOSTranslateSheet/IOSTranslateSheet-Swift.h"
#else
#import "IOSTranslateSheet-Swift.h"
#endif

@interface IOSTranslateSheetViewManager : RCTViewManager
@end

@implementation IOSTranslateSheetViewManager

RCT_EXPORT_MODULE(IOSTranslateSheetView)

- (UIView *)view
{
    IOSTranslateSheetProvider *view = [[IOSTranslateSheetProvider alloc] init];
    return view;
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_EXPORT_VIEW_PROPERTY(isPresented, BOOL)
RCT_EXPORT_VIEW_PROPERTY(hasReplacementAction, BOOL)
RCT_EXPORT_VIEW_PROPERTY(translateAnchorPointX, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(translateAnchorPointY, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onHide, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onReplacementAction, RCTDirectEventBlock)

#ifdef RCT_NEW_ARCH_ENABLED
+ (BOOL)requiresMainQueueSetup
{
    return YES;
}
#endif

@end