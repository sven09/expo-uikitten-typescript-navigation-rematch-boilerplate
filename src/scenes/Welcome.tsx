import React, { Dispatch } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';
import { InnerLayout } from '../Layout/InnerLayout';
import { useRematchDispatch } from '../rematch/store';

export const WelcomeScreen = (props): LayoutElement => {


  const { logoutAsync } = useRematchDispatch((dispatch: Dispatch) => ({
    logoutAsync: dispatch.auth.logoutAsync
  }));

  return (
    <InnerLayout>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          Expo UIKitten Typescript ReactNavigation Rematch Responsive Boilerplate
    </Text>
        <Button
          onPress={() => logoutAsync()}>
          Logout
      </Button>
      </Layout>
    </InnerLayout>
  );
}

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
