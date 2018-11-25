# Installation
Install and link react dependencies:
```bash
$ npm install --save react-navigation
$ npm install --save react-native-gesture-helper
$ react-native link
```

# Navigation Controllers
- App container
```node
  import { createAppContainer } from 'react-navigation'
```
- Navigator
```node
  import { createStackNavigator, createBottomTabNavigator }
```
- App source
```node
  # App.js
  const routes = {
      route1: { screen: routeComponent }
      route2: { screen: routeComponent }
  }
  const routeOptions = {
      initialRouteName: route1,
      defaultNavigationOptions: { /* Styles, header format, etc */ }
  }
  exprot default createAppConatiner(createStackNavigator(routes,routeOptions))
```

# Other useful stuff
- iPhone X's screen
```node
  import { SafeAreaView } from 'react-navigation';
```

# Navigation
- Go to another page:
```node
  onPress={() => this.props.navigation.navigate('NameOfRoute', params)}
```
- Go (perhaps multiple times) to another page:
```node
  onPress={() => this.props.navigation.push('NameOfRoute')}
```
- Go back:
```node
  onPress={() => this.props.navigation.goBack()}
```

# Params
- Send params down to next screen:
```node
  this.props.navigation.navigate('routeName', params)
```
- Access params send down:
```node
  this.props.navigation.getParam('paramName', 'defaultValue')
```

# Navigation options
- Static variable in components:
```node
  static navigationOptions = {
    title: 'some title',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: 'red',
    headerTitleStyle: { fontWeight: 'bold' }
  }
```
- Use params in options:
```node
  static navigationOptions = (navigation) => {
      return { title: navigation.getParam('title', 'default value') }
  }
```