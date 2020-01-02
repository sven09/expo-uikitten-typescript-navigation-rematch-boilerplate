// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React, { Dispatch } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, CheckBox, Layout, LayoutElement } from 'react-native-ui-kitten';
import { Formik, FormikProps } from 'formik';

import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
// =============================================================
// Components
// =============================================================
import { FormInput } from '../../components/Forminput';
import { EyeIcon, EyeOffIcon } from '../../assets/icons';
import { SignInData, SignInSchema } from '../../data/sign-in.model';
import { useRematchDispatch } from '../../rematch/store';
import { InnerLayout } from '../../Layout/InnerLayout';
import { AppRoute } from '../../navigation/AppRoute';

// =============================================================
// Component, Function
// =============================================================

export const SignInScreen = (props): LayoutElement => {
	const navigation = useNavigation();
	const { t } = useTranslation();

	const [shouldRemember, setShouldRemember] = React.useState<boolean>(false);
	const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

	const { loginAsync } = useRematchDispatch((dispatch: Dispatch) => ({
		loginAsync: dispatch.auth.loginAsync,
	}));

	const onFormSubmit = (values: SignInData): void => {
		loginAsync('any', values);
	};

	const navigateSignUp = (): void => {
		loginAsync('any');
		// props.navigation.navigate(AppRoute.SIGN_UP);
	};

	const onPasswordIconPress = (): void => {
		setPasswordVisible(!passwordVisible);
	};

	const renderForm = (props: FormikProps<SignInData>): React.ReactFragment => (
		<React.Fragment>
			<FormInput id="email" style={styles.formControl} placeholder={t('Email')} keyboardType="email-address" />
			<FormInput
				id="password"
				style={styles.formControl}
				placeholder={t('Password')}
				secureTextEntry={!passwordVisible}
				icon={passwordVisible ? EyeIcon : EyeOffIcon}
				onIconPress={onPasswordIconPress}
			/>
			<View style={styles.resetPasswordContainer}>
				<CheckBox style={styles.formControl} checked={shouldRemember} onChange={setShouldRemember} text={t('Remember Me')} />
				<Button
					appearance="ghost"
					status="basic"
					onPress={() => {
						console.log('do something');
					}}
				>
					{t('Forgot password?')}
				</Button>
			</View>
			<Button style={styles.submitButton} onPress={() => props.handleSubmit()}>
				{t('Sign in')}
			</Button>

			<Button style={styles.submitButton} onPress={() => navigation.navigate(AppRoute.IMPRINT)}>
				{t('Imprint')}
			</Button>
		</React.Fragment>
	);

	return (
		<InnerLayout>
			<ImageBackground style={styles.appBar} source={require('../../../assets/background.jpg')} />
			<Layout style={styles.formContainer}>
				<Formik initialValues={SignInData.empty()} validationSchema={SignInSchema} onSubmit={onFormSubmit}>
					{renderForm}
				</Formik>
				<Button style={styles.noAccountButton} appearance="ghost" status="basic" onPress={navigateSignUp}>
					{t('Don&apos;t have an account?')}
				</Button>
			</Layout>
		</InnerLayout>
	);
};

const styles = StyleSheet.create({
	appBar: {
		height: 192,
	},
	formContainer: {
		flex: 1,
		paddingVertical: 16,
		paddingHorizontal: 16,
	},
	resetPasswordContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	formControl: {
		marginVertical: 4,
	},
	submitButton: {
		marginVertical: 24,
	},
	noAccountButton: {
		alignSelf: 'center',
	},
});
