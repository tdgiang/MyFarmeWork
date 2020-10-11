//@ts-ignore
import React, { } from 'react';
//@ts-ignore
import { View } from 'react-native';
import { Text, Button } from '../component/index';
import { useNavigation } from '@react-navigation/native';
import { login } from '../redux/actions/actionUser';
import { connect } from 'react-redux';

const Login = (props) => {
    const { login } = props
    const navigation = useNavigation()
    return (
        <View>
            <Button
                onPress={() => login()}
            >
                <Text>Login screen</Text>
            </Button>

        </View>
    )
}


export default connect(null, { login })(Login);