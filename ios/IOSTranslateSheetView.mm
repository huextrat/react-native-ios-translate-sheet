#ifdef RCT_NEW_ARCH_ENABLED
#import "IOSTranslateSheetView.h"
#import <React/RCTConvert.h>
#import <React/RCTFabricComponentsPlugins.h>

#if __has_include("IOSTranslateSheet/IOSTranslateSheet-Swift.h")
#import "IOSTranslateSheet/IOSTranslateSheet-Swift.h"
#else
#import "IOSTranslateSheet-Swift.h"
#endif

#import "generated/RNIOSTranslateSheetViewSpec/ComponentDescriptors.h"
#import "generated/RNIOSTranslateSheetViewSpec/EventEmitters.h"
#import "generated/RNIOSTranslateSheetViewSpec/Props.h"
#import "generated/RNIOSTranslateSheetViewSpec/RCTComponentViewHelpers.h"

using namespace facebook::react;

@interface IOSTranslateSheetView () <RCTIOSTranslateSheetViewViewProtocol>
@end

@implementation IOSTranslateSheetView {
    IOSTranslateSheetProvider *_view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<IOSTranslateSheetViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const IOSTranslateSheetViewProps>();
        _props = defaultProps;
        _view = [[IOSTranslateSheetProvider alloc] init];
        
        __weak __typeof__(self) weakSelf = self;
        _view.onHide = ^(NSDictionary *_) {
            __typeof__(self) strongSelf = weakSelf;
            if (strongSelf && strongSelf->_eventEmitter) {
                std::dynamic_pointer_cast<const IOSTranslateSheetViewEventEmitter>(strongSelf->_eventEmitter)
                    ->onHide({});
            }
        };

        _view.onReplacementAction = ^(NSDictionary *text) {
            __typeof__(self) strongSelf = weakSelf;
            if (strongSelf && strongSelf->_eventEmitter) {
                std::dynamic_pointer_cast<const IOSTranslateSheetViewEventEmitter>(strongSelf->_eventEmitter)
                    ->onReplacementAction({.text = [text[@"text"] UTF8String]});
            }
        };

        self.contentView = _view;
    }
    return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<const IOSTranslateSheetViewProps>(_props);
    const auto &newViewProps = *std::static_pointer_cast<const IOSTranslateSheetViewProps>(props);

    if (oldViewProps.text != newViewProps.text) {
        _view.text = [[NSString alloc] initWithUTF8String:newViewProps.text.c_str()];
    }
    if (oldViewProps.isPresented != newViewProps.isPresented) {
        _view.isPresented = newViewProps.isPresented;
    }
    if (oldViewProps.hasReplacementAction != newViewProps.hasReplacementAction) {
        _view.hasReplacementAction = newViewProps.hasReplacementAction;
    }

    [super updateProps:props oldProps:oldProps];
}

@end

Class<RCTComponentViewProtocol> IOSTranslateSheetViewCls(void)
{
    return IOSTranslateSheetView.class;
}
#endif