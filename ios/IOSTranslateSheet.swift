import SwiftUI
import Translation

class Props: ObservableObject {
    @Published var text: String = ""
    @Published var isPresented: Bool = false
    @Published var hasReplacementAction: Bool = false
    @Published var translateAnchorPointX: CGFloat?
    @Published var translateAnchorPointY: CGFloat?
    @Published var onHide: () -> Void = {}
    @Published var onReplacementAction: (String) -> Void = { _ in }
}

struct IOSTranslateSheet: View {
    @ObservedObject var props: Props
    @Environment(\.horizontalSizeClass) private var horizontalSizeClass
    
    var body: some View {
        if #available(iOS 17.4, *) {
            Color.clear
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .translationPresentation(
                    isPresented: $props.isPresented,
                    text: props.text,
                    attachmentAnchor: getAttachmentAnchor(),
                    arrowEdge: getArrowEdge(),
                    replacementAction: props.hasReplacementAction ? props.onReplacementAction : nil
                )
                .onChange(of: props.isPresented) { oldValue, newValue in
                    if oldValue == true && newValue == false {
                        props.onHide()
                    }
                }
        }
    }
    
    @available(iOS 17.4, *)
    private func getAttachmentAnchor() -> PopoverAttachmentAnchor {
        if horizontalSizeClass == .regular, let pointX = props.translateAnchorPointX, let pointY = props.translateAnchorPointY {
            let screenSize = UIScreen.main.bounds.size
            let normalizedPoint = UnitPoint(
                x: pointX / screenSize.width,
                y: pointY / screenSize.height
            )
            if (normalizedPoint.x == 0 && normalizedPoint.y == 0) {
              return .point(.bottom)
            }
            return .point(normalizedPoint)
        }
        return .point(.bottom)
    }
    
    @available(iOS 17.4, *)
    private func getArrowEdge() -> Edge {
        if horizontalSizeClass == .regular, let pointY = props.translateAnchorPointY {
            if pointY != 0 && pointY < UIScreen.main.bounds.height / 2 {
                return .top
            }
            return .bottom
        }
        return .top
    }
}
