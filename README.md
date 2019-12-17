# Expo UIKitten Typescript ReactNavigation Rematch Responsive Boilerplate 

_Work in progress_

This is a proof of concept and boilerplate for using the same code base for 
Expo Native as well as Expo Web.

The general decision to use rematch/redux instead of React Context is due to the fact 
that we are using rematch anyway to fetching data and we don't need two mechanism that 
are delivering the same service.


Expo application that demonstrates usage of 
* [Expo][https://github.com/expo/expo] 
* [React Navigation 5][https://github.com/react-navigation/navigation-ex] 
* [UI Kitten][https://github.com/akveo/react-native-ui-kitten]. 
* [react-responsive][https://github.com/contra/react-responsive]
* [Typescript 3.7][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html]
* [Rematch][https://github.com/rematch/rematch]


### Todo
* Tab Navigator on welcome screen with some tabs
* Drawer Navigator
* i18n


### Done 
* Router depending on login state from rematch (formerly known as switch router)
* Responsive Layout





## Usage

```bash
yarn
expo start
```

# Kudos
This package is heavily based on:

https://github.com/artyorsh/react-navigation-ex-demo