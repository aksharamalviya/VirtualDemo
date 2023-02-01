import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/customInput'
import Custombutton from '../../component/custombutton'
import { useSelector, useDispatch } from 'react-redux'
import { Add } from '../../redux/action'

const AddUser = ({ navigation }) => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()

    const dispatch = useDispatch()

    const data = useSelector((state) => state.user)

    const _handleAddUser = async () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNum: phoneNum
        }

        const tempdata = [...data.User, user]
        dispatch(Add(tempdata))

        navigation.navigate("Home")
    }



    return (
        <View style={styles.container}>
            <CustomInput
                placeholder={"Enter First Name"}
                onChangeText={setFirstName}
            />
            <CustomInput
                placeholder={"Enter Last Name"}
                onChangeText={setLastName}

            />
            <CustomInput
                placeholder={"Enter Email"}
                onChangeText={setEmail}

            />
            <CustomInput
                placeholder={"Enter Phone"}
                onChangeText={setPhoneNum}

            />
            <Custombutton
                title={'Add User'}
                onPress={_handleAddUser}
            />
        </View>
    )
}

export default AddUser

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})