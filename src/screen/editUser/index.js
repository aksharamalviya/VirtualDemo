import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/customInput'
import Custombutton from '../../component/custombutton'
import { useSelector, useDispatch } from 'react-redux'
import { Add } from '../../redux/action'

const EditUser = ({ navigation, route }) => {

    const {item , index} = route.params
    console.log(index,item)

    const [firstName, setFirstName] = useState(item.firstName)
    const [lastName, setLastName] = useState(item.lastName)
    const [email, setEmail] = useState(item.email)
    const [phoneNum, setPhoneNum] = useState(item.phoneNum)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.user)


    const _handleEditUser = async () => {
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
                value={firstName}
                onChangeText={setFirstName}
            />
            <CustomInput
                placeholder={"Enter Last Name"}
                onChangeText={setLastName}
                value={lastName}

            />
            <CustomInput
                placeholder={"Enter Email"}
                onChangeText={setEmail}
                value={email}

            />
            <CustomInput
                placeholder={"Enter Phone"}
                onChangeText={setPhoneNum}
                value={phoneNum}

            />
            <Custombutton
                title={'Edit User'}
                onPress={_handleEditUser}
            />
        </View>
    )
}

export default EditUser

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})