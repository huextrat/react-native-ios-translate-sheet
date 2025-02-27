#import "IOSTranslateSheetView.h"

#import "generated/RNIOSTranslateSheetViewSpec/ComponentDescriptors.h"
#import "generated/RNIOSTranslateSheetViewSpec/EventEmitters.h"
#import "generated/RNIOSTranslateSheetViewSpec/Props.h"
#import "generated/RNIOSTranslateSheetViewSpec/RCTComponentViewHelpers.h"

#import "RCTFabricComponentsPlugins.h"

#if __has_include("IOSTranslateSheet/IOSTranslateSheet-Swift.h")
#import "IOSTranslateSheet/IOSTranslateSheet-Swift.h"
#else
#import "IOSTranslateSheet-Swift.h"
#endif

using namespace facebook::react;

@interface IOSTranslateSheetView () <RCTIOSTranslateSheetViewViewProtocol>

@end

@implementation IOSTranslateSheetView {
    IOSTranslateSheetProvider * _view;
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
    
    __weak __typeof(self) weakSelf = self;
    _view.onHideCallback = ^{
        __strong __typeof(weakSelf) strongSelf = weakSelf;
        if (strongSelf) {
            // Emit the onHide event
            if (strongSelf->_eventEmitter) {
                std::dynamic_pointer_cast<const IOSTranslateSheetViewEventEmitter>(strongSelf->_eventEmitter)
                    ->onHide({});
            }
        }
    };

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<IOSTranslateSheetViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<IOSTranslateSheetViewProps const>(props);

    if (oldViewProps.text != newViewProps.text) {
        NSString *text = [[NSString alloc] initWithUTF8String: newViewProps.text.c_str()];
        [_view setText:text];
    }
    
    if (oldViewProps.isPresented != newViewProps.isPresented) {
        [_view setIsPresented:newViewProps.isPresented];
    }

    if (oldViewProps.opacity != newViewProps.opacity) {
        [_view setOpacity:newViewProps.opacity];
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> IOSTranslateSheetViewCls(void)
{
    return IOSTranslateSheetView.class;
}

@end
