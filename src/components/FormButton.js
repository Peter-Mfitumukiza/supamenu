import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function FormButton({ textValue }){
    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#F7941D',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18
        }
    })

    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{ textValue }</Text>
        </TouchableOpacity>
    )
}