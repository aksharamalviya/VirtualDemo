import { StyleSheet, Text, View, Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Custombutton from '../../component/custombutton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Delete } from '../../redux/action'
const Data = [
    {
        FirstName: "Atul",
        LastName: "Sharma",
        Email: "Sharma.atul.2707@gmail.com",
        phoneNum: "9171843153"
    },
    {
        FirstName: "Atul",
        LastName: "Sharma",
        Email: "Sharma.atul.2707@gmail.com",
        phoneNum: "9171843153"
    }
]
const Home = ({ navigation }) => {

    const data = useSelector((state) => state.user)
    const dispatch = useDispatch()



    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.cardStyle}>

                <View >
                    <Text> First Name :{item.firstName}</Text>
                    <Text> Last Name :{item.lastName}</Text>
                    <Text> Email  :{item.email}</Text>
                    <Text> Phone  :{item.phoneNum}</Text>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('EditUser' , {item:item,index:index})}>
                        <Text>EDIT</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        const tempdata = data.User.filter((item1) => item1.email != item.email)

                        console.log(tempdata)
                        dispatch(Delete(tempdata))

                    }} style={styles.button}>
                        <Text>DELETE</Text>

                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate('AddUser')}>
                <Image
                    source={require('../../../assets/add.png')}
                    style={styles.addImage}
                />
            </TouchableOpacity>

            <View>
                <FlatList
                    data={data.User}
                    renderItem={_renderItem}
                />

            </View>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addImage: {
        height: 50,
        width: 50,
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    cardStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'space-between'

    },
    button: {
        padding: 5,
        margin: 10,
        backgroundColor: 'tomato',
        borderRadius: 10,
        justifyContent: 'center',
    }
})