import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native"
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

export default function RegisterScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.secondContainer}>
                <Text style={styles.appName} >Supa<Text style={styles.yellow}>Menu</Text></Text>
                <Text style={styles.welcome}>Welcome ...</Text>
                <Text style={styles.normalText} >Please fill in the information</Text>
                <View style={styles.formContainer}>
                    <FormInput initialText="Full Name" iconName="user-o" />
                    <FormInput initialText="Phone Number" iconName="phone" />
                    <FormInput initialText="Email" iconName="envelope-o" />
                    <FormInput initialText="Password" iconName="unlock-alt" />
                    <FormButton textValue="Proceed" />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 25,
                    paddingRight: 25,
                    marginTop: 10
                }}>
                    <View style={{ borderColor: "#9FA2B4", borderWidth: 1, width: 120 }}></View>
                    <Text> OR </Text>
                    <View style={{ borderColor: "#9FA2B4", borderWidth: 1, width: 120 }}></View>
                </View>
                <Text style={styles.normalText}>If you have a PGM account</Text>
                <FormButton textValue="Sign In" />
                <Text style={styles.normalText}>Don't have an account?<Text style={styles.yellow}>Register</Text></Text>
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
        color: "#F7941D"
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
        // paddingLeft: 20,
        // paddingRight: 20,
    },
    normalText: {
        fontFamily: 'Roboto',
        textAlign: "center",
        marginTop: 10,
        color: "#9FA2B4",
        fontSize: 17
    }
})