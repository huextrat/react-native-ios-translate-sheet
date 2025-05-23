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

    @objc public var hasReplacementAction: Bool = false {
        didSet {
            props.hasReplacementAction = hasReplacementAction
        }
    }
    
    @objc public var translateAnchorPointX: NSNumber = 0 {
        didSet {
          props.translateAnchorPointX = CGFloat(translateAnchorPointX.doubleValue)
        }
    }

    @objc public var translateAnchorPointY: NSNumber = 0 {
        didSet {
          props.translateAnchorPointY = CGFloat(translateAnchorPointY.doubleValue)
        }
    }

    @objc public var onHide: RCTBubblingEventBlock? {
        didSet {
            props.onHide = { [weak self] in
                self?.onHide?([:])
            }
        }
    }

    @objc public var onReplacementAction: RCTBubblingEventBlock? {
        didSet {
            props.onReplacementAction = { [weak self] text in
                self?.onReplacementAction?(["text": text])
            }
        }
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
