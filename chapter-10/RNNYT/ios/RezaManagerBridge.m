//
//  RezaManagerBridge.m
//  RNNYT
//
//  Created by Reza Sherafat on 12/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(RezaManager, RCTEventEmitter)

RCT_EXTERN_METHOD(sayHello:(nonnull NSString *)name)
RCT_EXTERN_METHOD(sayHelloBack:(nonnull NSString *)name callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(sayHelloWithEvents:(nonnull NSString *)name)

@end
