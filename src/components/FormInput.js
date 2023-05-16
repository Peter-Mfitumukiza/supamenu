import { TextInput, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FormInput({ initialText, iconName }) {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={22} color="#888" style={styles.icon} />
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
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,
        paddingLeft: 20,
        alignItems: "center"
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
    }
})