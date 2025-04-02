import SwiftUI
import Translation

class Props: ObservableObject {
    @Published var text: String = ""
    @Published var isPresented: Bool = false
    @Published var hasReplacementAction: Bool = false
    @Published var onHide: () -> Void = {}
    @Published var onReplacementAction: (String) -> Void = { _ in }
}

struct IOSTranslateSheet: View {
    @ObservedObject var props: Props
    
    var body: some View {
        if #available(iOS 17.4, *) {
            Color.clear
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .translationPresentation(
                    isPresented: $props.isPresented,
                    text: props.text,
                    attachmentAnchor: .point(.bottom),
                    arrowEdge: .bottom,
                    replacementAction: props.hasReplacementAction ? props.onReplacementAction : nil
                )
                .onChange(of: props.isPresented) { oldValue, newValue in
                    if oldValue == true && newValue == false {
                        props.onHide()
                    }
                }
        }
    }
}
