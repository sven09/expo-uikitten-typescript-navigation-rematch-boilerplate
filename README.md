# Expo UIKitten Typescript ReactNavigation Rematch Responsive Boilerplate 

__Work in progress__: Means, this project is far away from being perfect. However, use it as an inspiration starting point.

This is a proof of concept and boilerplate for using the same code base for Expo Native as well as Expo Web. 
The intention is to show how the components work together. For full details please refer to the [References](#references) section below.

![Preview](https://github.com/sven09/expo-uikitten-typescript-navigation-rematch-boilerplate/blob/master/docs/images/expo-uikitten-theming.gif?raw=true "Preview for web and ios")


## Expo & React Navigation
We wanted to see, how we can handle a common codebase for App & Web and see how we are handling navigation and deeplinking as well as routes.
We would also like to see, how React Navigation 5.x is working. 
Tab navigation shows tabbar on web on the top and on iOS and Android on the bottom.
To be continued ...

## UI Kitten
Just beautiful and cool. For more details see https://github.com/artyorsh/react-navigation-ex-demo and switch to the examples branch


## Rematch
The general decision to use rematch/redux instead of React Context is due to the fact 
that we are using rematch anyway to fetching data and we don't need two mechanism that 
are delivering the same service.

## Typescript
This is a no brainer for us. Just saying optional chaining (although it is currently not used in this basic setup)

## i18n
Using i18n and Expo Localization https://www.i18next.com/ & https://docs.expo.io/versions/latest/sdk/localization/

# References
Expo application that demonstrates usage of 
* Expo https://github.com/expo/expo 
* React Navigation 5 https://github.com/react-navigation/navigation-ex 
* UI Kitten https://github.com/akveo/react-native-ui-kitten 
* Formik https://github.com/jaredpalmer/formik
* Rematch https://github.com/rematch/rematch
* Typescript 3.7 https://www.typescriptlang.org/docs/handbook/release-notes/tyescript-3-7.html
* react-responsive https://github.com/contra/react-responsive


# Todos

## Open
* Deep Linking and set up the state eg. tabbrowser/chat/user123
* Drawer Navigator


## Done 
* Deep Linking for Browser and App
* Router depending on login state from rematch (formerly known as switch router)
* Responsive Layout for expo web
* Translation via i18n and Expo Localization
* Tab Navigator on Welcome screen with some tabs


## Usage

Clone it to your favorite place.

```bash
yarn
yarn start
```

Hit w, i , a for web, ios or android (untested)

## Deep linking

__Work in Progress__

See also https://reactnavigation.org/docs/en/next/deep-linking.html#uri-prefix

Start it with yarn start

Hit i for iOS 
```bash
xcrun simctl openurl booted exp://127.0.0.1:19000/--/imprint
```
It will open the deeplink screen imprint

Hit w for web and open url in browser
```bash
open http://localhost:19006/imprint
```
It will open the deeplink screen imprint (keep in mind trailing / will not work )

# Kudos
This package is heavily based on:

https://github.com/artyorsh/react-navigation-ex-demo

Many thanks to the Expo Team and Evan, as well as the React Navigation Team. 