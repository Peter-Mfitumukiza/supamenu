import { View, Text, StyleSheet, TextInput } from 'react-native'

export default SearchResultScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Search Result Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})