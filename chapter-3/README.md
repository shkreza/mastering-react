# Preparation
Assuiming react-native is already installed.

# Run
In react project folder:
```bash
$ react-native run-ios
```

# Troubleshooting
To rename/relink the project:
```bash
# Kill the react-native process
$ kill -9 `ps aux | grep react-native | grep -v grep  | awk '{print $2}'`

# Delete/recreate project files
$ rm ios android
$ react-native eject
$ react-native link

# Run the app again
$ react-native run-ios
```

## Prop types
Instead of `React.propTypes.node` use the following:
```javascript
import _propType from 'prop-types'
_propType.node
```