import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCodeImage from '../../assets/qr-code.png';
export default SearchScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Icon name="search" size={22} color="#9FA2B4" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search for your prefered restaurant"
                />
            </View>
            <Text style= {{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#4E4133',
                marginVertical: '10%'
            }}>or</Text>
            <TouchableOpacity>
                <Image source= {QRCodeImage} style={ styles.image } />
            </TouchableOpacity>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#4E4133',
                marginTop: '5%'
            }} >Scan, Pay & Enjoy!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F7941D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: "row",
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: 'white'
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
        color: "#9FA2B4"
    },
    icon: {
        color: '#F7941D'
    },
    image: {
        width: 150,
        height: 150
    }
})