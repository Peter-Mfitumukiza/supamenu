import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Login");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText} >Supa<Text style={styles.white}>Menu</Text></Text>
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
    welcomeText: {
        fontSize: 37,
        fontWeight: "bold"
    },
    white: {
        color: "white"
    }
})
