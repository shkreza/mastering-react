//
//  CalendarManager.swift
//  RNNYTNativeModule
//
//  Created by Reza Sherafat on 12/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  @objc(addEvent:location:date:callback:)
  func addEvent(name: String, location: String, date: NSNumber, callback: RCTResponseSenderBlock ) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date)
    let ret:[String: Any] = [
      "name": name,
      "location": location,
      "date" : date
    ];
    callback([ret]);
  }
}
