//
//  CalendarManagerBridge.m
//  RNNYTNativeModule
//
//  Created by Reza Sherafat on 12/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

//RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)
RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date callback:(RCTResponseSenderBlock)callback);

@end

