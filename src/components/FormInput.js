import { TextInput, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FormInput({ initialText, iconName }) {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={22} color="#9FA2B4" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={initialText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        borderColor: '#9FA2B4',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 20,
        alignItems: "center"
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
        color: "#9FA2B4"
    }
})