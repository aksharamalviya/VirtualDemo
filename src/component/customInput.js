import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ onChangeText, placeholder,value }) => {
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        height:50,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'gray',
        margin:10,
        borderRadius:10,
        padding:5,
    },
    input:{
        fontSize:15,

    }
})