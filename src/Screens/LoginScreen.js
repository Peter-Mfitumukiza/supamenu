import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import GoogleIcon from '../../assets/google-icon.png';
import FacebookIcon from '../../assets/facebook-icon.png';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleGoogleLogin = () => {
    console.log('Google Login');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook Login');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <Text style={styles.appName}>
            Supa<Text style={styles.yellow}>Menu</Text>
          </Text>
          <Text style={styles.welcome}>Welcome ...</Text>
          <Text style={styles.normalText}>Sign in to continue</Text>
          <View style={styles.formContainer}>
            <FormInput initialText="Email" iconName="envelope-o" />
            <FormInput initialText="Password" iconName="unlock-alt" />
            <FormButton textValue="Sign In" handleOnPress={navigateToSearch} />
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>
          <IconButton icon={GoogleIcon} text="Continue with Google" onPress={handleGoogleLogin} />
          <IconButton icon={FacebookIcon} text="Continue with Facebook" onPress={handleFacebookLogin} />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.registerText}>
              Don't have an account? <Text style={styles.yellow}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F7941D',
  },
  mainContainer: {
    flex: 1,
    paddingTop: 100,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  yellow: {
    color: '#F7941D',
    fontWeight: 'bold',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#223263',
  },
  normalText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 10,
    color: '#9FA2B4',
    fontSize: 17,
  },
  formContainer: {
    marginTop: 30,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 10,
    marginBottom: 40,
  },
  divider: {
    borderColor: '#9FA2B4',
    borderWidth: 1,
    width: '40%',
  },
  dividerText: {
    color: '#9FA2B4',
    fontSize: 17,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 10,
    color: '#F7941D',
    fontSize: 17,
    fontWeight: 'bold',
  },
  registerText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 10,
    color: '#9FA2B4',
    fontSize: 17,
  },
});
