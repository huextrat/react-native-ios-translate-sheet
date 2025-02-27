import SwiftUI
import Translation

class Props: ObservableObject {
    @Published var text: String = ""
    @Published var isPresented: Bool = false
    @Published var onHide: () -> Void = {}
    @Published var opacity: Double = 0.0
}

struct IOSTranslateSheet: View {
    @ObservedObject var props: Props
    
    var body: some View {
        if #available(iOS 17.4, *) {
            Color.clear
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .translationPresentation(isPresented: $props.isPresented, text: props.text)
                .onChange(of: props.isPresented) { oldValue, newValue in
                    if oldValue == true && newValue == false {
                        props.onHide()
                    }
                }
        }
    }
}