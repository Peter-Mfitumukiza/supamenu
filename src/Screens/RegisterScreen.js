import { View, StyleSheet, Text } from "react-native"

export default function RegisterScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.secondContainer}>
                <Text style={styles.appName} >Supa<Text style={styles.yellow}>Menu</Text></Text>
                <Text style={styles.welcome}>Welcome ...</Text>
                <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 10 }} >Please Fill in the information</Text>
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
        paddingTop: 10,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        paddingTop: 20,
        textAlign: "center"
    },
    appName: {
        fontSize: 37,
        fontWeight: "bold",
        textAlign: "center"
    },
    yellow: {
        color: "#F7941D"
    },
    welcome:{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30
    }
})