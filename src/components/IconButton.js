import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

const IconButton = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} />
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 15,
        borderColor: '#9FA2B4',
        borderWidth: 1,
    },
    iconContainer: {
        marginRight: 12,
    },
    icon: {
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        textAlign: 'center',
        width: '80%'
    },
});

export default IconButton;
