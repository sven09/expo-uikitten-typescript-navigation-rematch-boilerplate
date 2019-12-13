import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  LayoutElement,
  Text,
} from 'react-native-ui-kitten';
import { InnerLayout } from '../Layout/InnerLayout';

export const WelcomeScreen = (props): LayoutElement => (
  <InnerLayout>
    <Layout style={styles.container}>
      <Text style={styles.text} category='h1'>
      Expo UIKitten Typescript ReactNavigation Rematch Responsive Boilerplate
    </Text>
    </Layout>
  </InnerLayout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
