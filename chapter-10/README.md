## Preparation
### Add React Header File path
Under 'Header Search Paths' add `$(SRCROOT)/../node_modules/react-native/React` with _recursive_ selected

### Export Module/Functions to React

```objectivec
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RezaManager, NSObject)

RCT_EXTERN_METHOD(sayHello:(nonnull NSString *)name)

@end
```

### Call Native Methods in React
```javascript
import { NativeModules } from 'react-native';

const { RezaManager } = NativeModules;

RezaManager.sayHello("Reza")
```

### Native Method with Callback
- Implement as follows:
```swift
  @objc func sayHelloBack(_ name: String, callback: RCTResponseSenderBlock) {
    let str = "Hello \(name)"
    callback([str])
  }
```

- Export as follows:
```objectivec
@interface RCT_EXTERN_MODULE(RezaManager, NSObject)
RCT_EXTERN_METHOD(sayHelloBack:(nonnull NSString *)name callback:(RCTResponseSenderBlock)callback)
@end
```

- Call as follows:
```javascript
RezaManager.sayHelloBack("Reza", (str)=>console.log(str))
```

### Native Event Emitter
- Import header (do not import `RCTBridgeModule.h` or other headers)
```
#import "RCTEventEmitter.h"
```

- Implement `RCTEventEmitter` and override `supportedEvents()`:
```swift
class RezaManager: RCTEventEmitter {
  
  override func supportedEvents() -> [String] {
    return ["reza-started", "reza-ended"]
  }
  
  @objc func doStuff() {
    self.sendEvent(withName: "reza-started", body: name)
    // Do stuff
    self.sendEvent(withName: "reza-ended", body: name)
  }
```

- Receive emitted events
```javascript
import { NativeEventEmitter } from 'react-native';
// Create emitter
this.nativeEmitter = new NativeEventEmitter(RezaManager);

// Subscribe to events
// Call this from componentWillMount()
let subscription = nativeEmitter.addListener('event-name', (e) => handle(e));

// Unsubscribe
// Call this from componentWillUnmount()
subscription.remove()
```

### Export constants
- Define constacts by overriding `constantsToExport()`:
```swift
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["startEvent": RezaManager.startEvent, "endEvent": RezaManager.endEvent]
  }
```

- Access Contants:
```javascript
import { NativeModules } from 'react-native';
const { RezaManager } = NativeModules;

console.log(RezaManager.startEvent)
console.log(RezaManager.endEvent)
```