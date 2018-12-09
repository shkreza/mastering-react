//
//  RezaModule.swift
//  RNNYT
//
//  Created by Reza Sherafat on 12/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(RezaManager)
class RezaManager: RCTEventEmitter {
  
  static let startEvent: String = "reza-started"
  static let endEvent: String = "reza-ended"
  
  override func supportedEvents() -> [String] {
    return [RezaManager.startEvent, RezaManager.endEvent]
  }
  
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["startEvent": RezaManager.startEvent, "endEvent": RezaManager.endEvent]
  }
  
  @objc func sayHello(_ name: String) {
    print("Hello \(name)")
  }
  
  @objc func sayHelloBack(_ name: String, callback: RCTResponseSenderBlock) {
    let str = "Hello \(name)"
    
    print(str)
    
    callback([str])
  }
  
  @objc func sayHelloWithEvents(_ name: String) {
    self.sendEvent(withName: "reza-started", body: name)
    let str = "Hello \(name)"
    print(str)
    self.sendEvent(withName: "reza-ended", body: str)
  }
}
