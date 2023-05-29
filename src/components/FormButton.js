import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function FormButton({ textValue }){
    
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{ textValue }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F7941D',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    buttonShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})