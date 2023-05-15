import { StyleSheet, View, Text } from "react-native";

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>SupaMenu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ""
    }
})
