import { StyleSheet, View, Text } from "react-native";

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={ styles.welcomeText } >Supa<Text style={ styles.white }>Menu</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7941D",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeText:{
        fontSize: 37,
        fontWeight: "bold"
    },
    white:{
        color: "white"
    }
})
