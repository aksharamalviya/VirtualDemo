import { StyleSheet, Text, View, TextInput, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Custombutton = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Custombutton

const styles = StyleSheet.create({
    container: {
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'tomato',
        margin: 10,
        borderRadius: 10,
        padding: 5,
    },
    input: {
        fontSize: 15,
    }
})