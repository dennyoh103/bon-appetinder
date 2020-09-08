import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const LoginScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('BottomTabNav')}>
                <View>
                    <Text>Login!</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Forgot') }>
                <View>
                    <Text>Forgot Password?</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen