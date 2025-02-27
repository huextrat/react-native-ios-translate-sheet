import UIKit
import React
import SwiftUI

extension UIView {
    func pinEdges(to view: UIView) {
        translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            leadingAnchor.constraint(equalTo: view.leadingAnchor),
            trailingAnchor.constraint(equalTo: view.trailingAnchor),
            topAnchor.constraint(equalTo: view.topAnchor),
            bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

public typealias RCTBubblingEventBlock = @convention(block) (_ body: [AnyHashable: Any]?) -> Void

@objc public class IOSTranslateSheetProvider: UIView {
    private var props = Props()
    private var hostingController: UIHostingController<IOSTranslateSheet>?
    
    @objc public var text: String = "" {
        didSet {
            props.text = text
        }
    }
    
    @objc public var isPresented: Bool = false {
        didSet {
            props.isPresented = isPresented
            hostingController?.view.isHidden = !isPresented
        }
    }
    
    @objc public var opacity: Double = 0.0 {
        didSet {
            props.opacity = opacity
            updateBackgroundColor()
        }
    }
    
    @objc public var onHide: RCTBubblingEventBlock? {
        didSet {
            props.onHide = { [weak self] in
                self?.onHide?([:])
            }
        }
    }

    private func updateBackgroundColor() {
        let currentOpacity = isPresented ? opacity : 0.0
        hostingController?.view.backgroundColor = UIColor(white: 0.0, alpha: currentOpacity)
    }
    
    public override func layoutSubviews() {
        super.layoutSubviews()
        setupView()
    }
    
    private func setupView() {
        if self.hostingController != nil {
            return
        }
        
        self.hostingController = UIHostingController(
            rootView: IOSTranslateSheet(
                props: props
            )
        )
        
        if let hostingController = self.hostingController {
            hostingController.view.isHidden = !isPresented            
            addSubview(hostingController.view)
            hostingController.view.pinEdges(to: self)
            reactAddController(toClosestParent: hostingController)
        }
    }
}