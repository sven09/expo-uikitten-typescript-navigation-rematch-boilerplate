# Expo UIKitten Typescript ReactNavigation Rematch Responsive Boilerplate 

__Work in progress__

This is a proof of concept and boilerplate for using the same code base for 
Expo Native as well as Expo Web.

![Preview](https://github.com/sven09/expo-uikitten-typescript-navigation-rematch-boilerplate/blob/master/docs/images/expo-uikitten-theming.gif "Preview for web and ios")



## Expo & React Navigation
We wanted to see, how we can handle a common codebase for App & Web and see how we are handling navigation and deeplinking as well as routes.
We would also like to see, how React Navigation 5.x is working. 
To be continued ...

## UI Kitten
Just beautiful and cool


## Rematch
The general decision to use rematch/redux instead of React Context is due to the fact 
that we are using rematch anyway to fetching data and we don't need two mechanism that 
are delivering the same service.

## Typescript
This is a no brainer for us. Just saying optional chaining (although it is currently not used in this basic setup)

## i18n
To be done

# References
Expo application that demonstrates usage of 
* [Expo][https://github.com/expo/expo] 
* [React Navigation 5][https://github.com/react-navigation/navigation-ex] 
* [UI Kitten][https://github.com/akveo/react-native-ui-kitten]. 
* [Rematch][https://github.com/rematch/rematch]
* [Typescript 3.7][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html]
* [react-responsive][https://github.com/contra/react-responsive]

# Todos

## Open
* Tab Navigator on welcome screen with some tabs
* Drawer Navigator
* i18n


## Done 
* Router depending on login state from rematch (formerly known as switch router)
* Responsive Layout for expo web


## Usage

Clone it to your favorite place.

```bash
yarn
yarn start
```

Hit w, i , a for web, ios or android (untested)

# Kudos
This package is heavily based on:

https://github.com/artyorsh/react-navigation-ex-demo