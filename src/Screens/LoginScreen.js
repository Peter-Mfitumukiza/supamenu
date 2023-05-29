import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import IconButton from '../components/IconButton';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import GoogleIcon from "../../assets/google-icon.png";
import FacebookIcon from "../../assets/facebook-icon.png";

export default function LoginScreen() {

    const navigation = useNavigation();

    const handleGoogleLogin = () => {
        console.log("Google Login")
    }
    const handleFacebookLogin = () => {
        consoele.log("Facebook Login")
    }
    const navigateToRegister = () => {
        navigation.navigate("Register");
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.secondContainer}>
                <Text style={styles.appName} >Supa<Text style={styles.yellow}>Menu</Text></Text>
                <Text style={styles.welcome}>Welcome ...</Text>
                <Text style={styles.normalText} >Sign in to continue</Text>
                <View style={styles.formContainer}>
                    <FormInput initialText="Email" iconName="envelope-o" />
                    <FormInput initialText="Password" iconName="unlock-alt" />
                    <FormButton textValue="Sign In" />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 25,
                    paddingRight: 25,
                    marginTop: 10,
                    marginBottom: 40
                }}>
                    <View style={{ borderColor: "#9FA2B4", borderWidth: 1, width: 120 }}></View>
                    <Text> OR </Text>
                    <View style={{ borderColor: "#9FA2B4", borderWidth: 1, width: 120 }}></View>
                </View>
                <IconButton icon={GoogleIcon} text="Continue with Google" onPress={handleGoogleLogin} />
                <IconButton icon={FacebookIcon} text="Continue with Facebook" onPress={handleFacebookLogin} />
                <TouchableOpacity>
                    <Text style={{
                        fontFamily: 'Roboto',
                        textAlign: "center",
                        marginTop: 10,
                        color: "#F7941D",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={styles.normalText}>Don't have an account? <Text style={styles.yellow}>Register</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F7941D'
    },
    secondContainer: {
        flex: 4,
        backgroundColor: "white",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        paddingTop: 20,
        textAlign: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    appName: {
        fontSize: 37,
        fontWeight: "bold",
        textAlign: "center"
    },
    yellow: {
        color: "#F7941D",
        fontWeight: 'bold'
    },
    welcome: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        color: "#223263"
    },
    formContainer: {
        marginTop: 30,
    },
    normalText: {
        fontFamily: 'Roboto',
        textAlign: "center",
        marginTop: 10,
        color: "#9FA2B4",
        fontSize: 17
    }
})