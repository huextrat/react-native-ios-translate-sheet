import UIKit
import React
import SwiftUI

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
    }
  }

  @objc public var onHideCallback: (() -> Void)?
  
  public override func layoutSubviews() {
      super.layoutSubviews()
      setupView()
    }
  
  private func setupView() {
    if self.hostingController != nil {
      return
    }

    props.onHide = { [weak self] in
      self?.onHideCallback?()
      self?.hostingController?.view.isHidden = true
    }
    
    self.hostingController = UIHostingController(
      rootView: IOSTranslateSheet(
        props: props
      )
    )
    
    if let hostingController = self.hostingController {
      hostingController.view.isHidden = !isPresented
      hostingController.view.backgroundColor = UIColor(white: 0.0, alpha: opacity)

      addSubview(hostingController.view)
      hostingController.view.translatesAutoresizingMaskIntoConstraints = false
      hostingController.view.pinEdges(to: self)
      reactAddController(toClosestParent: hostingController)
    }
  }
}

extension UIView {
  func pinEdges(to other: UIView) {
    NSLayoutConstraint.activate([
      leadingAnchor.constraint(equalTo: other.leadingAnchor),
      trailingAnchor.constraint(equalTo: other.trailingAnchor),
      topAnchor.constraint(equalTo: other.topAnchor),
      bottomAnchor.constraint(equalTo: other.bottomAnchor)
    ])
  }
}